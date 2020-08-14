import * as allDataActions from '../redux/allDataReducer';

import dataFile from '../mocks/data.json';

import {logging} from '../utils/settings';

export const allDataService = () => {
  return async (dispatch, getState) => {
    dispatch(allDataActions.toggleLoading());

    // const res = await fetch('../mocks/data.json',{
    //   cache: 'no-store'
    // });
    // console.log(res);
    // const data = await res.json();
    
    const ALL_DATA = dataFile;

    const LOCATIONS = getState().locationsStore.data;
    // const types = getState().typesStore.data;

    const currentLocation = getSelectedLocation(getState);
    const currentFloor = LOCATIONS[currentLocation].floors[0];
    const codeLocation = `${currentLocation}_${currentFloor}`;
    // property
    const currentLocationMapObject = ALL_DATA[currentLocation];
    // below: data
    const currentFloorMapObjectData = currentLocationMapObject[codeLocation].data;
    // const meetingRoomType = types[0];

    // for (let location in ALL_DATA) {
    //   for (let floor in ALL_DATA[location]) {
    //     ALL_DATA[location][floor].data.forEach(obj => {
    //         const { type, id } = obj;
    //         const numberFloor = Number(floor.replace(new RegExp(`${location}_`), ''));
    //         const isFavorite = localStorage[`${location}|${numberFloor}|${type}|${id}|${obj.properties.hintContent}`];

    //         if (isFavorite) {
    //             favorites.push({ location, floor: numberFloor, type, id, title: obj.properties.hintContent });
    //         }
    //     });
    //   }
    // }

    dispatch(allDataActions.setAllData(ALL_DATA));
    dispatch(allDataActions.setParams({
      currentLocation,
      currentFloor,
      codeLocation,
      currentLocationMapObject, 
      currentFloorMapObjectData
    }));
  };
}

export const allParamsService = ({location, floor = 0}) => {
  return async (dispatch, getState) => {

    const ALL_DATA = getState().allDataStore.data;
    const LOCATIONS = getState().locationsStore.data;

    logging('cust', 'important', 'start changeCurrentDataVariables');

    // Получаем индекс этажа
    floor = LOCATIONS[location].floors.indexOf(String(floor));
    // Если такой этаж не найден, то берём первый возможный
    if (floor === -1) floor = 0;

    const currentLocation = location;
    const currentFloor = LOCATIONS[currentLocation].floors[floor];
    const codeLocation = `${currentLocation}_${currentFloor}`;
    const currentLocationMapObject = ALL_DATA[currentLocation];
    const currentFloorMapObjectData = currentLocationMapObject[codeLocation]?.data || [];

    logging('cust', 'compare', currentLocation, currentFloor);

    dispatch(allDataActions.setParams({
      currentLocation,
      currentFloor,
      codeLocation,
      currentLocationMapObject, 
      currentFloorMapObjectData
    }));
  };
}

// Получаем выбранную локацию
const getSelectedLocation = (getState) => {
  logging('count', 'start getSelectedLocation');

  const LOCATIONS = getState().locationsStore.data;

  for (let key in LOCATIONS) {
    // Если мы нашли выбранную для отображения локацию, то возвращаем её значения,
    if (LOCATIONS[key].selected) {
      return key;
    }
  }
  for (let key in LOCATIONS) {
    // иначе же считаем выбранной для отображения первую незаблокированную локацию и возвращаем её значение
    if (!LOCATIONS[key].disable) {
      return key;
    }
  }
};