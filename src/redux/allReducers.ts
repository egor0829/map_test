import { combineReducers } from 'redux';

import locationsReducer from './locationsReducer';
import userReducer from './userReducer';
import mapObjectsTypesReducer from './mapObjectsTypesReducer';
import allDataReducer from './allDataReducer';
import layersTypesReducer from './layersTypesReducer';

const reducers = {
  locationsStore: locationsReducer,
  userStore: userReducer,
  allDataStore: allDataReducer,
  mapObjectsTypesStore: mapObjectsTypesReducer,
  layersTypesStore: layersTypesReducer,
}

const allReducers = combineReducers(reducers);

export default allReducers;