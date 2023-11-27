import React, { useState ,useEffect} from "react";
import "./profile.css";
import { Box,Img,Link, Input,InputGroup,Button, Card, CardBody, Text, Flex, Spacer, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,} from "@chakra-ui/react"
import { InputRightElement } from '@chakra-ui/react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDisclosure } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import photo from '../images/photo14.jpg';
import { PhoneIcon, AddIcon, WarningIcon,CalendarIcon } from '@chakra-ui/icons';
import axios from "axios";
import { API_URL } from "../../../helper";



const Profile = () => {
  const [newUsername, setNewUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState("");
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [image ,setImage] =useState('https://fakeimg.pl/350x250/');
  
  useEffect(() => {
    // Mendapatkan token dari local storage saat komponen dimuat
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSaveChanges = () => {
    const updatedData = {
      username: newUsername,
      email: newEmail,
      phone: newPhone,
    };

    if (Object.values(updatedData).every((value) => !value) && !profilePicture) {
      alert('Tidak ada informasi yang diubah');
      return;
    }

    // Create FormData for the file upload
    const formData = new FormData();
    formData.append("profilePicture", profilePicture);

    // Add the updated data to the FormData
    Object.entries(updatedData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios.post(`http://localhost:2066/account/editPhotoProfile`, formData, {
    headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
    },
   })
  .then(uploadPhotoResponse => {
    // Handle response from the first request, if needed
    return axios.post(`http://localhost:2066/account/editProfile`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  })
  .then(editProfileResponse => {
    // Handle response from the second request
    if (editProfileResponse.data.success) {
      alert('Information successfully updated');
    } else {
      setErrorMessage(editProfileResponse.data.message);
    }
  })
  .catch(error => {
    // Handle any errors that occur in either request
    console.error('Error changing profile:', error.message);
    setErrorMessage('An error occurred while changing information');
  });
  
  };
  const handleProfilePictureChange = (e) => {
    console.log(e.target.files[0]);
    setProfilePicture(e.target.files[0]);
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
   
  };
  
  return (<Box w={'auto'} >
     <div className="bagian1">
         <div className="bagian1a">
             <div className="bagian1b">Profile User</div>
             <div className="bagian1c">MENU PAGE</div>
         </div>
       </div>
       <h1 className="bagian2a">Edit Account profile</h1>
       <div className="bagian2b"></div>
       <div>
         <Card margin={"auto"}  paddingY={"4"} marginTop={'10'} w='90%' h={'120vh'} shadow={'xs'} >
         <Card w={'25%'} h={'30%'} margin={'auto'} marginTop={10} textAlign={'center'} justifyContent={'center'} ><label htmlFor="profilePictureInput" style={{ cursor: "pointer" }}>
         <Img boxSize='auto' src={image} />
        </label> </Card>
         <Card><Input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          marginTop="1%"
          marginLeft="1%"
          onChange={handleProfilePictureChange}
          id="profilePictureInput"
        /></Card>
         <Card w='90%' h={'auto'} margin={'auto'} marginTop={10} shadow={'xs'} >
         <Text textAlign={"center"} marginTop={'1%'} >Information</Text>
         <Text textAlign="left" marginTop="1%" marginLeft="1%" fontSize="20">
        Username
      </Text>
      <Input
        w="auto"
        type="text"
        marginTop="1%"
        marginLeft="1%"
        color="blackAlpha.600"
        placeholder="Input your username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <Text textAlign="left" marginTop="1%" marginLeft="1%" fontSize="20">
        Email
      </Text>
      <Input
        w="98%"
        type="text"
        marginTop="1%"
        marginLeft="1%"
        color="blackAlpha.600"
        placeholder="Input your email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <Text textAlign="left" marginTop="1%" marginLeft="1%" fontSize="20">
        Nomor Telepon
      </Text>
      <Input
        w="98%"
        type="text"
        marginTop="1%"
        marginLeft="1%"
        color="blackAlpha.600"
        placeholder="Input your phone number"
        value={newPhone}
        onChange={(e) => setNewPhone(e.target.value)}
      />
       {errorMessage && <Text color={'red'} textAlign={'center'}>{errorMessage}</Text>} 
      <Button
        w="98%"
        marginTop="1%"
        marginLeft="1%"
        onClick={handleSaveChanges}
      >
        Simpan
      </Button>
       </Card>
         </Card>    
       </div>
    </Box>
  );
  
};

export default Profile;

