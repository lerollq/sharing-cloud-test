import { api } from '../../api'
import { ActionTypeKeys, ActionTypes, Booking } from './types'
import { notif } from '../../helpers/toast'

const getBookingsAsyncAction = (): ThunkResult<Promise<ActionTypes>> => async (dispatch) => {
  return api.getBookings().then((response) => {
    if (response.success) {
      dispatch(setBookingsAction(response.data))
    } else {
      notif.error(response.message)
    }
    return dispatch(setStatusAction(true, false))
  })
}

const deleteBookingAsyncAction = (bookingId: string): ThunkResult<Promise<ActionTypes | void>> => async (dispatch) => {
  return api.deleteBookings(bookingId).then((response) => {
    if (response.success) {
      return dispatch(deleteBookingAction(bookingId))
    } else {
      notif.error(response.message)
    }
  })
}

const postBookingAsyncAction = (name: string, duration: number): ThunkResult<Promise<void>> => async (dispatch) => {
  return api.postBooking({ name, duration }).then((response) => {
    if (response.success) {
      dispatch(getBookingsAsyncAction())
    } else {
      notif.error(response.message)
    }
  })
}

const deleteBookingAction = (bookingId: string): ActionTypes => ({
  type: ActionTypeKeys.BOOKING_DELETE,
  payload: { bookingId: bookingId },
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
