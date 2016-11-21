import { RECEIVE_BOOKINGS } from '../actions/'

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings
    default:
      return state
  }
}
