import './dashboardComponents.css'
import Music from '../assets/Music.webp'
import Nightlife from '../assets/Nightlife.webp'
import Performing from '../assets/Performing.webp'
import Holidays from '../assets/Holidays.webp'
import Health from '../assets/Health.webp'
import Hobbies from '../assets/Hobbies.webp'
import Business from '../assets/Business.webp'
import Food from '../assets/F&B.webp'

function Categories() {
    return (
        <div className="eventCategories">
                <ul>
                    <li>
                        <div className="catContainer">
                            <div className="catContainerImg" style={{ backgroundImage: `url(${Music})` }}>
                            </div>
                            Music
                        </div>
                    </li>
                    <li>
                        <div className="catContainer">
                            <div className="catContainerImg" style={{ backgroundImage: `url(${Nightlife})` }}>
                            </div>
                            Nightlife
                        </div>
                    </li>
                    <li>
                        <div className="catContainer">
                            <div className="catContainerImg" style={{ backgroundImage: `url(${Performing})` }}>
                            </div>
                            Performing Arts
                        </div>
                    </li>
                    <li>
                        <div className="catContainer">
                            <div className="catContainerImg" style={{ backgroundImage: `url(${Holidays})` }}>
                            </div>
                            Vacations
                        </div>
                    </li>
                    <li>
                        <div className="catContainer">
                            <div className="catContainerImg" style={{ backgroundImage: `url(${Health})` }}>
                            </div>
                            Health
                        </div>
                    </li>
                    <li>
                        <div className="catContainer">
                            <div className="catContainerImg" style={{ backgroundImage: `url(${Hobbies})` }}>
                            </div>
                            Hobbies
                        </div>
                    </li>
                    <li>
                        <div className="catContainer">
                            <div className="catContainerImg" style={{ backgroundImage: `url(${Business})` }}>
                            </div>
                            Business
                        </div>
                    </li>
                    <li>
                        <div className="catContainer">
                            <div className="catContainerImg" style={{ backgroundImage: `url(${Food})` }}>
                            </div>
                            Culinary
                        </div>
                    </li>
                </ul>
            </div>
    )
}

export default Categories