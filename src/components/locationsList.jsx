import './dashboardComponents.css';
import jakarta from '../assets/jakarta.jpeg';
import bali from '../assets/bali.jpeg';
import singapore from '../assets/singapore.webp';
import manila from '../assets/manila.webp';
import kl from '../assets/kl.webp';
import melbourne from '../assets/melbourne.jpeg';
import sydney from '../assets/sydney.webp';
import surabaya from '../assets/surabaya.jpeg';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Locations() {
    const [locationsList, setLocationsList] = useState([])
    const [position, setPosition] = useState(0);
    const ulRef = useRef(null);

    const fetchCities = async () => {
        let endpoint = 'http://localhost:2066/cities'
        const response = await fetch(endpoint)
        const data = await response.json()
        setLocationsList(data)
    }

    useEffect(() => {
        fetchCities()
        console.log(locationsList);
    }, [])

    const handleSwipe = (event) => {
        const ulElement = ulRef.current;
        if (ulElement) {
            const delta = event.deltaY || event.deltaX;

            if (delta !== 0) {
                ulElement.scrollLeft += delta;
                setPosition(ulElement.scrollLeft);
            }
        }
    };

    return (
        <div className="locations">
            <div className="locationListCaption">
                Popular Locations
            </div>
            <div className="locationsList" onWheel={handleSwipe}>
                <ul ref={ulRef}>
                    {locationsList.map((location, index) => (
                        <Link to={`events?city_id=${location.id}`}>
                            <li key={index}>
                                <img src={jakarta} alt={location.city} />
                                <div className="locationName">
                                    {location.city}
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Locations;
