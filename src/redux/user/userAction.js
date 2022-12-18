import types from './types';

export const getUser = () => {
  return {
    type: types.GET_USER,
  };
};

export const setUser = payload => {
  return {
    type: types.SET_USER,
    payload,
  };
};

export const setLoading = () => {
  return {
    type: types.SET_LOADING,
  };
};
