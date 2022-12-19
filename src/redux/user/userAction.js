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

export const getSubreddits = () => {
  return {
    type: types.GET_SUBREDDIT,
  };
};

export const setSubreddits = payload => {
  return {
    type: types.SET_SUBREDDIT,
    payload,
  };
};

export const clearUser = () => {
  return {
    type: types.CLEAR_USER,
  };
};
