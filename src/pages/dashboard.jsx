import './pages.css'
import Layout from './layout'
import eventBanner from '../assets/eventBanner2.webp'
import Categories from '../components/categories'
import PopularCategories from '../components/popularCategories'
import EventList from '../components/eventList'

function DashboardPage() {
    return (
        <Layout>
            <div className="banner">
                <div className="imageContainer">
                    <img src={eventBanner} alt="" className="backgroundImage" />
                    <button className="FindYourNextEvent">
                        Find you next event
                    </button>
                </div>
            </div>

            <Categories />

            <div className="popular">
                <div className="popularIn">
                    Popular in
                    <select name="popularLocation" placeholder="Surabaya">
                        <option value="Surabaya">Surabaya</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bali">Bali</option>
                    </select>
                </div>
                <PopularCategories/>
                <EventList/>
            </div>
        </Layout>
    )
}

export default DashboardPage