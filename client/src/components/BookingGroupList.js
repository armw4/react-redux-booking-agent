import React, { PureComponent } from 'react'

export default class extends PureComponent {
  render() {
    const { groups } = this.props

    const nodes = groups.map(({ displayDate, bookings }) => {
      const nodes = bookings.length ?
        bookings.map(({ start, end, id }) => {
          return (
            <div key={id} className="booking">
              {start} - {end}
            </div>
          )
        }) : <p className="booking empty">You have not bookings for these dates.</p>

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
