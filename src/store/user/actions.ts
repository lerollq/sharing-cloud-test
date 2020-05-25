import { ActionTypeKeys, ActionTypes, User } from './types'

const setUserAction = (user: User): ActionTypes => {
  return {
    type: ActionTypeKeys.USER_SET,
    payload: {
      user,
    },
  }
}

const logoutAction = (): ActionTypes => {
  localStorage.removeItem('token')
  return {
    type: ActionTypeKeys.USER_DELETE,
  }
}

export const actions = {
  setUserAction,
  logoutAction,
}
