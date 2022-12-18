import types from './types';

const initialState = {
  accessToken: null,
  tokenExpiry: null,
  isLoading: false,
  threwError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        ...action.payload,
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

    default:
      return state;
  }
};

export default userReducer;
