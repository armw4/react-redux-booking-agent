import groupBy from 'lodash.groupby'
import orderBy from 'lodash.orderby'
import moment from 'moment'
import reduce from 'lodash.reduce'

const FORMAT = 'YYYY-MM-DD'
const DISPLAY_DATE_FORMAT = 'ddd MMM D'
const DISPLAY_TIME_FORMAT = 'LT'

const bookingInvariant = start => ({ [start.format(FORMAT)]: [] })

const createBookingGroup = (displayDate, bookings) => {
  const now = moment()

  return {
    displayDate: displayDate.toUpperCase(),
      bookings: orderBy(bookings, ({ start }) => moment(start).unix()).map(booking => {
      const { start, end } = booking

      const startDate = moment(start)
      const endDate = moment(end)

      return {
        ...booking,
        startTime: startDate.format(DISPLAY_TIME_FORMAT),
        endTime: endDate.format(DISPLAY_TIME_FORMAT),
        isOccurringNow: now.isBetween(startDate, endDate, null, '[]'),
        duration: startDate.from(endDate, true)
          .replace(/(hours|minutes)/g, match => match[0])
          .replace(/(\d+) (h|m)/g, '$1$2')
      }
    })
  }
}

export const getBookingGroups = (minDate, bookings) => {
    const formattedMinDate = minDate.format(FORMAT)

    const maxDate = moment(minDate).add(30, 'd')
    const formattedMaxDate = maxDate.format(FORMAT)

    let groupedBookings = groupBy(bookings, b => moment(b.start).format(FORMAT))

    if (!groupedBookings[formattedMinDate]) {
      groupedBookings = { ...bookingInvariant(minDate), ...groupedBookings }
    }

    if (!groupedBookings[formattedMaxDate]) {
      groupedBookings = { ...groupedBookings, ...bookingInvariant(maxDate) }
    }

    const bookingDates = Object.keys(groupedBookings)
    const bookingDatesAscending = orderBy(bookingDates, date => moment(date).unix())

    return reduce(bookingDatesAscending, (output, key, index) => {
      const now = moment()
      const groups = []
      const date = moment(key)
      const currentBookings = groupedBookings[key]
      const isNotBookingInvariant = currentBookings.length
      const nextDate = bookingDatesAscending[index + 1]
      const nextBookings = nextDate && groupedBookings[nextDate]
      const isMininumDate = index === 0
      const isToday = now.isSame(date, 'd')
      const noBookingsBetweenCurrentDateAndNextDate = nextBookings && moment(nextDate).diff(date, 'days') > 1

      if (isMininumDate || isNotBookingInvariant) {
        groups.push(createBookingGroup(`${isToday ? 'TODAY ' : ''}${date.format(DISPLAY_DATE_FORMAT)}`, currentBookings))
      }

      if (noBookingsBetweenCurrentDateAndNextDate) {
        const rangeStart = moment(date).add(1, 'd')
        const rangeEnd = nextBookings.length ? moment(nextDate).subtract(1, 'd') : moment(nextDate)

        groups.push(createBookingGroup(`${rangeStart.format(DISPLAY_DATE_FORMAT)} - ${rangeEnd.format(DISPLAY_DATE_FORMAT)}`, []))
      }

      return [...output, ...groups]
  }, [])
}
