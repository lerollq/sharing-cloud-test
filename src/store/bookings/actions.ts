import { api } from '../../api'
import { ActionTypeKeys } from './types'

const getBookingsAsyncAction = (): ThunkResult<Promise<void>> => async (dispatch) => {
  return api.getBookings().then((response) => {
    if (response.success) {
      console.log(response.data)
      dispatch({
        type: ActionTypeKeys.BOOKINGS_SET,
        payload: {
          bookings: response.data,
        },
      })
    } else {
      dispatch({ type: ActionTypeKeys.BOOKINGS_SET, payload: { bookings: [] } })
    }
  })
}

export const actions = {
  getBookingsAsyncAction,
}
