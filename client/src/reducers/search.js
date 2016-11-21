import { SEARCH_BOOKINGS } from '../actions/'

export default (state = null, action) => {
  switch(action.type) {
    case SEARCH_BOOKINGS:
      return action.query
    default:
      return state
  }
}
