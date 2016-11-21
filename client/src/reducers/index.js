import { combineReducers } from 'redux'
import bookings from './bookings'
import calendar from './calendar'
import navigation from './navigation'
import search from './search'
import date from './date'

const rootReducer = combineReducers({
  bookings,
  calendar,
  navigation,
  search,
  date
})

export default rootReducer
