import React from 'react'
import Calendar from 'rc-calendar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Collapse from 'react-bootstrap/lib/Collapse'
import { CALENDAR_OPEN } from '../constants/'
import { selectDate } from '../actions/'

const Container = props => {
  const { state, previousState, selectDate: onSelectDate } = props

  return (
    <Collapse in={state === CALENDAR_OPEN || previousState === CALENDAR_OPEN}>
      <Calendar onSelect={onSelectDate} />
    </Collapse>
  )
}

const mapDispatchToProps = dispatch => {
  const actions = { selectDate }

  return bindActionCreators(actions, dispatch)
}

const mapStateToProps = state => {
  const { navigation: { current, previous: previousState } } = state

  return {
    state: current,
    previousState
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
