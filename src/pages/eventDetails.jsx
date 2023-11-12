import './pages.css'
import Layout from "./layout"
import Event1 from '../assets/event1.jpeg'
import HeadingDetails from "../components/HeadingDetails"
import Description from "../components/description"
import Ticket from "../components/ticket"

function EventDetails() {
    return (
        <Layout>
            <div className="eventDetails">
                <div className="heading">
                    <img src={Event1} alt="" />
                    <HeadingDetails/>
                </div>
                <div className="lowerHalf">
                    <Description/>
                    <Ticket/>
                </div>
            </div>
        </Layout>
    )
}
export default EventDetails