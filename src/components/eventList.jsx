import './dashboardComponents.css'
import { useState, useRef, useEffect } from 'react';
import { current } from '@reduxjs/toolkit';
import EventCard from './eventCard';
import { Link } from 'react-router-dom';

function EventList() {
    const [eventsList, setEventsList] = useState([])
    const [position, setPosition] = useState(0)
    const [active, setActive] = useState(null)
    const ulRef = useRef(null)

    const fetchEvents = async () => {
        try {
            let endpoint = 'http://localhost:2066/events';
            if (active === 'online') {
                endpoint += '?city_id=null'
            } else if (active === 'free') {
                endpoint += '?price=0'
            } else if (active === 'today') {
                endpoint += '?time=today'
            } else if (active === 'new') {
                endpoint += '?time=this-week'
            }
            const response = await fetch(endpoint);
            let data = await response.json();
            data = data.slice(0, 8)
            setEventsList(data);
            console.log(data);
            console.log(endpoint);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchEvents()
    }, [active])

    const handleActive = (filter) => {
        setActive(filter === active ? null : filter)
        console.log(filter);
    }

    const handleSwipe = (event) => {
        ulElement = ulRef.current
        if (ulElement) {
            if (ulElement) {
                const delta = event.deltaY || event.deltaX;
                if (delta !== 0) {
                    ulElement.scrollLeft += delta;
                    setPosition(ulElement.scrollLeft);
                }
            }
        };
    }

    return (
        <div className='eventList' onWheel={handleSwipe}>
            <div className="views">
                <i className="fa-solid fa-ticket"></i>
                Top Events
            </div>
            <ul className="popularCategories">
                <li className={active === 'online' ? 'active' : ''} onClick={() => handleActive('online')}>Online</li>
                <li className={active === 'today' ? 'active' : ''} onClick={() => handleActive('today')}>Today</li>
                <li className={active === 'new' ? 'active' : ''} onClick={() => handleActive('new')}>New</li>
                <li className={active === 'free' ? 'active' : ''} onClick={() => handleActive('free')}>Free</li>
            </ul>
            <ul className='eventCardList'>
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

export default EventList;