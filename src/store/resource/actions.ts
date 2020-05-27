import { api } from '../../api'
import { ActionTypeKeys, ActionTypes, Resource } from './types'

const getResourceAsyncAction = (): ThunkResult<Promise<ActionTypes>> => async (dispatch) =>
  api.getResource().then((response) => {
    dispatch(setResourceAction(response))
    return dispatch(setStatusAction(true, false))
  })

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
