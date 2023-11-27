import './pages.css'
import { useParams } from 'react-router-dom'
import Layout from './layout'
import HeadingDetails from '../components/HeadingDetails'
import Description from '../components/description'
import Ticket from '../components/ticket'
import { useEffect, useState } from 'react'

function EventDetails() {
    const [event, setEvent] = useState(null)
    const [city, setCity] = useState(null)
    const [tickets, setTickets] = useState([])
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const { event_id } = useParams()

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`http://localhost:2066/events/${event_id}`);
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchEvent();
    }, [event_id])

    useEffect(() => {
        if (event?.city_id) {
            const fetchCity = async () => {
                try {
                    const response = await fetch(`http://localhost:2066/cities/${event.city_id}`);
                    const data = await response.json()
                    setCity(data)
                } catch (error) {
                    console.log(error);
                }
            }
            fetchCity();
        }
    }, [event])

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                let endpoint = "http://localhost:2066/tickets";
                const response = await fetch(endpoint);
                const data = await response.json();
                const filtered = data.filter((ticket) => (
                    String(ticket.event_id) === String(event_id)
                ))
                setTickets(filtered);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTickets();
    }, [event_id]);

    console.log(total);

    return (
        <Layout>
            <div className="eventDetails">
                <div className="heading">
                    <img src={event?.image} alt="" />
                    <HeadingDetails event={event} city={city?.city}/>
                </div>
                <div className="lowerHalf">
                    <Description event={event} tickets={tickets} total={total} setTotal={setTotal} cart={cart} setCart={setCart}/>
                    <Ticket total={total} cart={cart} event_id={event_id}/>
                </div>
            </div>
        </Layout>
    );
}

export default EventDetails;
