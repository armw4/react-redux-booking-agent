import React { Component }from 'react
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'

class Container extends Component {
  render() {
    return <Navigation {...this.props} />
  }
}

const mapStateToProps = state => {
  const { calendar } = state

  return {
    state: calendar
  }
}

export default connect(mapStateToProps)(Container)
