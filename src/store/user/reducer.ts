import { InitialState, ActionTypes, ActionTypeKeys } from './types'
import { Reducer } from 'redux'

const initialState: InitialState = {
  loggedIn: false,
  user: undefined,
}

const reducer: Reducer<InitialState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeKeys.USER_SET:
      return {
        ...state,
        user: action.payload.user,
      }
    case ActionTypeKeys.USER_DELETE:
      return {
        ...state,
        user: undefined,
      }
    default:
      return state
  }
}

export default reducer
