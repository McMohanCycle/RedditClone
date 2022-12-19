import {put, takeEvery} from 'redux-saga/effects';
import types from './types';
import {authorize} from 'react-native-app-auth';
import url from '../../assets/constants/url';
import tokens from '../../assets/constants/tokens';

const fetchSubreddits = accessToken =>
  fetch(`${url.redditOAuthAPI}subreddits/mine/subscriber`, {
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
    redirectUrl: url.redirectUrl,
    clientId: tokens.clientId,
    clientSecret: tokens.clientSecret,
    scopes: ['identity', 'mysubreddits', 'read'],
    serviceConfiguration: {
      authorizationEndpoint: url.authorizationEndpoint,
      tokenEndpoint: url.tokenEndpoint,
    },
    customHeaders: {
      token: {
        Authorization: `Basic ${tokens.clientId}`,
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
