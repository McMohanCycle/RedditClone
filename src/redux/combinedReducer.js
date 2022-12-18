import {combineReducers} from 'redux';
import userReducer from './user/userReducer';

const combinedReducer = combineReducers({user: userReducer});

export default combinedReducer;
