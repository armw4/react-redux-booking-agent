import React, { PureComponent } from 'react'
import { SEARCH_OPEN, CALENDAR_OPEN, CALENDAR_CLOSED } from '../constants'
import Hamburger from '../../font-awesome/blue/svg/bars.svg'
import Search from '../../font-awesome/blue/svg/search.svg'
import Plus from '../../font-awesome/blue/svg/plus.svg'
import ChevronSouth from '../../font-awesome/blue/svg/chevron-down.svg'
import ChevronNorth from '../../font-awesome/blue/svg/chevron-up.svg'

export default class extends PureComponent {
  handleSearchChange = ({ target: { value } }) =>  {
    const { onSearchBookings } = this.props

    onSearchBookings(value)
  }

  searchBar = () => {
    const { onDismissSearch } = this.props

    return (
      <div className="search-bar group">
        <Search className="search-icon search-component" id="search-addon" />
        <input onChange={this.handleSearchChange} type="text" className="search-input form-control search-component" placeholder="Search bookings" />
        <button onClick={onDismissSearch} className="cancel search-component">Cancel</button>
      </div>
    )
  }

  navMenu = () => {
    const { state, selectedDate, onOpenCalendar, onOpenSearch, onCloseCalendar } = this.props

    return (
      <nav className="navigation">
        <ul className="group">
          <li className="burger">
            <button><Hamburger /></button>
          </li>
          <li className="date">
            <button onClick={state === CALENDAR_OPEN ? onCloseCalendar : onOpenCalendar}>
              <span>{selectedDate.format('MMMM YYYY')}</span>
              {state === CALENDAR_OPEN ? <ChevronNorth /> : <ChevronSouth />}
            </button>
          </li>
          <li className="search">
            <button onClick={onOpenSearch}><Search /></button>
          </li>
          <li className="new">
            <button><Plus /></button>
          </li>
        </ul>
      </nav>
    )
  }

  render() {
    const { state } = this.props

    switch(state) {
      case SEARCH_OPEN:
        return this.searchBar()
      case CALENDAR_OPEN:
      case CALENDAR_CLOSED:
        return this.navMenu()
      default:
        throw new Error('invalid state:')
    }
  }
}
