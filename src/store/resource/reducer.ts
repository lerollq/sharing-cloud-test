import { InitialState, ActionTypes, ActionTypeKeys } from './types'
import { Reducer } from 'redux'

const initialState: InitialState = {
  loaded: false,
  loading: false,
  resource: {
    id: '',
    name: '',
    bookingDurationStep: 0,
    maximumBookingDuration: 0,
    minimumBookingDuration: 0,
  },
}

export const reducer: Reducer<InitialState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeKeys.RESOURCE_SET:
      return {
        ...state,
        loaded: true,
        loading: false,
        resource: action.payload.resource,
      }
    case ActionTypeKeys.RESOURCE_SET_STATUS:
      return {
        ...state,
        loaded: action.payload.loaded,
        loading: action.payload.loading,
      }
    default:
      return state
  }
}
