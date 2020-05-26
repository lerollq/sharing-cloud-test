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
        bookings: action.payload.bookings,
      }
    case ActionTypeKeys.BOOKINGS_ADD:
      return {
        ...state,
        bookings: {
          ...state.bookings,
          ...action.payload.booking,
        },
      }
    case ActionTypeKeys.BOOKING_DELETE:
      console.log(
        'Booking ID DELETE',
        action.payload.bookingId,
        state.bookings.length,
        state.bookings.filter((b) => b.id !== action.payload.bookingId).length
      )
      return {
        ...state,
        bookings: state.bookings.filter((b) => b.id !== action.payload.bookingId),
      }
    case ActionTypeKeys.BOOKINGS_SET_STATUS:
      return {
        ...state,
        loaded: action.payload.loaded,
        loading: action.payload.loading,
      }
    default:
      return state
  }
}
