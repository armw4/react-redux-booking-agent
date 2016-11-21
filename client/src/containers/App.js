import React from 'react'
import Calendar from 'rc-calendar'
import Bookings from './Bookings'
import './App.css'

export default () => {
  return (
    <div>
      <Calendar />
      <Bookings />
    </div>
  )
}
