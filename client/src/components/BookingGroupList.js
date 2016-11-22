import React, { PureComponent } from 'react'

export default class extends PureComponent {
  render() {
    const { groups } = this.props

    const nodes = groups.map(({ displayDate, bookings }) => {
      const nodes = bookings.length ?
        bookings.map(({ duration, startTime, eventName, roomName, endTime, id }) => {
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
