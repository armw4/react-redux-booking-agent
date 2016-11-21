import moment from 'moment'
import { bookings } from '../../../prototype/bookings.json'
import filter from 'lodash.filter'

export const SELECT_DATE = 'SELECT_DATE'

export const selectDate = date => ({
  type: SELECT_DATE,
  date
})

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS'

export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
})

export const fetchBookings = (selectedDate, query) => {
  const thirtyDaysFromSelectedDate = moment(selectedDate).add(30, 'd')

  const bookingsForNextThirtyDays = filter(bookings, ({ start }) => {
    return moment(start).isBetween(selectedDate, thirtyDaysFromSelectedDate, null, '[]')
  })

  return receiveBookings(bookingsForNextThirtyDays)
}

export const OPEN_CALENDAR = 'OPEN_CALENDAR'

export const openCalendar = () => ({
  type: OPEN_CALENDAR
})

export const CLOSE_CALENDAR = 'CLOSE_CALENDAR'

export const closeCalendar = () => ({
  type: CLOSE_CALENDAR
})

export const OPEN_SEARCH = 'OPEN_SEARCH'

export const openSearch = state => ({
  type: OPEN_SEARCH,
  state
})

export const DISMISS_SEARCH = 'DISMISS_SEARCH'

export const dismissSearch = state => ({
  type: DISMISS_SEARCH
})

export const SEARCH_BOOKINGS = 'SEARCH_BOOKINGS'

export const searchBookings = query => ({
  type: SEARCH_BOOKINGS,
  query
})
