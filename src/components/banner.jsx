import './dashboardComponents.css'
import eventBanner from '../assets/eventBanner2.webp'

function Banner() {
    return (
        <div className="banner">
            <div className="imageContainer">
                <img src={eventBanner} alt="" className="backgroundImage" />
                <button className="FindYourNextEvent">
                    Find you next event
                </button>
            </div>
        </div>
    )
}

export default Banner