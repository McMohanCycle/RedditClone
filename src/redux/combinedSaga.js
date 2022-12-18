import {all, fork} from 'redux-saga/effects';
import userSaga from './user/userSaga';

export default function* combinedSaga() {
  yield all([fork(userSaga)]);
}
