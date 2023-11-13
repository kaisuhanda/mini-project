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
    RadioGroup,
    Radio,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Text
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle";
import ModalTicket from "../../components/ModalTicket";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineUpload } from "react-icons/ai";
import ModalLocation from "../../components/ModalLocation";

const CreateEvent = () => {
    const [dataInput, setDataInput] = useState({});
    const [buttonClick, onButonClick] = useState(false);
    const { isOpen, onToggleOpen, onToggleClose } = useToggle();

    return (
        <>
            <ModalTicket isOpen={isOpen} onClose={onToggleClose} />
            <ModalLocation />
            <Box className="page">

                <Box className="main-event">
                    <FormControl > {/* event name*/}
                        <Input type="string" placeholder={"Event Name"} variant={"flushed"} border={"none"} />
                    </FormControl>
                    <Flex justifyContent={"space-between"}>
                        <Box bgColor={"red"} padding={2} >
                            <Text marginBottom={4}>Diselenggarakan Oleh</Text>
                            <Flex gap={5} justifyContent={"space-between"}>
                                <Box border={"2px solid black"} borderRadius={100} padding={2}>
                                    <AiOutlineUpload fontSize={25} />
                                </Box>
                                <Input padding={2} bgColor={"white"} type="string" placeholder={"Organizer Name"} variant={"unstyled"} border={"none"} />
                            </Flex>
                        </Box>

                        <Box>
                            {/* startDate and endDate */}
                            <FormControl isRequired>
                                <FormLabel >Start Date</FormLabel>
                                <Input type={"datetime-local"} placeholder={"Choose Date"} />
                                {/* <FormHelperText>Input When Event is Started</FormHelperText> */}
                                <FormLabel >End Date</FormLabel>
                                <Input type={"datetime-local"} placeholder={"Choose Date"} />
                            </FormControl>
                        </Box>

                    </Flex>

                    <FormControl isRequired> {/* event location */}
                        <FormLabel >Event Location</FormLabel>
                        <Input type={"string"} placeholder={"Event Location"} />
                    </FormControl>
                </Box>

                <FormControl isRequired> {/* event description */}
                    <FormLabel >Description</FormLabel>
                    <Input type={"string"} placeholder={"Event Description"} />
                </FormControl>
                <FormControl > {/* event image */}
                    <FormLabel >Image</FormLabel>
                    <Input type={"string"} placeholder={"Event Description"} />
                </FormControl>

                <Button onClick={onToggleOpen}>
                    Create Ticket
                </Button>

            </Box >
        </>
    )
}

export default CreateEvent;