import { createAction, createReducer } from 'redux-act';

export const toggleLoading = createAction('toggleLoading');
export const setError = createAction<string>('setError');
export const setData = createAction<any>('setData');

const defaultState = {
  data: null,
  error: null,
  isLoading: false
}

const userReducer = createReducer({
  //@ts-ignore
  [toggleLoading]: (state) => {
    return {...state, isLoading: true};
  },
  //@ts-ignore
  [setError]: (state, error) => {
    return {...state, error, isLoading: false};
  },
  //@ts-ignore
  [setData]: (state, data) => {
    return {...state, data, isLoading: false};
  }
}, defaultState);

export default userReducer;