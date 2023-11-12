import './eventDetailsComponents.css'

function headingDetails() {
    return (
        <div className="headingDetails">
            <h2>Title</h2>
            <ul>
                <li>
                    <div className="iContainer">
                        <i class="fa-solid fa-calendar"></i>
                    </div>
                    date
                </li>
                <li>
                    <div className="iContainer">
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    time
                </li>
                <li>
                    <div className="iContainer">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    location, city
                </li>
            </ul>
            <div className="seperator"></div>
            <div className="eventPromoter">
                made by <br /> promoter
            </div>
        </div>
    )
}

export default headingDetails