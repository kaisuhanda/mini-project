import './pages.css'
import Layout from './layout'
import Banner from '../components/banner'
import Categories from '../components/categories'
import EventList from '../components/eventList'
import CreatorsList from '../components/creatorsList'
import Locations from '../components/locationsList'
import EventSwipe from '../components/EventSwipe'
import EventSwipeTime from '../components/EventSwipeTime'
import { Link } from 'react-router-dom'

function DashboardPage() {
    return (
        <Layout>
            <Banner />
            <Categories />
            <EventList />
            <CreatorsList />
            <EventSwipe />
            <EventSwipeTime />
            <Locations />
            <Link to={`/events`}>
                <div className="viewMoreContainer">
                    <button className='viewMore'>
                        view more events
                    </button>
                </div>
            </Link>
        </Layout>
    )
}

export default DashboardPage