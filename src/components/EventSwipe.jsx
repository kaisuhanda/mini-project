import './dashboardComponents.css';
import { useState, useRef, useEffect } from 'react';
import EventCard from './eventCard';
import { Link } from 'react-router-dom';

function EventSwipe() {
    const [eventsList, setEventsList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);
    const [city_id, setCity_id] = useState(1);
    const [position, setPosition] = useState(0);
    const ulRef = useRef(null);

    const fetchEvents = async () => {
        try {
            let endpoint = 'http://localhost:2066/events';
            let queryParams = [];
            if (city_id) {
                queryParams.push(`city_id=${city_id}`);
            }
            if (queryParams.length > 0) {
                endpoint += '?' + queryParams.join('&');
            }
            const response = await fetch(endpoint);
            const data = await response.json();
            setEventsList(data);
            console.log(city_id);
            console.log(endpoint);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCities = async () => {
        try {
            let endpoint = 'http://localhost:2066/cities';
            const response = await fetch(endpoint);
            const data = await response.json();
            setCitiesList(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchEvents();
        fetchCities();
    }, [city_id]);

    const handleSwipe = (event) => {
        ulElement = ulRef.current;
        if (ulElement) {
            const delta = event.deltaY || event.deltaX;
            if (delta !== 0) {
                ulElement.scrollLeft += delta;
                setPosition(ulElement.scrollLeft);
            }
        }
    };

    const handleCity = (e) => {
        const selectedCityId = Number(e.target.value);
        setCity_id((prevCityId) => (prevCityId === selectedCityId ? null : selectedCityId));
    };

    return (
        <div className="eventList" onWheel={handleSwipe}>
            <div className="views">
                Popular in
                <select name="location" id="location" placeholder="find a city" value={city_id || ''} onChange={handleCity}>
                    {citiesList.map((city, index) => (
                        <option key={index} value={city.id}>
                            {city.city}
                        </option>
                    ))}
                </select>
            </div>
            <ul className="eventCardList">
                {eventsList.map((event, index) => (
                    <Link to={`event-details/${event.id}`}>
                        <li key={index}>
                            <EventCard event={event} />
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default EventSwipe;
