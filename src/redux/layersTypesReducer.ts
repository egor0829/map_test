import { createAction, createReducer } from "redux-act";

export const addLayerType = createAction<any>('addLayerType');

const defaultState = {
  data: [],
  error: null,
  isLoading: false,
};

const layersTypesReducer = createReducer(
  {
    //@ts-ignore
    [addLayerType]: (state, data) => {
      return { ...state, data, isLoading: false };
    },
  },
  defaultState
);

export default layersTypesReducer;
