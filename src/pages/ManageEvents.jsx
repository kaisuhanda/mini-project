import EventHeader from "../components/EventHeader";
import LayoutPage from "../components/LayoutEvent";
import React, { useEffect, useState } from "react";
import EventCardDashboard from "../components/EventCard/index";
import { API_CALL } from "../helper/helper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalTicket from "../components/ModalTicket";
import useToggle from "../hooks/useToggle";
import { Button, } from "@chakra-ui/react";

const ManageEventPage = (props) => {
    const [dataInput, setDataInput] = useState({});
    const [events, setEvents] = useState([]);
    const [tickets, setTickets] = useState([]);
    const accountData = useSelector((state) => {
        return state.auth
    });
    const navigate = useNavigate();
    const { isOpen, onToggleOpen, onToggleClose } = useToggle();

    console.log("DATA INPUUTT", dataInput);
    // console.log("TICKETS", tickets);

    const getEvents = async () => {
        try {
            const result = await API_CALL.get(`/events/promoter/${accountData.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            // console.log("result getting event", result);
            setEvents(result.data);
        } catch (error) {
            console.log("error getting events", error);
        }
    };

    const getTickets = async () => {
        try {
            const result = await API_CALL.get(`/tickets`, {
                where: {
                    id: events.id
                }
            })
            setTickets(result.data)

        } catch (error) {
            console.log("error while getting tickets", error);
        }
    };

    useEffect(() => {
        getEvents();
        getTickets();
    }, [])

    const addTicket = async (eventId) => {
        // console.log("EVEENNT IDDD", eventId);
        // ketika free, maka price = 0;
        if (!dataInput.price) {
            setDataInput({
                ...dataInput,
                price: 0
            })
            console.log("dataINPUT DALAM ADDTICKET", dataInput);
        };

        let temp = { ...dataInput }
        // console.log("TEEMP", temp);
        // const formData = new FormData();

        // for (const prop in temp) {
        //     console.log("PROP", temp[prop]);
        //     formData.append(`${prop}`, temp[prop])
        // }
        // console.log("formDAaTA", formData);

        try {
            const result = await API_CALL.post(
                `/tickets/${dataInput.event_id}`,
                temp
            );
        } catch (error) {
            console.log("ERROR WHILE ADDING TICKET", error);
        }
    };

    const onDeleteEvent = async (isDeleted) => {
        try {
            const result = await API_CALL.delete(`/events/${isDeleted}`);
            getEvents();
        } catch (error) {
            console.log("ERROR WHILE DELETING EVENTS", error);
        }
    };

    return (
        <LayoutPage>
            <EventHeader />

            <ModalTicket
                isOpen={isOpen}
                onClose={onToggleClose}
                type={(e) => setDataInput({ ...dataInput, type: e.target.value })}
                price={(e) => setDataInput({ ...dataInput, price: e.target.value })}
                amount={(e) => setDataInput({ ...dataInput, stock: e.target.value })}
                start_sales={(e) => setDataInput({ ...dataInput, start_sales: e.target.value })}
                end_sales={(e) => setDataInput({ ...dataInput, end_sales: e.target.value })}
                buttonCreate={
                    <Button
                        bgColor={"rgb(50, 30, 201)"}
                        color={"white"}
                        _hover={{ bgColor: "rgb(235, 235, 235)", color: "black" }}
                        onClick={() => {
                            addTicket();
                            onToggleClose();
                            getTickets();
                        }}
                    >
                        Create
                    </Button>
                }
            />

            <div>
                {events?.map((val, idx) => {
                    return (
                        <>
                            <EventCardDashboard
                                key={idx}
                                title={val.name}
                                category={val["category.category"]}
                                start_date={new Date(val.start_date).toLocaleDateString("id", { day: "numeric", month: "short", year: "numeric" }) + ", " + new Date(val.start_date).toLocaleTimeString("id")}
                                end_date={new Date(val.end_date).toLocaleDateString("id", { day: "numeric", month: "short", year: "numeric" }) + ", " + new Date(val.end_date).toLocaleTimeString("id")}
                                ticketName={tickets.map((valTk, idxTk) => {
                                    if (val.id === valTk.event_id) {
                                        return (
                                            <>
                                                <Button
                                                    key={idx}
                                                    bgColor={"yellow"}
                                                // onClick={}
                                                >
                                                    {valTk.type}
                                                </Button>
                                            </>
                                        )
                                    }
                                })}
                                delete={() => onDeleteEvent(val.id)}
                                edit={() => {
                                    // setEventID(val.id)
                                    navigate(`/update-event/${val.id}`)
                                }}
                                newTicket={() => {
                                    onToggleOpen();
                                    setDataInput({ ...dataInput, event_id: val.id })
                                }}
                                onClick={() => {
                                    navigate(`/event-details/${val.id}`)
                                }}
                            />
                        </>
                    )
                })}
            </div>

        </LayoutPage>
    )
}

export default ManageEventPage;