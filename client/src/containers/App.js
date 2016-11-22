import React from 'react'
import Calendar from './Calendar'
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
