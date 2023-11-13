import EventHeader from "../components/EventHeader";
import SideNavbar from "../components/Navbar/SideNavbar";
import LayoutPage from "../components/LayoutEvent";
import React from "react";
import EventCard from "../components/EventCard";

const ManageEventPage = (props) => {
    const [data, setData] = React.useState([
        {
            id: 1

        },
        {
            id: 2
        }
    ]);



    return (
        <LayoutPage>
            <EventHeader />
            <EventCard title="Touring Gan" category="trip" />

        </LayoutPage>
    )
}

export default ManageEventPage;