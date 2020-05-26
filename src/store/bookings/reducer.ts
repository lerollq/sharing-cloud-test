import { InitialState, ActionTypes, ActionTypeKeys } from './types'
import { Reducer } from 'redux'

const initialState: InitialState = {
  bookings: [],
  loaded: false,
  loading: true,
}

export const reducer: Reducer<InitialState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeKeys.BOOKINGS_SET:
      return {
        ...state,
        loaded: true,
        loading: false,
        bookings: action.payload.bookings,
      }
    default:
      return state
  }
}
