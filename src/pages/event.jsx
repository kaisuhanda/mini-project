import './pages.css'
import Layout from './layout'
import Sidebar from '../components/sidebar'
import { useState, useEffect } from 'react';
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

function EventPage() {
    // const eventsList = [
    //     { name: 'Halloween Party', location: 'Surabaya', time: 'Tue, Oct 25, 18:00', img: Event1, price: 'Starts from 250k' },
    //     { name: 'Google Ads Consultation', location: 'Jakarta', time: 'Thu, Nov 9, 08:00', img: Event2, price: 'Starts from 100k', },
    //     { name: 'Edu Fair Indonesia', location: 'Bali', time: 'Wed, Nov 1, 07:00', img: Event3, price: 'Free' },
    //     { name: 'Sunday Service', location: 'Singapore', time: 'Sun, Oct 25, 12:00', img: Event4, price: 'Free' },
    //     { name: 'Christmas Celebration', location: 'Sydney', time: 'Sun, Dec 25, 18:00', img: Event5, price: 'Free', },
    //     { name: 'Blockchain For Business', location: 'Kuala Lumpur', time: 'Tomorrow at 09:00', img: Event6, price: 'Starts from 400k', },
    //     { name: 'Unair Writing', location: 'Surabaya', time: 'Sat, 4 Nov, at 08:00', img: Event7, price: 'Starts from 50k', },
    //     { name: 'Therapy For Troubled Teens', location: 'Manila', time: 'Wed, 1 Nov, at 09:00', img: Event8, price: 'Starts from 100k', },
    //     { name: 'If you list, you last', location: 'Singapore', time: 'Sat, 11 Nov, at 10:00', img: Event9, price: 'Starts from 100k', },
    //     { name: 'AI For Impact', location: 'Online', time: 'Mon, 20 Nov, at 09:00', img: Event10, price: 'Free', },
    //     { name: 'Vibes Next Door', location: 'Jakarta', time: 'Sat, 18 Nov, at 20:00', img: Event11, price: 'Starts from 250k', },
    //     { name: 'Progressing Chords Basics', location: 'Online', time: 'Mon, 4 Dec, at 12:00', img: Event12, price: 'Starts from 50k', },
    //     { name: 'Business of Vending Machines', location: 'Online', time: 'Wed, 1 Nov, at 09:00', img: Event13, price: 'Starts from 30k', },
    //     { name: 'Economic Development', location: 'Singapore', time: 'Sat, 9 Dec, at 10:00', img: Event14, price: 'Starts from 100k', },
    // ]

    // const creatorsList = [
    //     { name: 'Erudite Training', eventsMade: ['Google Ads Consultation'], followers: 1000 },
    //     { name: 'Begin Group', eventsMade: ['Blockchain For Business'], followers: 1100 },
    //     { name: 'Horizon Group', eventsMade: ['Halloween Party', 'Vibes Next Door'], followers: 1000 },
    //     { name: 'AUG Student Services', eventsMade: ['Edu Fair Indonesia'], followers: 1000 },
    //     { name: 'One Christ Community', eventsMade: ['Sunday Service', 'Christmas Celebration'], followers: 1100 },
    //     { name: 'Ciputra University', eventsMade: ['AI For Impact', 'Business of Vending Machines'], followers: 2000 },
    //     { name: 'National University of Singapore', eventsMade: ['Economic Development', 'If you list, you last', 'Progressing Chords Basics'], followers: 4000 },
    //     { name: 'Better Help', eventsMade: ['Therapy For Troubled Teens'], followers: 500 },
    //     { name: 'Universitas Airlangga', eventsMade: ['Unair Writing'], followers: 3000 },
    // ];

    // const findCreator = (event) => {
    //     for (const creator of creatorsList) {
    //         for (const createdEvent of creator.eventsMade) {
    //             if (createdEvent === event.name) {
    //                 return creator.name
    //             }
    //         }
    //     }
    //     return null
    // };

    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:2066/events')
            .then(response => response.json())
            .then(data => setEventsList(data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);


    const [currentPage, setCurrentPage] = useState(1)
    const startIndex = (currentPage - 1) * 6
    const totalPages = Math.ceil(eventsList.length / 6)
    const remainingEvents = eventsList.length - (currentPage - 1) * 6
    const endIndex = currentPage === totalPages ? startIndex + remainingEvents : startIndex + 6
    const displayedEvents = eventsList.slice(startIndex, endIndex)


    const nextPage = () => {
        if (endIndex < eventsList.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (startIndex > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const row = []
    for (let i = 0; i < displayedEvents.length; i += 3) {
        row.push(displayedEvents.slice(i, i + 3))
    }

    return (
        <Layout>
            <div className="eventPage">
                <Sidebar />
                <div className='contentContainer'>
                    <table className='eventPageTable'>
                        <div className="showing">
                            Showing {startIndex + 1}-{endIndex} out of {eventsList.length} events
                        </div>
                        <tbody>
                            {row.map((displayedEvents, index) => (
                                <tr key={index}>
                                    {displayedEvents.map((event, index) => (
                                        <td key={index}>
                                            <div className="whiteContainer">
                                                <img src={event.img} />
                                                <div className="tdContainer">
                                                    <p>{event.name}</p>
                                                    <p className="timeCaption">{event.startdate}</p>
                                                    <p className="locationCaption">{event.location}, {event.price}</p>
                                                    <p className="creatorCaption">
                                                        {/* {findCreator(event)} */}
                                                        <div className="creatorContainer">
                                                            <div className="iContainer">
                                                                <i className="fa-solid fa-user"></i>
                                                            </div>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='onetwo'>
                        <ul>
                            <li onClick={prevPage}>&lt;</li>
                            <li onClick={nextPage}>&gt;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default EventPage

