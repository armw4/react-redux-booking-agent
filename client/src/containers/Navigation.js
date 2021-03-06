import React from 'react'
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'
import { openCalendar, closeCalendar, openSearch, dismissSearch, searchBookings } from '../actions/'
import { bindActionCreators } from 'redux'

const Container = props => {
  const {
    openCalendar: onOpenCalendar,
    closeCalendar: onCloseCalendar,
    openSearch: onOpenSearch,
    dismissSearch: onDismissSearch,
    searchBookings: onSearchBookings,
    ...rest
  } = props

  const boundProps = {
    onOpenCalendar,
    onCloseCalendar,
    onOpenSearch,
    onDismissSearch,
    onSearchBookings,
    ...rest
  }

  return <Navigation {...boundProps} />
}

const mapStateToProps = props => {
  const { navigation: { current: state }, search: searchQuery, date: selectedDate } = props

  return {
    state,
    searchQuery,
    selectedDate
  }
}

const mapDispatchToProps = dispatch => {
  const actions = { openCalendar, closeCalendar, openSearch, dismissSearch, searchBookings }

  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
