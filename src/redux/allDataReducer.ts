import { createAction, createReducer } from 'redux-act';

import {IMapObject, IMapFloor} from 'types/map.types';

export const toggleLoading = createAction('toggleLoading');
export const setError = createAction<string>('setError');
export const setAllData = createAction<any>('setAllData');
export const setParams = createAction<any>('setParams');

const defaultState = {
  ALL_DATA: null,
  error: null,
  isLoading: false
}

interface IParams {
  currentLocation: string;
  currentFloor: string;
  codeLocation: string;
  // property
  currentLocationMapObject: IMapFloor[];
  // data
  currentFloorMapObjectData: IMapObject[];
  // meetingRoomType: 
}

const allDataReducer = createReducer({
  //@ts-ignore
  [toggleLoading]: (state) => {
    return {...state, isLoading: true};
  },
  //@ts-ignore
  [setError]: (state, error) => {
    return {...state, error, isLoading: false};
  },
  //@ts-ignore
  [setAllData]: (state, ALL_DATA) => {
    return {...state, ALL_DATA, isLoading: false};
  },
  //@ts-ignore
  [setParams]: (state, params: IParams) => {
    return {...state, ...params, isLoading: false};
  }
}, defaultState);

export default allDataReducer;