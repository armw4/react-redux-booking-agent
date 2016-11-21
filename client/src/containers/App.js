import React from 'react'
import Calendar from 'rc-calendar'
import Bookings from './Bookings'
import Navigation from './Navigation'
import './App.css'

export default () => {
  return (
    <div>
      <Navigation />
      <Calendar />
      <Bookings />
    </div>
  )
}
