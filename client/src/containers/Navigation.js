import React from 'react'
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'

const Container = props => <Navigation {...props} />

const mapStateToProps = props => {
  const { navigation: { current: state }, search: searchQuery, date: selectedDate } = props

  return {
    state,
    searchQuery,
    selectedDate
  }
}

export default connect(mapStateToProps)(Container)
