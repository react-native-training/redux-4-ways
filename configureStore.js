import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore() {
  let store = createStore(app, applyMiddleware(promiseMiddleware()))
  return store
}
