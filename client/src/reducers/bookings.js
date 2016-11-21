import { RECEIVE_BOOKINGS, ADD_BOOKING } from '../actions/'

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings
    case ADD_BOOKING:
      return [...state, action.booking]
    default:
      return state
  }
}
