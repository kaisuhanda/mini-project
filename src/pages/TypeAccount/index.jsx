import React, { useState, useEffect } from "react";
import { Link, json } from "react-router-dom";
import axios from 'axios';
import { Box, Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { color } from "framer-motion";


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
  const navigate = useNavigate();
  const [event, setEvent] = useState();
 console.log(id);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cartParam = queryParams.get('cart');
  const totalParam = queryParams.get('total');
  const idEventParams =queryParams.get('event_id');

  // konversi ke array
  const cart = JSON.parse(cartParam);
  const total = JSON.parse(totalParam);
  const idEvent = JSON.parse(idEventParams);
  console.log(idEvent)
  const role = useSelector((state) => state.auth.role);

 





  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };




  useEffect(() => {
    setIsOpen(true);
    console.log('Total:', total);


    if (role === "promoter"){
      alert("anda seorang promoter dilarang melakukan pembelian")
      navigate("/");
    }
    const fetchEvent = async () => {
      try {
          const response = await fetch(`http://localhost:2066/events/${idEvent}`);
          const data = await response.json();
          setEvent(data);
          console.log('berhasil',data);
          console.log(data.name);
      } catch (error) {
          console.log(error);
      }
  }
  fetchEvent();
    
  }, [total]);

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  


  
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
      alert("anda berhasil melakukan pembelian");
      navigate('/')

    } catch (error) {
      console.error('Error details:', error.response);
      console.error('Error during transaction:', error.message)
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent maxW="1000px" height={'800px'}>
          <ModalHeader>Data informasi pembelian tiket</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody pb={6} display={'flex'}>
  <Box w={'74%'} border={'1px solid white'} display={'flex'}>
    <Box w={'100%'} border={'1px solid white'}>
      <Box marginLeft={2} marginTop={10}>
        <Input
          border={'1px solid gray'}
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
        border={'1px solid gray'}
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        w={'98%'}
        marginLeft={2}
        marginTop={10}
        placeholder="Email"
      />
      <Input
        border={'1px solid gray'}
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        w={'98%'}
        marginLeft={2}
        marginTop={10}
        placeholder="No Handphone"
      />
      <Input
        border={'1px solid gray'}
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
  <Box w={'25%'} boxShadow={'outline'} rounded={"md"} marginLeft={1}>
  <Box w={'90%'} h={7}  margin={'10px auto auto auto'} border={'1px solid gray'} boxShadow={'inner'} textAlign={'center'}> <Text>{event?.name}  </Text> </Box>
  <Box w={'90%'} h={20}  margin={'10px auto auto auto'} borderRadius={10}>
  {Array.isArray(cart) ? (
    cart.map((item, index) => (
      <div key={index} style={{border:"1px solid #DCDCDC" , marginBottom:"10px"}}>
        <Text>Produk  {index + 1} : <span style={{color:"blue"}}> {item?.type} </span></Text>
        <Text>Harga: <span style={{color:"blue"}}>  Rp.{item?.price},00 </span> </Text>
        <Text>Jumlah: <span style={{color:"blue"}}> {item?.quantity} </span> </Text>
      </div>
    ))
  ) : (
    <Text>Cart is not an array</Text>
  )}
   <Box>
   <Text marginLeft={2}>Your total payment :</Text>
   <Text marginLeft={2}>Rp.{Number(total)},00</Text>
   </Box>
  </Box>
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