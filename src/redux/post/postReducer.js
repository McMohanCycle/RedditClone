import types from './types';

const initialState = {
  selectedSubreddit: '',
  selectedFilter: 'new',
  posts: [],
  isLoading: false,
  threwError: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case types.GET_POSTS:
      return {
        ...state,
        selectedFilter: action.payload,
      };
    case types.GET_FILTERED_POSTS:
      return {
        ...state,
        selectedFilter: action.payload,
      };
    case types.SET_SELECTED_SUBREDDIT:
      return {
        ...state,
        selectedSubreddit: action.payload,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case types.SET_ERROR:
      return {
        ...state,
        threwError: action.threwError,
      };
    case types.CLEAR_STATE:
      return {
        selectedSubreddit: '',
        selectedFilter: 'new',
        posts: [],
        isLoading: false,
        threwError: null,
      };

    default:
      return state;
  }
};

export default postReducer;
