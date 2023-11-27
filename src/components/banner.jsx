import './dashboardComponents.css'
import eventBanner from '../assets/eventBanner2.webp'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className="banner">
            <div className="imageContainer">
                <img src={eventBanner} alt="" className="backgroundImage" />
                <Link to='/events' className="FindYourNextEvent">
                    Find you next event
                </Link>
            </div>
        </div>
    )
}

export default Banner