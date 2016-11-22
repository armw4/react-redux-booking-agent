import React from 'react'
import Calendar from 'rc-calendar'
import { connect } from 'react-redux'
import Collapse from 'react-bootstrap/lib/Collapse'
import { CALENDAR_OPEN } from '../constants/'

const Container = ({ state, previousState }) => {
  return (
    <Collapse in={state === CALENDAR_OPEN || previousState === CALENDAR_OPEN}>
      <Calendar />
    </Collapse>
  )
}

const mapStateToProps = state => {
  const { navigation: { current, previous: previousState } } = state

  return {
    state: current,
    previousState
  }
}

export default connect(mapStateToProps)(Container)
