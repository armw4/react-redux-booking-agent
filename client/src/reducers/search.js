import { SEARCH_BOOKINGS } from '../actions/'

const DEFAULT_STATE = null

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SEARCH_BOOKINGS:
      return action.query
    case DISMISS_SEARCH:
      return DEFAULT_STATE
    default:
      return state
  }
}
