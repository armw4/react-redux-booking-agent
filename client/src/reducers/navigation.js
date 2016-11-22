import { OPEN_CALENDAR, CLOSE_CALENDAR, OPEN_SEARCH, DISMISS_SEARCH } from '../actions/'
import { SEARCH_OPEN, CALENDAR_OPEN, CALENDAR_CLOSED } from '../constants'

const DEFAULT_STATE = {
  previous: null,
  current: CALENDAR_CLOSED
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case OPEN_CALENDAR:
      return {
        ...state,
        current: CALENDAR_OPEN
      }
    case CLOSE_CALENDAR:
      return {
        ...state,
        current: CALENDAR_CLOSED
      }
    case OPEN_SEARCH:
      return {
        previous: state.current,
        current: SEARCH_OPEN
      }
    case DISMISS_SEARCH:
      return {
        previous: null,
        current: state.previous
      }
    default:
      return state
  }
}
