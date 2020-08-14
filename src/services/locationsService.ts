import * as locationsActions from "../redux/locationsReducer";

import { logging } from "../utils/settings";
import { editBrowserUrl } from "../utils/utils";

import locationsFile from "../mocks/locations.json";

export const setLocations = () => {
  return async (dispatch) => {
    dispatch(locationsActions.toggleLoading());

    // const res = await fetch('../mocks/locations.json',{
    //   cache: 'no-store'
    // });
    // console.log(res);
    // const data = await res.json();

    let LOCATIONS = {};

    locationsFile.forEach((el) => {
      const keys = Object.keys(el),
        id = keys.splice(keys.indexOf("id"), 1)[0],
        symbolCode = el[id];

      LOCATIONS[symbolCode] = {};

      keys.forEach((key) => {
        LOCATIONS[symbolCode][key] = el[key];
      });
    });

    dispatch(locationsActions.setData(LOCATIONS));
  };
};

// Устанавливаем текущую локацию выбранной
export const setSelectedLocation = () => {
  return async (dispatch, getState) => {
    logging("count", "start setSelectedLocation");

    const LOCATIONS = getState().locationsStore.data;
    const { currentLocation, codeLocation } = getState().allDataReducer;

    for (let key in LOCATIONS) {
      // Если нашли данную локацию,
      if (key === currentLocation) {
        // то устанавливаем её выбранной для отображения
        LOCATIONS[key].selected = true;
        editBrowserUrl({ object: codeLocation });
      } else {
        // у других же локаций удаляем метку о том, что локация выбрана,
        delete LOCATIONS[key].selected;
      }
    }

    dispatch(locationsActions.setData(LOCATIONS));
  };
};
