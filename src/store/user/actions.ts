import { ActionTypeKeys } from './types'
import { api } from '../../api'
import { notif } from '../../helpers/toast'

const getLoginAsyncAction = (): ThunkResult<Promise<void>> => async (dispatch) => {
  return api.getLogin().then((response) => {
    if (response.success) {
      // If success set bearer token in local storage
      localStorage.setItem('token', response.data.token)
      // Then call getMeAsyncAction to retrieve user profil
      return dispatch(getMeAsyncAction())
    } else {
      notif.error(response.message)
      return Promise.reject()
    }
  })
}

const getMeAsyncAction = (): ThunkResult<Promise<void>> => async (dispatch) => {
  // Check first if bearer token exists in local Storage
  // If not return promise, no need to call the api
  if (!localStorage.getItem('token')) {
    return Promise.resolve()
  }

  // Call the API
  return api.getMe().then((response) => {
    if (response.success) {
      // Set user information in user reducer
      dispatch({
        type: ActionTypeKeys.USER_SET,
        payload: {
          user: response.data,
        },
      })
      return Promise.resolve()
    } else {
      notif.error(response.message)
      // If getMe failed, remove token from local storage
      localStorage.removeItem('token')
      // Then remove user's information in user reducer
      dispatch({
        type: ActionTypeKeys.USER_DELETE,
      })
      return Promise.reject()
    }
  })
}

const getLogoutAsyncAction = (): ThunkResult<Promise<void>> => async (dispatch) => {
  return api.getLogout().then((response) => {
    if (response.success) {
      // Remove bearer token from local storage
      localStorage.removeItem('token')
      // Then remove user's information in user reducer
      dispatch({
        type: ActionTypeKeys.USER_DELETE,
      })
      return Promise.resolve()
    }
    notif.error(response.message)
    return Promise.reject()
  })
}

export const actions = {
  getLoginAsyncAction,
  getMeAsyncAction,
  getLogoutAsyncAction,
}
