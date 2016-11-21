import React from 'react
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'

const Container = ({ state, searchQuery })=> {
  return <Navigation state={state} />
}

const mapStateToProps = ({ calendar: state, search: searchQuery }) => {

  return {
    state,
    searchQuery
  }
}

export default connect(mapStateToProps)(Container)
