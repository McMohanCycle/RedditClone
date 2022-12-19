import {put, takeEvery} from 'redux-saga/effects';
import types from './types';
import {authorize} from 'react-native-app-auth';

const fetchSubreddits = accessToken =>
  fetch('https://oauth.reddit.com/subreddits/mine/subscriber', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

function* getSubreddits(accessToken) {
  yield put({type: types.SET_LOADING, isLoading: true});
  try {
    const response = yield fetchSubreddits(accessToken);
    const data = yield response.json();

    const subreddits = data.data.children.map(item => {
      return item.data.display_name_prefixed;
    });

    yield put({
      type: types.SET_SUBREDDIT,
      payload: subreddits,
    });
  } catch (error) {
    console.log('getSubreddits/error', error);
    const threwError = {
      message: error.message,
      code: error.code,
    };
    yield put({type: types.SET_ERROR, threwError});
  }
  yield put({type: types.SET_LOADING, isLoading: false});
}

function* getUserToken() {
  const config = {
    redirectUrl: 'com.redditclone://oauth2redirect/reddit',
    clientId: '1aaFDuy0oaLesoVGiL3G-w',
    clientSecret: '',
    scopes: ['identity', 'mysubreddits', 'read'],
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
      tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    },
    customHeaders: {
      token: {
        Authorization: 'Basic 1aaFDuy0oaLesoVGiL3G-w',
      },
    },
  };

  yield put({type: types.SET_LOADING, isLoading: true});
  try {
    // Log in to get an authentication token
    const authState = yield authorize(config);
    const {accessToken, accessTokenExpirationDate} = authState;
    const payload = {
      accessToken,
      tokenExpiry: accessTokenExpirationDate,
      isLoading: false,
      threwError: null,
    };
    yield put({type: types.SET_USER, payload});
    yield getSubreddits(accessToken);
  } catch (error) {
    const threwError = {
      message: error.message,
      code: error.code,
    };
    yield put({type: types.SET_ERROR, threwError});
    yield put({type: types.SET_LOADING, isLoading: false});
  }
}

export default function* userSaga() {
  yield takeEvery(types.GET_USER, getUserToken);
}
