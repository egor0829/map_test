import config from '../config/default';

import store from '../redux/store';

declare var ymaps: any;

declare global {
  interface Window {
    MY_MAP: any;
  }
}

const {MIN_ZOOM, PIC_HEIGHT, worldSize, PIC_WIDTH} = config;

export const initMap = async() => {
  return await ymaps.ready(init);
}

const init = () => {
  const layerTypes = store.getState().layersTypesStore.data;

  const MY_MAP = new ymaps.Map(
    "map",
    {
      center: [0, 0],
      zoom: MIN_ZOOM,
      controls: ["zoomControl"],
      type: layerTypes[0],
    },
    {
      // Задаем в качестве проекции Декартову. При данном расчёте центр изображения будет лежать в координатах [0, 0].
      projection: new ymaps.projection.Cartesian([
        [PIC_HEIGHT / 2 - worldSize, -PIC_WIDTH / 2],
        [PIC_HEIGHT / 2, worldSize - PIC_WIDTH / 2],
      ]),
      // Устанавливаем область просмотра карты так, чтобы пользователь не смог выйти за пределы изображения.
      // restrictMapArea: [[-PIC_HEIGHT / 2, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, PIC_WIDTH / 2]]
      restrictMapArea: true,
    }
  );

  window.MY_MAP = MY_MAP;
}
