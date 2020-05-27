import { ActionTypeKeys } from './types'
import { api } from '../../api'

const getMeAsyncAction = (): ThunkResult<Promise<void>> => async (dispatch) => {
  // Check first if bearer token exists in local Storage
  // If not return promise, no need to call the api
  if (!localStorage.getItem('token')) {
    return Promise.resolve()
  }

  // Call the API
  return api
    .getMe()
    .then((response) => {
      dispatch({
        type: ActionTypeKeys.USER_SET,
        payload: {
          user: response,
        },
      })
    })
    .catch((err) => {
      // If getMe failed, remove token from local storage
      localStorage.removeItem('token')
      // Then remove user's information in user reducer
      dispatch({
        type: ActionTypeKeys.USER_DELETE,
      })
      return Promise.reject()
    })
}

const getLoginAsyncAction = (): ThunkResult<Promise<void>> => async (dispatch) =>
  api.getLogin().then((response) => {
    // If success set bearer token in local storage
    localStorage.setItem('token', response.token)
    // Then call getMeAsyncAction to retrieve user profil
    return dispatch(getMeAsyncAction())
  })

export const actions = {
  getLoginAsyncAction,
  getMeAsyncAction,
}
