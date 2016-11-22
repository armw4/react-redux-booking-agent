import React from 'react'
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'
import { openCalendar, closeCalendar } from '../actions/'
import { bindActionCreators } from 'redux'

const Container = props => {
  const { openCalendar: onOpenCalendar, closeCalendar: onCloseCalendar, ...rest } = props
  const boundProps = { onOpenCalendar, onCloseCalendar, ...rest }

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
  const actions = { openCalendar, closeCalendar }

  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
