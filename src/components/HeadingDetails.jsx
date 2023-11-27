import './eventDetailsComponents.css'

function headingDetails({ event, city }) {
    return (
        <div className="headingDetails">
            <h2>{event?.name}</h2>
            <ul>
                <li>
                    <div className="iContainer">
                        <i className="fa-solid fa-calendar"></i>
                    </div>
                    {(event?.start_date)}
                </li>
                <li>
                    <div className="iContainer">
                        <i className="fa-solid fa-clock"></i>
                    </div>
                    {(event?.start_date)}
                </li>
                <li>
                    <div className="iContainer">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    {event?.location}, {city}
                </li>
            </ul>
            <div className="seperator"></div>
            <div className="eventPromoter">
                made by <br /> {event?.promoter_id}
            </div>
        </div>
    )
}

export default headingDetails