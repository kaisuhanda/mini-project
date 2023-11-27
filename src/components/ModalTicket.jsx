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
    Switch,
} from "@chakra-ui/react";
import isDisable from "../hooks/isDisable";
import React from "react";

const ModalTicket = (props) => {
    const { isUsable, onButtonOpen, onButtonClose } = isDisable();
    const isDisable2 = isDisable();
    // console.log("TYPEEVENT", isDisable2.isUsable);
    return (
        // Modal Ticket
        <Modal isOpen={props.isOpen} onClose={props.onClose} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Create Ticket
                </ModalHeader>
                <ModalBody>
                    <FormControl display={"flex"} flexDirection={"column"} gap={5} marginBottom={5}> {/* TICKET*/}
                        <FormControl isRequired >
                            {/* event price */}
                            <Switch size={"lg"} onChange={isDisable2.isUsable === true ? isDisable2.onButtonClose : isDisable2.onButtonOpen} >Free event</Switch>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Type</FormLabel>
                            <Input
                                type="text"
                                placeholder="example: VVIP, Reguler"
                                onChange={props.type}
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Price</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='Rp.'
                                />
                                <Input
                                    type="number"
                                    placeholder="Event Price"
                                    isDisabled={isDisable2.isUsable === true ? false : true}
                                    onChange={props.price}
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Amount</FormLabel>
                            <Input
                                type="number"
                                placeholder="Ticket Amount"
                                onChange={props.amount} />
                        </FormControl>

                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel >Start Sales</FormLabel>
                        <Input
                            type={"datetime-local"} marginBottom={5}
                            onChange={props.start_sales}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel >End Sales</FormLabel>
                        <Input
                            type={"datetime-local"} marginBottom={5}
                            onChange={props.end_sales}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    {props.buttonCreate}
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
};

export default ModalTicket;