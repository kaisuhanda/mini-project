import {
    Box,
    Input,
    FormControl,
    FormLabel,
    Button,
    Flex,
    Text,
    Select,
    Textarea
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle.js";
import ModalTicket from "../../components/ModalTicket.jsx";
import "./index.css"
import ModalLocation from "../../components/ModalLocation/index.jsx";
import FooterCreate from "../../components/FooterCreateEvent/index.jsx";
import { API_CALL } from "../../helper/helper.js";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateEvent = () => {
    const [dataInput, setDataInput] = useState({});
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);
    const [event, setEvent] = useState({});
    const { isOpen, onToggleOpen, onToggleClose } = useToggle();
    const modal2 = useToggle();
    const navigate = useNavigate();
    const accountData = useSelector((state) => {
        return state.auth
    });
    const params = useParams();
    // console.log("STAATTEE", accountData);
    // console.log("DATA INPUT", dataInput);
    console.log("EVENT", event);

    const getEventDetails = async () => {
        try {
            const result = await API_CALL.get(`/events/${params.event_id}`)
            // console.log("RESULT", result);
            setEvent(result.data);
        } catch (error) {
            console.log("error while getting event details", error);
        }
    };

    const printCategories = async () => {
        try {
            const response = await API_CALL.get("/categories/get-cat", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setCategories(response.data.result);
        } catch (error) {
            console.log("ERROR PRINT CATEGORIES", error);
        }
    };

    // ambil categories dari database
    useEffect(() => {
        printCategories();
        getEventDetails();
    }, [])

    const onUpdate = async () => {
        // AMBIL ID DARI TOKEN
        // if (!dataInput.promoter_id) {
        //     setDataInput({
        //         ...dataInput,
        //         promoter_id: accountData.id
        //     })
        // }

        let temp = { ...dataInput };

        const formData = new FormData()

        for (let index = 0; index < images.length; index++) {
            formData.append("images", images[index])
        }

        for (const prop in temp) {
            formData.append(`${prop}`, temp[prop])
        }

        try {

            const result = await API_CALL.patch(
                `/events/${params.event_id}`,
                formData
            );
            navigate("/dashboard")

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ModalLocation
                isOpen={modal2.isOpen}
                onClose={modal2.onToggleClose}
                address={(e) => setDataInput({ ...dataInput, location: e.target.value })}
                city={(e) => setDataInput({ ...dataInput, city_id: e.target.value })}
                urlOnline={(e) => setDataInput({ ...dataInput, location: e.target.value })}
                valueAddress={event.location}
                valueCity={event.city_id}
                url={event.location}
            />

            <Flex
                height={20}
                width={"100vw"}
                bgColor={"rgb(27, 24, 77)"}
                zIndex={9999}
            >
            </Flex>


            <Box className="page">
                <Text className="page-title"> Update Your Event </Text>
                <Text className="page-description">
                    You can update your event here. Please make sure that you change your event properly.
                </Text>

                <Box className="main-event">
                    <FormControl isRequired className="event-name"> {/* event name*/}
                        <FormLabel>
                            Event Name
                        </FormLabel>
                        <Input
                            className="box-shadow"
                            type="string"
                            placeholder={"Be clear and descriptive."}
                            onChange={(e) => setDataInput({ ...dataInput, name: e.target.value })}
                            defaultValue={event.name}
                        />
                    </FormControl>
                    <Flex justifyContent={"space-between"}>

                        <Flex gap={12}>
                            {/* startDate and endDate */}
                            <FormControl isRequired>
                                <FormLabel >Start Date</FormLabel>
                                <Input
                                    type={"datetime-local"}
                                    placeholder={"Choose Date"}
                                    marginBottom={5}
                                    onChange={(e) => setDataInput({ ...dataInput, start_date: e.target.value })}
                                    defaultValue={event.start_date}
                                />
                                {/* <FormHelperText>Input When Event is Started</FormHelperText> */}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel >End Date</FormLabel>
                                <Input
                                    type={"datetime-local"}
                                    placeholder={"Choose Date"}
                                    onChange={(e) => setDataInput({ ...dataInput, end_date: e.target.value })}
                                    defaultValue={event.end_state}
                                />
                            </FormControl>
                        </Flex>
                        <Box>
                            <FormControl isRequired> {/* event location */}
                                <FormLabel >Event Location</FormLabel>
                                <Button
                                    onClick={modal2.onToggleOpen}
                                    width={200}
                                    bgColor={"rgb(50, 30, 201)"}
                                    color={"white"}
                                    _hover={{ bgColor: "rgb(32, 22, 105)" }}
                                >
                                    Event Location
                                </Button>
                            </FormControl>
                        </Box>
                    </Flex>
                    <Box>
                        <FormControl isRequired> {/* event description */}
                            <FormLabel >Description</FormLabel>
                            <Textarea
                                type={"string"}
                                placeholder={"Event Description"}
                                height={200}
                                onChange={(e) => setDataInput({ ...dataInput, description: e.target.value })}
                                defaultValue={event.description}
                            />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl > {/* event image */}
                            <FormLabel >Image</FormLabel>
                            <Input
                                type={"file"}
                                placeholder={"Event Description"}
                                onChange={(e) => {
                                    return setImages(e.target.files)
                                }}
                                multiple
                            // defaultValue={event.name}
                            />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>
                                Category
                            </FormLabel>
                            <Select
                                onChange={(e) => { setDataInput({ ...dataInput, category_id: e.target.value }) }
                                }
                                defaultValue={event.category_id}
                            >

                                {categories.map((val, idx) => {
                                    return (
                                        <option key={idx} value={val.id}> {val.category} </option>
                                    )
                                })}

                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        {/* <Button
                            onClick={onToggleOpen}
                            bgColor={"rgb(50, 30, 201)"}
                            color={"white"}
                            _hover={{ bgColor: "rgb(32, 22, 105)" }}
                        >
                            Create Ticket
                        </Button> */}
                    </Box>
                </Box >

            </Box>
            <FooterCreate
                cancel={
                    <Button
                        position={"absolute"}
                        right={"230px"}
                        top={3}
                        bgColor={"rgb(194, 0, 13)"}
                        color={"white"}
                        onClick={() => navigate("/dashboard")}
                    >
                        Cancel
                    </Button>}
                event={<Button
                    position={"absolute"}
                    right={20}
                    top={3}
                    onClick={onUpdate}
                    color={"white"}
                    bgColor={"rgba(253, 166, 0, 255)"}
                >
                    Update Event
                </Button>}
            />
        </>
    )
}

export default UpdateEvent;