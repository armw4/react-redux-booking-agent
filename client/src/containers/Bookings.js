import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchBookings } from '../actions'

class Bookings extends Component {
  static propTypes = {
    selectedDate: PropTypes.object.isRequired,
    bookings: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    searchQuery: PropTypes.string
  }

  componentDidMount() {
    const { dispatch, selectedDate, searchQuery } = this.props
    dispatch(fetchBookings(selectedDate, searchQuery))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDate !== this.props.selectedDate
      || nextProps.searchQuery !== this.props.searchQuery) {
      const { dispatch, selectedDate, searchQuery } = nextProps
      dispatch(fetchBookings(selectedDate, searchQuery))
    }
  }

  render() {
    const { bookings } = this.props

    return bookings.length === 0 ? <span>loading</span> : <span>hello world</span>
  }
}

const mapStateToProps = state => {
  const { date: selectedDate, bookings, search: searchQuery } = state

  return {
    selectedDate,
    bookings,
    searchQuery
  }
}

export default connect(mapStateToProps)(Bookings)
