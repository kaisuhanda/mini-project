import EventHeader from "../components/EventHeader";
import SideNavbar from "../components/Navbar/SideNavbar";
import LayoutPage from "../components/LayoutEvent";
import React, { useEffect, useState } from "react";
import EventCardDashboard from "../components/EventCard/index";
import { API_CALL } from "../helper/helper";
import { Flex } from "@chakra-ui/react";

const ManageEventPage = (props) => {
    const [events, setEvents] = useState([])
    console.log("state events from API", events);
    useEffect(() => {
        const getEvents = async () => {
            try {
                const result = await API_CALL.get("/events/promoter/1")
                console.log("result getting event", result);
                setEvents(result.data);
            } catch (error) {
                console.log("error getting events", error);
            }
        }
        getEvents()
    }, [])

    return (
        <LayoutPage>
            <EventHeader />
            {events?.map((val, idx) => {
                console.log("VALL", val);
                return (
                    <EventCardDashboard
                        key={idx}
                        title={val.name}
                        category={val["category.category"]}
                        start_date={new Date(val.start_date).toLocaleDateString("id", { day: "numeric", month: "short", year: "numeric" }) + ", " + new Date(val.start_date).toLocaleTimeString("id")}
                        end_date={new Date(val.end_date).toLocaleDateString("id", { day: "numeric", month: "short", year: "numeric" }) + ", " + new Date(val.end_date).toLocaleTimeString("id")}
                    />
                )
            })
            }

        </LayoutPage>
    )
}

export default ManageEventPage;