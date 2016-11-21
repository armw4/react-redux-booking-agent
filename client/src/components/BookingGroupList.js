import React, { PureComponent } from 'react'

export default class extends PureComponent {
  render() {
    const { groups } = this.props

    const nodes = groups.map(({ displayDate, bookings }) => {
      const nodes = bookings.length ?
        bookings.map(({ startTime, endTime, id }) => {
          return (
            <div key={id} className="booking">
              {startTime} - {endTime}
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
