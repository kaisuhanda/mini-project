import React from "react";
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
} from "@chakra-ui/react";
import isOffline from "../../hooks/isOnline";


const ModalLocation = () => {
    const { isOnline, onButtonA, onButtonB } = isOffline();
    console.log(isOnline);
    return (
        <>
            <Modal isOpen={true} >
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
                                            Place Name
                                        </FormLabel>
                                        <Input type="string" />
                                    </Box>
                                    <Box marginBlock={5}>
                                        <FormLabel>
                                            Address
                                        </FormLabel>
                                        <Input type="string" />
                                    </Box>
                                    <Box marginBlock={5}>
                                        <FormLabel>
                                            City
                                        </FormLabel>
                                        <Input type="string" />
                                    </Box>
                                </InputGroup>
                            </ModalBody> :
                            <ModalBody>
                                <Input placeholder="URL Livestream" type="url" />
                            </ModalBody>
                    }
                    <ModalFooter>
                        <Button bgColor={"rgb(50, 30, 201)"} color={"white"}>
                            Save Location
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default ModalLocation;