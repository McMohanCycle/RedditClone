import types from './types';

export const setSelectedSubreddits = payload => {
  return {
    type: types.SET_SELECTED_SUBREDDIT,
    payload,
  };
};

export const setLoading = () => {
  return {
    type: types.SET_LOADING,
  };
};

export const clearState = () => {
  return {
    type: types.CLEAR_STATE,
  };
};

export const getPosts = (payload = 'new') => {
  return {
    type: types.GET_POSTS,
    payload,
  };
};

export const setPosts = payload => {
  return {
    type: types.SET_POSTS,
    payload,
  };
};

export const getFilteredPosts = (payload = 'new') => {
  return {
    type: types.GET_FILTERED_POSTS,
    payload,
  };
};
