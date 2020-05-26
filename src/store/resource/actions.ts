import { api } from '../../api'
import { ActionTypeKeys, ActionTypes, Resource } from './types'
import { notif } from '../../helpers/toast'

const getResourceAsyncAction = (): ThunkResult<Promise<ActionTypes>> => async (dispatch) => {
  return api.getResource().then((response) => {
    if (response.success) {
      dispatch(setResourceAction(response.data))
    } else {
      notif.error(response.message)
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
