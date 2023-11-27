import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Box, Button, Center, Card,Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalContextProvider, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody,
     PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, flexbox} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux"
import Register from "../Register/index"
import { useDisclosure } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";




const TypeAccount = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedGender, setSelectedGender] = useState("");
    
      const handleGenderChange = (value) => {
        setSelectedGender(value);
      };



    return <Box >
<Box>

      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  maxW="1000px" height={'800px'} >
          <ModalHeader>your profile user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} display={'flex'} >

          <Box w={'74%'} border={'1px solid transparant'} display={'flex'}>
              <Box w={'100%'} border={'1px solid gray'}>
                <Box marginLeft={2}  marginTop={10}>
                  <Input   w={'49%'} border={'1px solid gray'} placeholder="Nama Depan"/>
                  <Input   w={'49%'} border={'1px solid gray'} marginLeft={2} placeholder="Nama Belakang"/>
                </Box>
                <Input   w={'98%'} marginLeft={2} marginTop={10} placeholder="Email"/>
                <Input   w={'98%'} marginLeft={2} marginTop={10} placeholder="No Handphone "/>
                <Input   w={'98%'} marginLeft={2} marginTop={10} placeholder="No identitas (KTP/Password,dll)"/>
                <Box marginTop={10} marginLeft={2} display={'flex'} >
                <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
                </Box>
                <Box marginLeft={2} marginTop={10}>
                <Stack spacing={4}>
                  <RadioGroup value={selectedGender} onChange={handleGenderChange}>
                  <Stack direction="row">
                   <Radio value="male">Male</Radio>
                   <Radio value="female">Female</Radio>
                  </Stack>
                  </RadioGroup>
                 </Stack>
                </Box>
              </Box>
          </Box>
          < Box w={'25%'} border={'1px solid blue'} marginLeft={1}>
            <Box w={'90%'} h={10} border={'1px solid black'} margin={'auto'} borderRadius={10} textAlign={'center'} bg={'blue.100'}> ini tiket data</Box>
          </Box>
          </ModalBody>
          <ModalFooter marginBottom={10}>
             <Button onClick={onClose} w={'50%'}  bg={'blue.200'} >Buy</Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  </Box>

};

export default TypeAccount;
