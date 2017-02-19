import { FETCH_DATA_PENDING, FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from '../constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCH_DATA_FULFILLED:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case FETCH_DATA_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}