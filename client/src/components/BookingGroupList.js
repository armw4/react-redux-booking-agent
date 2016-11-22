import React, { PureComponent } from 'react'
import Now from '../../font-awesome/green/svg/calendar-check-o.svg'

export default class extends PureComponent {
  render() {
    const { groups } = this.props

    const nodes = groups.map(({ displayDate, bookings }) => {
      const nodes = bookings.length ?
        bookings.map(booking => {
          const {
            isOccurringNow,
            duration,
            startTime,
            eventName,
            roomName,
            endTime,
            id
          } = booking

          return (
            <div key={id} className="booking group">
              <div className="time">
                <span className="event-start">{startTime}</span>
                <span className="event-end">{endTime}</span>
                <span className="duration">{duration}</span>
              </div>
              <div className="names">
                <span className="">{eventName}</span>
                <span className="">{roomName}</span>
              </div>
              {
                isOccurringNow ? (
                  <div className="now">
                    <Now />
                  </div>
                ) : null
              }
            </div>
          )
        }) : <p className="booking empty">You have no bookings for these dates.</p>

      return (
        <div key={displayDate} className="booking-group">
          <h5>{displayDate}</h5>
          {nodes}
        </div>
      )
    })

    return <div className="booking-groups">{nodes}</div>
  }
}
