import {all, fork} from 'redux-saga/effects';
import userSaga from './user/userSaga';
import postSaga from './post/postSaga';

export default function* combinedSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
