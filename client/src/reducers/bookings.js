import { RECEIVE_BOOKINGS } from '../actions/'
import { getBookingGroups } from '../lib'

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return getBookingGroups(action.date, action.bookings)
    default:
      return state
  }
}
