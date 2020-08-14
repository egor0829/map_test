import * as mapObjectsTypesActions from '../redux/mapObjectsTypesReducer';

import mapObjectsTypesFile from '../mocks/types.json';

export const setMapObjectsTypes = () => {
  return async (dispatch) => {
    dispatch(mapObjectsTypesActions.toggleLoading());
    
    // const res = await fetch('../mocks/types.json',{
    //   cache: 'no-store'
    // });
    // console.log(res);
    // const data = await res.json();
    
    const data = mapObjectsTypesFile;
    dispatch(mapObjectsTypesActions.setData(data));
  };
}