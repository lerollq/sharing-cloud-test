import { Reducer } from 'redux'
import { InitialState, ActionTypes, ActionTypeKeys } from './types'

const initialState: InitialState = {
  loggedIn: false,
  user: undefined,
}

const reducer: Reducer<InitialState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeKeys.USER_SET:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      }
    case ActionTypeKeys.USER_DELETE:
      return {
        ...state,
        loggedIn: false,
        user: undefined,
      }
    default:
      return state
  }
}

export default reducer
