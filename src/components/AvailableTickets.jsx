import React from 'react'
import InteractiveMap from './InteractiveMap'
import './styles/AvailableTickets.sass'

export default function AvailableTickets() {
  return (
    <div className='available-tickets-cont' >
      <h1>Select your tickets</h1>
      <div className="select-tickets-cont">
        <div className="display-ticket-selected">
            <h1>display</h1>
        </div>
        <InteractiveMap/>
      </div>
    </div>
  )
}
