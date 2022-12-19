import {put, select, takeEvery} from 'redux-saga/effects';
import types from './types';
import {
  getAccessToken,
  getSelectedFilter,
  getSelectedSubreddit,
  getSubredditArray,
} from './selector';

const fetchPosts = (accessToken, subreddit, selectedFilter) =>
  fetch(`https://oauth.reddit.com/${subreddit}/${selectedFilter}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

function* getFilteredPosts() {
  yield put({type: types.SET_LOADING, isLoading: true});
  try {
    const accessToken = yield select(getAccessToken);
    const selectedFilter = yield select(getSelectedFilter);
    const selectedSubreddit = yield select(getSelectedSubreddit);
    const response = yield fetchPosts(
      accessToken,
      selectedSubreddit,
      selectedFilter,
    );
    const data = yield response.json();

    const posts = data.data.children;

    yield put({type: types.SET_POSTS, payload: posts});
    yield put({type: types.SET_LOADING, isLoading: false});
  } catch (error) {
    console.log('getFilteredPosts/error', error);
    const threwError = {
      message: error.message,
      code: error.code,
    };
    yield put({type: types.SET_ERROR, threwError});
    yield put({type: types.SET_LOADING, isLoading: false});
  }
}

function* getSubredditPosts() {
  yield put({type: types.SET_LOADING, isLoading: true});
  try {
    const accessToken = yield select(getAccessToken);
    const selectedFilter = yield select(getSelectedFilter);
    const subreddits = yield select(getSubredditArray);
    const randomSubreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    yield put({type: types.SET_SELECTED_SUBREDDIT, payload: randomSubreddit});
    const response = yield fetchPosts(
      accessToken,
      randomSubreddit,
      selectedFilter,
    );
    const data = yield response.json();

    const posts = data.data.children;
    yield put({type: types.SET_POSTS, payload: posts});
  } catch (error) {
    console.log('getSubredditPosts/error', error);
    const threwError = {
      message: error.message,
      code: error.code,
    };
    yield put({type: types.SET_ERROR, threwError});
  }
  yield put({type: types.SET_LOADING, isLoading: false});
}

export default function* postSaga() {
  // yield takeEvery(types.GET_SUBREDDIT, getSubreddits);
  yield takeEvery(types.GET_POSTS, getSubredditPosts);
  yield takeEvery(types.GET_FILTERED_POSTS, getFilteredPosts);
}
