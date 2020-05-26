import { api } from '../../api'
import { ActionTypeKeys, ActionTypes, Resource } from './types'
import { bookingsActions } from '../bookings'

const getResourceAsyncAction = (): ThunkResult<Promise<ActionTypes>> => async (dispatch) => {
  return api.getResource().then((response) => {
    if (response.success) {
      dispatch(setResourceAction(response.data))
    } else {
      // Todo Display error message
    }
    return dispatch(setStatusAction(true, false))
  })
}

const setResourceAction = (resource: Resource): ActionTypes => ({
  type: ActionTypeKeys.RESOURCE_SET,
  payload: { resource },
})

const setStatusAction = (loaded: boolean, loading: boolean): ActionTypes => ({
  type: ActionTypeKeys.RESOURCE_SET_STATUS,
  payload: { loaded, loading },
})

export const actions = {
  getResourceAsyncAction,
}
