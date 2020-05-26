import { combineReducers } from 'redux'
import { userReducer } from './user'
import { bookingsReducer } from './bookings'
const rootReducer = combineReducers({
  user: userReducer,
  bookings: bookingsReducer,
})

export default rootReducer
