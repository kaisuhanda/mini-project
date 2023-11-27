import React from 'react'
import './eventDetailsComponents.css'

function HeadingDetails({ event, city }) {
  if (!event) {
    return null
  }

  const start_date = event.start_date ? event.start_date : ''
  const date = start_date.slice(0, 10)
  const time = start_date.slice(11, 16)

  return (
    <div className="headingDetails">
      <h2>{event.name}</h2>
      <ul>
        <li>
          <div className="iContainer">
            <i className="fa-solid fa-calendar"></i>
          </div>
          {date}
        </li>
        <li>
          <div className="iContainer">
            <i className="fa-solid fa-clock"></i>
          </div>
          {time}
        </li>
        <li>
          <div className="iContainer">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          {event.location}, {city}
        </li>
      </ul>
      <div className="seperator"></div>
      <div className="eventPromoter">
        Brought to you by Ticket Wave
      </div>
    </div>
  )
}

export default HeadingDetails
