import React from 'react'
import Calendar from 'rc-calendar'
import { connect } from 'react-redux'
import Collapse from 'react-bootstrap/lib/Collapse'
import { CALENDAR_OPEN } from '../constants/'

const Container = ({ state }) => {
  return (
    <Collapse in={state === CALENDAR_OPEN}>
      <Calendar />
    </Collapse>
  )
}

const mapStateToProps = ({ navigation: { current: state } })=> {
  return {
    state
  }
}

export default connect(mapStateToProps)(Container)
