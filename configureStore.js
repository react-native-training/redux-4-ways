import { createStore } from 'redux'
import app from './reducers'

export default function configureStore() {
  let store = createStore(app)
  return store
}