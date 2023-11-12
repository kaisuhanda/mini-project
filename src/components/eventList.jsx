import './dashboardComponents.css'
import { useState, useRef, useEffect } from 'react';
import { current } from '@reduxjs/toolkit';
import Event1 from '../assets/event1.jpeg'
import Event2 from '../assets/event2.jpeg'
import Event3 from '../assets/event3.jpeg'
import Event4 from '../assets/event4.jpeg'
import Event5 from '../assets/event5.jpeg'
import Event6 from '../assets/event6.jpeg'
import Event7 from '../assets/event7.jpeg'
import Event8 from '../assets/event8.jpeg'
import Event9 from '../assets/event9.jpeg'
import Event10 from '../assets/event10.jpeg'
import Event11 from '../assets/event11.jpeg'
import Event12 from '../assets/event12.jpeg'
import Event13 from '../assets/event13.jpeg'
import Event14 from '../assets/event14.jpeg'
import EventCard from './eventCard';

function EventList() {
    const eventsList = [
        { name: 'Halloween Party', location: 'Surabaya', time: 'Tue, Oct 25, 18:00', img: Event1, price: 'Starts from 250k' },
        { name: 'Google Ads Consultation', location: 'Jakarta', time: 'Thu, Nov 9, 08:00', img: Event2, price: 'Starts from 100k', },
        { name: 'Edu Fair Indonesia', location: 'Bali', time: 'Wed, Nov 1, 07:00', img: Event3, price: 'Free' },
        { name: 'Sunday Service', location: 'Singapore', time: 'Sun, Oct 25, 12:00', img: Event4, price: 'Free' },
        { name: 'Christmas Celebration', location: 'Sydney', time: 'Sun, Dec 25, 18:00', img: Event5, price: 'Free', },
        { name: 'Blockchain For Business', location: 'Kuala Lumpur', time: 'Tomorrow at 09:00', img: Event6, price: 'Starts from 400k', },
        { name: 'Unair Writing', location: 'Surabaya', time: 'Sat, 4 Nov, at 08:00', img: Event7, price: 'Starts from 50k', },
        { name: 'Therapy For Troubled Teens', location: 'Manila', time: 'Wed, 1 Nov, at 09:00', img: Event8, price: 'Starts from 100k', },
        { name: 'If you list, you last', location: 'Singapore', time: 'Sat, 11 Nov, at 10:00', img: Event9, price: 'Starts from 100k', },
        { name: 'AI For Impact', location: 'Online', time: 'Mon, 20 Nov, at 09:00', img: Event10, price: 'Free', },
        { name: 'Vibes Next Door', location: 'Jakarta', time: 'Sat, 18 Nov, at 20:00', img: Event11, price: 'Starts from 250k', },
        { name: 'Progressing Chords Basics', location: 'Online', time: 'Mon, 4 Dec, at 12:00', img: Event12, price: 'Starts from 50k', },
        { name: 'Business of Vending Machines', location: 'Online', time: 'Wed, 1 Nov, at 09:00', img: Event13, price: 'Starts from 30k', },
        { name: 'Economic Development', location: 'Singapore', time: 'Sat, 9 Dec, at 10:00', img: Event14, price: 'Starts from 100k', },
    ]
    const [position, setPosition] = useState(0)
    const ulRef = useRef(null)

    const handleSwipe = (e) => {
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
                <li>For You</li>
                <li>Online</li>
                <li>Today</li>
                <li>New</li>
                <li>Popular</li>
            </ul>
            <ul className='eventCardList'>
                {eventsList.map((event, index) => (
                    <li key={index}>
                        <EventCard event={event} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;