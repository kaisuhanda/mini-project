import {
    Box,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputLeftElement,
    InputGroup,
    ButtonGroup,
    Button,
    Flex,
    Text,
    Select,
    Textarea
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle";
import ModalTicket from "../../components/ModalTicket";
import "./index.css"
import ModalLocation from "../../components/ModalLocation";
import FooterCreate from "../../components/FooterCreateEvent";
import { API_CALL } from "../../helper/helper.js";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
    const [dataInput, setDataInput] = useState({});
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);
    const { isOpen, onToggleOpen, onToggleClose } = useToggle();
    const modal2 = useToggle();
    const navigate = useNavigate();
    console.log("DATAINPUT", dataInput);
    console.log("IMAAGESSS", images);

    // ambil categories dari database
    useEffect(() => {
        const printCategories = async () => {
            // console.log("testt");
            try {
                const response = await API_CALL.get("/categories")
                // console.log("RESPONSE", response);
                setCategories(response.data.result);
                // console.log(categories);
            } catch (error) {
                console.log("ERROR PRINT CATEGORIES", error);
            }
        }

        printCategories();
    }, [])

    const onCreate = async () => {

        if (!dataInput.price) {
            setDataInput({
                ...dataInput,
                price: 0
            })
        }
        if (!dataInput.promoter_id) {
            setDataInput({
                ...dataInput,
                promoter_id: 1
            })
        }

        let temp = { ...dataInput };

        const formData = new FormData()
        console.log("IMG", images);

        for (let index = 0; index < images.length; index++) {
            formData.append("images", images[index])
        }

        for (const prop in temp) {
            // console.log("PROOPP", typeof (prop));
            console.log("PROOPP", `${prop}`, temp[prop]);
            formData.append(`${prop}`, temp[prop])
        }
        console.log("FORM DATA", formData);

        try {

            const result = await API_CALL.post(
                "/events",
                formData
            );
            console.log("RESSULLLT", result);
            navigate("/dashboard")

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ModalTicket
                isOpen={isOpen}
                onClose={onToggleClose}
                type={(e) => setDataInput({ ...dataInput, type: e.target.value })}
                price={(e) => setDataInput({ ...dataInput, price: e.target.value })}
                amount={(e) => setDataInput({ ...dataInput, stock: e.target.value })}
                start_sales={(e) => setDataInput({ ...dataInput, start_sales: e.target.value })}
                end_sales={(e) => setDataInput({ ...dataInput, end_sales: e.target.value })}
            />

            <ModalLocation
                isOpen={modal2.isOpen}
                onClose={modal2.onToggleClose}
                address={(e) => setDataInput({ ...dataInput, location: e.target.value })}
                city={(e) => setDataInput({ ...dataInput, city: e.target.value })}
                urlOnline={(e) => setDataInput({ ...dataInput, location: e.target.value })}
                valueAddress={dataInput.location}
                valueCity={dataInput.city}
            />
            <Flex
                height={20}
                width={"100%"}
                bgColor={"rgb(27, 24, 77)"}
                zIndex={9999}
            >
            </Flex>


            <Box className="page">
                <Text className="page-title"> Create Your Event </Text>
                <Text className="page-description"> This is where you create your event. Make it as attractive as you can. </Text>

                <Box className="main-event">
                    <FormControl isRequired className="event-name"> {/* event name*/}
                        <FormLabel>
                            Event Name
                        </FormLabel>
                        <Input className="box-shadow" type="string" placeholder={"Be clear and descriptive."} onChange={(e) => setDataInput({ ...dataInput, name: e.target.value })} />
                    </FormControl>
                    <Flex justifyContent={"space-between"}>

                        <Flex gap={12}>
                            {/* startDate and endDate */}
                            <FormControl isRequired>
                                <FormLabel >Start Date</FormLabel>
                                <Input
                                    type={"datetime-local"} placeholder={"Choose Date"} marginBottom={5}
                                    onChange={(e) => setDataInput({ ...dataInput, start_date: e.target.value })}
                                />
                                {/* <FormHelperText>Input When Event is Started</FormHelperText> */}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel >End Date</FormLabel>
                                <Input
                                    type={"datetime-local"}
                                    placeholder={"Choose Date"}
                                    onChange={(e) => setDataInput({ ...dataInput, end_date: e.target.value })}
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
                                    console.log("E", e.target.files);
                                    return setImages(e.target.files)
                                }}
                                multiple
                            />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>
                                Category
                            </FormLabel>
                            <Select
                                placeholder="Select Category Event"
                                onChange={(e) => { console.log("E", e.target), setDataInput({ ...dataInput, categories_id: e.target.value }) }
                                }>

                                {categories.map((val, idx) => {
                                    return (
                                        <option key={idx} value={val.id}> {val.category} </option>
                                    )
                                })}

                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <Button
                            onClick={onToggleOpen}
                            bgColor={"rgb(50, 30, 201)"}
                            color={"white"}
                            _hover={{ bgColor: "rgb(32, 22, 105)" }}
                        >
                            Create Ticket
                        </Button>
                    </Box>
                </Box >

            </Box>
            <FooterCreate onClick={onCreate} />
        </>
    )
}

export default CreateEvent;