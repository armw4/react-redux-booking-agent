import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'rc-calendar/assets/index.css'

import './index.css'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
