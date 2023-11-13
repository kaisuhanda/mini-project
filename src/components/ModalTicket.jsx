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
} from "@chakra-ui/react";
import isDisable from "../hooks/isDisable";
import React from "react";

const ModalTicket = (props) => {
    const { isUsable, onButtonOpen, onButtonClose } = isDisable();
    const [typeEvent, setTypeEvent] = React.useState("paid");
    // console.log("TYPEEVENT", typeEvent);
    return (
        // Modal Ticket
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Create Ticket
                </ModalHeader>
                <ModalBody>
                    <FormControl> {/* TICKET*/}
                        <FormControl isRequired> {/* event price */}
                            <RadioGroup onChange={setTypeEvent}>
                                <Radio value="free">Free Event</Radio>
                                <Radio value="paid">Paid Event</Radio>
                            </RadioGroup>

                            <FormLabel>Price</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='Rp.'
                                />
                                <Input type="number" placeholder="Event Price" isDisabled={typeEvent === "paid" ? false : true} />
                            </InputGroup>
                            <FormLabel>Amount</FormLabel>
                            <Input type="number" placeholder="Ticket Amount" />

                        </FormControl>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
};

export default ModalTicket;