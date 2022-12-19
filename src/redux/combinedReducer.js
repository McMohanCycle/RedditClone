import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import postReducer from './post/postReducer';

const combinedReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default combinedReducer;
