import { combineReducers } from 'redux'
import { userReducer } from './user'
import { bookingsReducer } from './bookings'
import { resourceReducer } from './resource'

const rootReducer = combineReducers({
  user: userReducer,
  bookings: bookingsReducer,
  resource: resourceReducer,
})

export default rootReducer
