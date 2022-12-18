import {applyMiddleware, createStore} from 'redux';
import combinedReducer from './combinedReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';
import combinedSaga from './combinedSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['user'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(combinedSaga);

const persister = persistStore(store);

export {store, persister};
