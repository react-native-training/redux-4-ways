import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'

export function fetchData () {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess (data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  }
}

export function getDataFailure (error) {
  return {
    type: FETCHING_DATA_FAILURE,
    errorMessage: error
  }
}