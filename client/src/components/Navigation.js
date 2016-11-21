import React, { PureComponent } from 'react'
import { SEARCH_OPEN, CALENDAR_OPEN, CALENDAR_CLOSED } from '../constants'

export default class extends PureComponent {
  render() {
    const { state } = this.props

    switch(state) {
      case SEARCH_OPEN:
      case CALENDAR_OPEN:
      case CALENDAR_CLOSED:
        return (
          <nav className="navigation">
            <ul className="group">
              <li className="burger">
                Hamburger
              </li>
              <li className="date">
                Date
              </li>
              <li className="search">
                Search
              </li>
              <li className="new">
                New Booking
              </li>
            </ul>
          </nav>
        )
      default:
        throw new Error('invalid state:')
    }
  }
}
