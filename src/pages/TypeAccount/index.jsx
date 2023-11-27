// import React from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { Box, Text,Button, Center, Card,Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalContextProvider, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody,
//      PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, flexbox} from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux"
// import Register from "../Register/index"
// import { useDisclosure } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
// import { Input } from "@chakra-ui/react";
// import { Select } from '@chakra-ui/react'
// import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';




// const TypeAccount = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const [selectedGender, setSelectedGender] = useState("");
//     const { total } = useParams();
    
//       const handleGenderChange = (value) => {
//         setSelectedGender(value);
//       };

//       useEffect(() => {
//         onOpen();
//         console.log('Total:', total);
//       }, [onOpen , total]);



//     return <Box >
// <Box>

//       {/* <Button onClick={onOpen}>Open Modal</Button> */}

//       <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent  maxW="1000px" height={'800px'} >
//           <ModalHeader>your profile user</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6} display={'flex'} >

//           <Box w={'74%'} border={'1px solid transparant'} display={'flex'}>
//               <Box w={'100%'} border={'1px solid gray'}>
//                 <Box marginLeft={2}  marginTop={10}>
//                   <Input   w={'49%'} border={'1px solid gray'} placeholder="Nama Depan"/>
//                   <Input   w={'49%'} border={'1px solid gray'} marginLeft={2} placeholder="Nama Belakang"/>
//                 </Box>
//                 <Input   w={'98%'} marginLeft={2} marginTop={10} placeholder="Email"/>
//                 <Input   w={'98%'} marginLeft={2} marginTop={10} placeholder="No Handphone "/>
//                 <Input   w={'98%'} marginLeft={2} marginTop={10} placeholder="No identitas (KTP/Password,dll)"/>
//                 <Box marginTop={10} marginLeft={2} display={'flex'} >
//                 <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
//                 </Box>
//                 <Box marginLeft={2} marginTop={10}>
//                 <Stack spacing={4}>
//                   <RadioGroup value={selectedGender} onChange={handleGenderChange}>
//                   <Stack direction="row">
//                    <Radio value="male">Male</Radio>
//                    <Radio value="female">Female</Radio>
//                   </Stack>
//                   </RadioGroup>
//                  </Stack>
//                 </Box>
//               </Box>
//           </Box>
//           < Box w={'25%'} border={'1px solid blue'} marginLeft={1}>
//             <Box w={'90%'} h={20} border={'1px solid black'} margin={'10px auto auto auto'} borderRadius={10}>
//              <Text marginLeft={2}>Your total payment :</Text>
//              <Text marginLeft={2}>Rp.{Number(total)},00</Text>
//           </Box>
//             {/* <Box w={'90%'} h={10} border={'1px solid black'} margin={'10px auto auto auto'} borderRadius={10} textAlign={'center'} bg={'blue.100'}> ini tiket data</Box> */}
//           </Box>
//           </ModalBody>
//           <ModalFooter marginBottom={10}>
//              <Button w={'50%'}  bg={'blue.200'} > <Link to={'/'}>BUY</Link> </Button> 
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   </Box>

// };

// export default TypeAccount;







import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Box, Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const TypeAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    identityNumber: "",
    address: "",
    user_id:" ",
    dateAndTime: new Date().toISOString(),
  });
  const id = useSelector((state) => state.auth.id);
  console.log(id);

  const { total } = useParams();

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  useEffect(() => {
    setIsOpen(true);
    console.log('Total:', total);
  }, [total]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:2066/tickets/transactions', {
  //       ticketId: 1,
  //       quantity: 1,
  //       paymentAmount: total,
  //       dateAndTime: formData.dateAndTime,
  //       firstName: formData.firstName,
  //       lastName: formData.lastName,
  //       email: formData.email,
  //       phoneNumber: formData.phoneNumber,
  //       identityNumber: formData.identityNumber,
  //       address: formData.address,
  //       gender: selectedGender,
  //     });

  //     console.log('Transaction response:', response.data);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:2066/tickets/transactions',
        {
          ticketId: 1,
          quantity: 1,
          paymentAmount: total,
          dateAndTime: formData.dateAndTime,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          identityNumber: formData.identityNumber,
          address: formData.address,
          gender: selectedGender,
          userid: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('Transaction response:', response.data);

      // Handle response from the backend as needed

    } catch (error) {
      console.error('Error details:', error.response);
      console.error('Error during transaction:', error.message);
      //console.error('Error stack trace:', error.stack);
      // Handle error as needed
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent maxW="1000px" height={'800px'}>
          <ModalHeader>Your profile user</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody pb={6} display={'flex'}>
  <Box w={'74%'} border={'1px solid transparant'} display={'flex'}>
    <Box w={'100%'} border={'1px solid gray'}>
      <Box marginLeft={2} marginTop={10}>
        <Input
         w={'49%'}
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Nama Depan"
        />
        <Input
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          w={'49%'}
          border={'1px solid gray'}
          marginLeft={2}
          placeholder="Nama Belakang"
        />
      </Box>
      <Input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        w={'98%'}
        marginLeft={2}
        marginTop={10}
        placeholder="Email"
      />
      <Input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        w={'98%'}
        marginLeft={2}
        marginTop={10}
        placeholder="No Handphone"
      />
      <Input
        name="identityNumber"
        value={formData.identityNumber}
        onChange={handleInputChange}
        w={'98%'}
        marginLeft={2}
        marginTop={10}
        placeholder="No identitas (KTP/Password, dll)"
      />
      <Box marginTop={10} marginLeft={2} display={'flex'}>
        <Input
          name="dateAndTime"
          value={formData.dateAndTime}
          onChange={handleInputChange}
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
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
  <Box w={'25%'} border={'1px solid blue'} marginLeft={1}>
  <Box w={'90%'} h={20} border={'1px solid black'} margin={'10px auto auto auto'} borderRadius={10}>
    <Text marginLeft={2}>Your total payment :</Text>
    <Text marginLeft={2}>Rp.{Number(total)},00</Text>
  </Box>
  {/* ... (Your additional content) ... */}
</Box>
</ModalBody>
         
          <ModalFooter marginBottom={10}>
            <Button w={'50%'} bg={'blue.200'} onClick={handleSubmit}>BUY</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TypeAccount;
