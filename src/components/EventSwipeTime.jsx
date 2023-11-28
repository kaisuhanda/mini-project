import './dashboardComponents.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from './eventCard';

function EventSwipeTime() {
    const [eventsList, setEventsList] = useState([]);
    const [time, setTime] = useState('this-week');
    const [position, setPosition] = useState(0);
    const ulRef = useRef(null);

    const fetchEvents = async () => {
        try {
            let endpoint = 'http://localhost:2066/events';
            let queryParams = [];
            if (time) {
                queryParams.push(`time=${time}`);
            }
            if (queryParams.length > 0) {
                endpoint += '?' + queryParams.join('&');
            }
            const response = await fetch(endpoint);
            const data = await response.json();
            setEventsList(data);
            console.log(time);
            console.log(endpoint);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [time]);

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

    const handleTime = (time) => {
        setTime(time)
    };

    return (
        <div className="eventList" onWheel={handleSwipe}>
            <div className="views">
                Events
                <select name="location" id="location" placeholder="find a city" onChange={(e) => handleTime(e.target.value)}>
                    <option value="this-week">this week</option>
                    <option value="today">today</option>
                    <option value="tomorrow">tomorrow</option>
                    <option value="this-month">this month</option>
                </select>
            </div>
            {eventsList.length > 0 ? (
                <ul className="eventCardList">
                {eventsList.map((event, index) => (
                    <Link to={`event-details/${event.id}`}>
                        <li key={index}>
                            <EventCard event={event} />
                        </li>
                    </Link>
                ))}
            </ul>
            ) : (
                <div className='noEventsFound'>
                    <p>Sorry, no events available {time}</p>
                </div>
            )}
        </div>
    );
}

export default EventSwipeTime;
