import moment from 'moment'
import { bookings } from '../../../prototype/bookings.json'
import filter from 'lodash.filter'
import escape from 'escape-string-regexp'

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

const filterBookings = (selectedDate, query, events) => {
  const thirtyDaysFromSelectedDate = moment(selectedDate).add(30, 'd')

  const filteredEvents = filter(events, ({ start }) => {
    return moment(start).isBetween(selectedDate, thirtyDaysFromSelectedDate, null, '[]')
  })

  if (query) {
    const contains = new RegExp(escape(query), 'i')

    filter(filteredEvents, ({ eventName, roomName  }) => {
      return contains.test(eventName) || contains.test(roomName)
    })
  } else {
    return filteredEvents
  }
}

export const fetchBookings = (selectedDate, query) => {
  const bookingsForNextThirtyDays = filterBookings(selectedDate, query, bookings)

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

export const ADD_BOOKING = 'ADD_BOOKING'

export const addBooking = (selectedDate, query, booking) => {
  bookings.push(booking)

  const bookingSatifiesCurrentCriteria = filterBookings(selectedDate, query, [booking]).length

  if (bookingSatifiesCurrentCriteria) {
    return {
      type: ADD_BOOKING,
      booking
    }
  }
}
