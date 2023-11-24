import React, { useState ,useEffect} from "react";
import "./profile.css";
import { Box,Link, Input,InputGroup,Button, Card, CardBody, Text, Flex, Spacer, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,} from "@chakra-ui/react"
import { InputRightElement } from '@chakra-ui/react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDisclosure } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon,CalendarIcon } from '@chakra-ui/icons';
import axios from "axios";
import { API_URL } from "../../../helper";

const Setting = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordNew, setPasswordNew] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorPassword, setPasswordError] = useState("");
    const [passwordNewConfirmation, setPasswordNewConfirmation] = useState("");
    const [token, setToken] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
    useEffect(() => {
      // Mendapatkan token dari local storage saat komponen dimuat
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }, []);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };
  
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Reset error message
  };
  
  const handlePasswordNewChange = (e) => {
    setPasswordNew(e.target.value);
    setErrorMessage(""); // Reset error message
  };
  
  const handlePasswordConfirmationChange = (e) => {
    setPasswordNewConfirmation(e.target.value);
    setErrorMessage(""); // Reset error message
  };
  
  
  
  const handleChangePassword = () => {
    setErrorMessage("");
    setPasswordError("");
  
  
    if (!password){
      setPasswordError('password lama salah')
  
    }
    // Check if the new password and confirmation match
    if (passwordNew !== passwordNewConfirmation || !passwordNew || !passwordNewConfirmation) {
      setErrorMessage('Password dan Password confirmation tidak sama ');
      return;
    }
  
    // Send a request to change the password
    axios
      .post(`${API_URL}/account/editPassword`, {
        oldPassword: password,
        newPassword: passwordNew,
        confirmNewPassword: passwordNewConfirmation,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          // Password changed successfully
          console.log('Password changed successfully');
          //alert('password berhasil di ubah');
          setSuccessMessage('Password berhasil diubah');
          onOpen();
        } else {
          // Handle password change failure
          setPasswordError('password lama salah');
          setErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        // Handle the HTTP request error
        setPasswordError('password lama salah');
        console.error('Error changing password:', error);
      });
  };
  
    return (
      <div>
          <div className="bagian1">
          <div className="bagian1a">
              <div className="bagian1b">Password User</div>
              <div className="bagian1c">MENU PAGE</div>
          </div>
        </div>
        <h1 className="bagian2a">Ubah Password</h1>
        <div className="bagian2b"></div>
        <div className="bagian2c">
        <Card maxW={"lg"} margin={"auto"}  paddingY={"4"} shadow={"xs"} w='100%'>
         <CardBody textAlign={"center"} >
         <Text textAlign={"left"} fontSize={'20'}>Pasword lama</Text>
         <InputGroup>
                   <Input
                       type={showPassword ? "text" : "password"}
                       placeholder='Input your old password '
                       value={password}
                       onChange={handlePasswordChange}
                   />
                   <InputRightElement width="3rem">
                       <Button
                           h="2.5rem"
                           size="sm"
                           onClick={togglePasswordVisibility}
                           leftIcon={showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                       >
                       </Button>
                   </InputRightElement>
               </InputGroup>
               {errorPassword && <Text color="red" fontSize={12}>{errorPassword}</Text>}
           <Text textAlign={"left"} fontSize={'20'} >Pasword baru</Text>
           <InputGroup>
                   <Input
                       type={showPassword ? "text" : "password"}
                       placeholder='Input your new password '
                       value={passwordNew}
                       onChange={handlePasswordNewChange}
                   />
                   <InputRightElement width="3rem">
                       <Button
                           h="2.5rem"
                           size="sm"
                           onClick={togglePasswordVisibility}
                           leftIcon={showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                       >
                       </Button>
                   </InputRightElement>
               </InputGroup>
               {errorMessage && <Text color="red" fontSize={12}>{errorMessage}</Text>}
               <Text textAlign={"left"} fontSize={'20'} >konfirmasi Pasword baru</Text>
           <InputGroup>
                   <Input
                       type={showPassword ? "text" : "password"}
                       placeholder='Input your new password again'
                       value={passwordNewConfirmation}
                       onChange={handlePasswordConfirmationChange}
                   />
                   <InputRightElement width="3rem">
                       <Button
                           h="2.5rem"
                           size="sm"
                           onClick={togglePasswordVisibility}
                           leftIcon={showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                       >
                       </Button>
                   </InputRightElement>
               </InputGroup>
               {errorMessage && <Text color="red" fontSize={12}>{errorMessage}</Text>}
               <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={'green'}>Password Changed Successfully</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Text color={'green'}>{successMessage}</Text> */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
           <Button type="button" w={'50%'} marginTop={"8"} colorScheme="blue"  onClick={handleChangePassword}>
               <Link to={'/'}>
                   Simpan Perubahan
               </Link>
           </Button>
       </CardBody>
         </Card>
           </div>
      </div>
    );
  }

export default Setting;