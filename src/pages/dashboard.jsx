import './pages.css'
import Layout from './layout'
import Banner from '../components/banner'
import Categories from '../components/categories'
import EventList from '../components/eventList'
import CreatorsList from '../components/creatorsList'
import Locations from '../components/locationsList'
// import Layout from './layout'
// import Banner from '../components/dashboard/banner'
// import Categories from '../components/dashboard/categories'
// import EventList from '../components/dashboard/eventList'
// import CreatorsList from '../components/dashboard/creatorsList'
// import Locations from '../components/dashboard/locationsList'

function DashboardPage() {
    return (
        <Layout>
             <Banner/>
             <Categories />
             <EventList/>
             <CreatorsList/>
             <Locations/>
         </Layout>
    )
}

export default DashboardPage