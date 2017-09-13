import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

import { persistStore, autoRehydrate} from 'redux-persist';

import {AsyncStorage} from 'react-native';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, compose(autoRehydrate(), applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(dataSaga)

persistStore(store, { storage: AsyncStorage }, () => {
  console.log('restored');
});

export default store;
