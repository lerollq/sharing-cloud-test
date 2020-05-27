import { api } from '../../api'
import { ActionTypeKeys, ActionTypes, Booking } from './types'

const getBookingsAsyncAction = (): ThunkResult<Promise<ActionTypes>> => async (dispatch) =>
  api.getBookings().then((response) => {
    dispatch(setBookingsAction(response))
    return dispatch(setStatusAction(true, false))
  })

const deleteBookingAsyncAction = (bookingId: string): ThunkResult<Promise<ActionTypes | void>> => async (dispatch) =>
  api.deleteBookings(bookingId).then(() => {
    return dispatch(deleteBookingAction(bookingId))
  })

const postBookingAsyncAction = (name: string, duration: number): ThunkResult<Promise<ActionTypes>> => async (dispatch) =>
  api.postBooking({ name, duration }).then((response) => {
    return dispatch(getBookingsAsyncAction())
  })

const deleteBookingAction = (bookingId: string): ActionTypes => ({
  type: ActionTypeKeys.BOOKING_DELETE,
  payload: { bookingId },
})

const setStatusAction = (loaded: boolean, loading: boolean): ActionTypes => ({
  type: ActionTypeKeys.BOOKINGS_SET_STATUS,
  payload: { loaded, loading },
})

const setBookingsAction = (bookings: Booking[]): ActionTypes => ({
  type: ActionTypeKeys.BOOKINGS_SET,
  payload: { bookings },
})

export const actions = {
  getBookingsAsyncAction,
  deleteBookingAsyncAction,
  postBookingAsyncAction,
}
