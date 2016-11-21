import { RECEIVE_BOOKINGS } from '../actions/'
import { getBookingGroups } from '../lib'

const DEFAULT_STATE = {
  groups: [],
  events: []
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      const groups = getBookingGroups(action.date, action.bookings)

      return {
        groups,
        events: action.bookings
      }
    default:
      return state
  }
}
