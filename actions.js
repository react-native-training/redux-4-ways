import { FETCH_DATA } from './constants'
import getPeople from './api'

export function fetchData() {
  return {
    type: FETCH_DATA,
    payload: getPeople()
  }
}