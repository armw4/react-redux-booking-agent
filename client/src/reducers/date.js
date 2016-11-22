import moment from 'moment'
import { SELECT_DATE } from '../actions'

export default (state = moment(), action) => {
  switch (action.type) {
    case SELECT_DATE:
      return action.date
    default:
      return state
  }
}
