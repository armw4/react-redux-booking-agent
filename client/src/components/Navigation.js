import React, { PureComponent } from 'react'
import { SEARCH_OPEN, CALENDAR_OPEN, CALENDAR_CLOSED } from '../constants'
import Hamburger from '../../font-awesome/blue/svg/bars.svg'
import Search from '../../font-awesome/blue/svg/search.svg'
import Plus from '../../font-awesome/blue/svg/plus.svg'
import ChevronSouth from '../../font-awesome/blue/svg/chevron-down.svg'

export default class extends PureComponent {
  render() {
    const { state, selectedDate } = this.props

    switch(state) {
      case SEARCH_OPEN:
      case CALENDAR_OPEN:
      case CALENDAR_CLOSED:
        return (
          <nav className="navigation">
            <ul className="group">
              <li className="burger">
                <button><Hamburger /></button>
              </li>
              <li className="date">
                <button>
                  <span>{selectedDate.format('MMMM YYYY')}</span>
                  <ChevronSouth />
                </button>
              </li>
              <li className="search">
                <button><Search /></button>
              </li>
              <li className="new">
                <button><Plus /></button>
              </li>
            </ul>
          </nav>
        )
      default:
        throw new Error('invalid state:')
    }
  }
}
