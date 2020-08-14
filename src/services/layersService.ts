import * as layersActions from "../redux/layersTypesReducer";

import { logging } from '../utils/settings';

import config from '../config/default';

const {MIN_ZOOM, MAX_ZOOM, TILES_PATH} = config;

declare var ymaps: any;

// Создаём слой карты, чтобы иметь возможность переключаться на него
export const createLayerMap = () => {
  return async (dispatch, getState) => {
    logging('count', 'start createLayerMap');

    const layerTypes = getState().layersTypesStore.data;
    const {codeLocation, currentLocation, currentFloor} = getState().allDataStore;

    // Проверяем, не создавали ли мы уже такой слой
    layerTypes.forEach((layer) => {
      if (codeLocation === layer["_name"]) return;
    });

    function TargetFloor() {
      logging('count', 'start TargetFloor');

      const layer = new ymaps.Layer(
        `assets/tiles/tiles/${currentLocation}/${currentFloor}/%z/tile-%x-%y.png`,
        {
          notFoundTile: `../../assets/tiles/tiles/not-found.png`,
        }
      );
      // Указываем доступный диапазон масштабов для данного слоя.
      layer.getZoomRange = function () {
        logging('count', 'start TargetFloor.layer.getZoomRange');

        return ymaps.vow.resolve([MIN_ZOOM, MAX_ZOOM]);
      };

      return layer;
    }

    ymaps.ready(() => {
      ymaps.layer.storage.add(codeLocation, TargetFloor);

      const mapTypeTarget = new ymaps.MapType(codeLocation, [codeLocation]);

      ymaps.mapType.storage.add(codeLocation, mapTypeTarget);

      dispatch(layersActions.addLayerType(mapTypeTarget));

      logging('cust', 'array', 'Массив типов карт', layerTypes);
    })
  };
};

// Устанавливаем тип слоя карты
export const setLayerType = (location, floor) => {
  return async (dispatch, getState) => {
    logging('count', 'start setLayerType');

    const layerTypes = getState().layersTypesStore.data;
    const codeLocation = getState().allDataStore.codeLocation;

    const layerType = layerTypes.find((layer) => layer["_name"] === codeLocation);
    window.MY_MAP.setType(layerType);
  }
};
