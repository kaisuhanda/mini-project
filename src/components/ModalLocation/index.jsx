import React, { useState, useEffect } from "react";
// import { isOpen, onToggleOpen, onToggleClose } from ("../../hooks/useToggle");
import {
    Box,
    Text,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Input,
    Switch,
    Flex,
    InputGroup,
    FormLabel,
    ModalFooter,
    Button,
    FormControl,
    FormHelperText,
    Select,
} from "@chakra-ui/react";
import isOffline from "../../hooks/isOnline";
import { API_CALL } from "../../helper/helper.js";


const ModalLocation = (props) => {
    const { isOnline, onButtonA, onButtonB } = isOffline();
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const printCities = async () => {
            try {
                const response = await API_CALL.get("/cities")

                setCities(response.data)
            } catch (error) {
                console.log("ERROR PRINT CITIES", error);
            }
        }

        printCities();
    }, [])

    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose} size={"2xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={24} >
                        <Text marginBottom={5}>
                            Location - for {isOnline} Event.
                        </Text>
                        <FormControl display={"flex"} gap={4} paddingBottom={2} borderBottom={"1px solid black"}>
                            <Switch size={"lg"} onChange={isOnline === "offline" ? onButtonA : onButtonB} />
                            <FormLabel fontSize={20}>Online Event</FormLabel>
                        </FormControl>
                    </ModalHeader>
                    {
                        isOnline === "offline" ?
                            <ModalBody>
                                <InputGroup display={"block"}>
                                    <Box marginBlock={5}>
                                        <FormLabel>
                                            Address
                                        </FormLabel>
                                        <Input
                                            type="string"
                                            onChange={props.address}
                                            defaultValue={props.valueAddress}
                                        />
                                    </Box>
                                    <Box marginBlock={5}>
                                        <FormLabel>
                                            City
                                        </FormLabel>
                                        <Select
                                            placeholder="Select Category Event"
                                            onChange={props.city}
                                            defaultValue={props.valueCity}
                                        >

                                            {cities.map((val, idx) => {
                                                return (
                                                    <option key={idx} value={val.id}> {val.city} </option>
                                                )
                                            })}

                                        </Select>
                                    </Box>
                                </InputGroup>
                            </ModalBody> :
                            <ModalBody>
                                <FormControl padding={2} border={"1px solid black"} borderRadius={5} marginBottom={5}>
                                    <FormLabel alignItems={"center"}>Link LiveStream</FormLabel>
                                    <FormHelperText>
                                        1. This Url will be received by the customer. Please make sure to set it correctly.
                                    </FormHelperText>
                                    <FormHelperText>
                                        2. After setting the Url, you can't change it.
                                    </FormHelperText>
                                </FormControl >
                                <Input
                                    placeholder="URL Livestream"
                                    type="url"
                                    onChange={props.urlOnline}
                                    defaultValue={props.url}
                                />
                            </ModalBody>
                    }
                    <ModalFooter>
                        <Button
                            bgColor={"rgb(50, 30, 201)"}
                            color={"white"}
                            _hover={{ bgColor: "rgb(32, 22, 105)" }}
                            onClick={props.onClose}
                        >
                            Save Location
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </>
    )
};

export default ModalLocation;