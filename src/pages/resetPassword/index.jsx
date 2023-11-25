import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Input, Button, Text, Box } from "@chakra-ui/react"; // Gantilah sesuai library UI yang Anda gunakan
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import { useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {  Card, CardBody, InputGroup, InputRightElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";


// const ResetPasswordPage = () => {
// //   const { resetToken } = useParams();
// // const urlParams = new URLSearchParams(window.location.search);
// //   const { resetToken } = urlParams.get('resetToken');
// //   console.log(resetToken);
// const [newPassword, setNewPassword] = useState("");
// const [confirmPassword, setConfirmPassword] = useState("");
// const [errorMessage, setErrorMessage] = useState("");
// const [resetToken, setResetToken] = useState("");
// const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const tokenFromURL = urlParams.get('resetToken');
//     console.log(tokenFromURL);

//     if (tokenFromURL) {
//       try {
//         // Decode and verify the token on the frontend
//         const decodedToken = jwt.verify(tokenFromURL, 'your-secret-key-here');
//         console.log(decodedToken);

//         // Check if the decoded token contains the necessary information
//         // if (decodedToken && decodedToken.resetToken) {
//         //   setResetToken(decodedToken.resetToken);
//         // } else {
//         //   console.error("Token reset tidak valid atau tidak berisi informasi yang diperlukan.");
//         // }
//       } catch (error) {
//         console.error("Gagal memverifikasi token reset:", error.message);
//       }
//     } else {
//       console.error("Token reset tidak ditemukan dalam parameter URL.");
//     }
//   }, []);

 

//   const handleResetPassword = async () => {
//     try {
//       if (newPassword !== confirmPassword) {
//         setErrorMessage("Kata sandi baru tidak cocok.");
//         return;
//       }
//       await axios.post(
//         `http://localhost:2066/account/resetPassword?resetToken=${resetToken}`,
//         { newPassword }
//       );
//       alert('password berhasil diubah')
//       navigate("/");
//     } catch (error) {
//       console.error("Gagal mereset kata sandi:", error.response.data.message);
//       setErrorMessage(error.response.data.message);
//     }
//   };

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [decodedToken, setDecodedToken] = useState(null);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const resetToken = urlParams.get("resetToken");
    console.log(resetToken);
  
    useEffect(() => {
      if (resetToken) {
        try {
          const decodedToken = jwt.verify(resetToken, "your-secret-key-here");
          setDecodedToken(decodedToken);
        } catch (error) {
          console.error("Failed to verify reset token:", error.message);
          setErrorMessage("Failed to verify reset token");
        }
      } else {
        console.error("Reset token not found in URL parameters.");
        setErrorMessage("Reset token not found");
      }
    }, []);
  
    const handleResetPassword = async () => {
      try {
        if (!decodedToken) {
          console.error("Token has not been successfully verified or is invalid.");
          setErrorMessage("Token not verified");
          return;
        }
  
        if (newPassword !== confirmPassword) {
          setErrorMessage("New password does not match.");
          return;
        }
  
        const response = await axios.post(
          `http://localhost:2066/account/resetPassword?resetToken=${resetToken}`,
          { newPassword: newPassword }
        );
  
        console.log(response.data); // Log the response from the server
  
        alert("Password successfully updated");
        navigate('/')
      } catch (error) {
        console.error("Failed to reset password:", error.response?.data?.message || error.message);
        setErrorMessage(error.response?.data?.message || "Failed to reset password");
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const togglePasswordVisibility1 = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  
    

  

  return ( <Box bg={'blue.50'}>
    <Box w={'30%'} h={'500'} marginLeft={550} marginTop={100} boxShadow={'dark-lg'} borderRadius={10} bg={'white'} >
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} w={"100%"} h={"100px"}  >
      <Text fontSize={24}  >Reset Kata Sandi</Text>
      </Box>
      <Box marginBottom={'2'}  >
        <Text marginLeft={'6'} marginBottom={'2'} >Kata Sandi Baru:</Text>
        <InputGroup w={'90%'} marginLeft={'6'} marginBottom={'2'} >
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <InputRightElement>
                  <Button
                    _hover={{ bgColor: "transparent" }}
                    bg={'transparent'}
                    onClick={togglePasswordVisibility}
                    leftIcon={showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  ></Button>
                </InputRightElement>
              </InputGroup>
        {/* <Input
          marginLeft={'6'}
          marginBottom={'2'}
          w={'90%'}
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        /> */}
      </Box>
      <Box marginBottom={'2'} marginTop={'6'} >
        <Text marginLeft={'6'} marginBottom={'2'}>Konfirmasi Kata Sandi:</Text>
        <InputGroup w={'90%'} marginLeft={'6'} marginBottom={'2'} >
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='confirmPassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <InputRightElement>
                  <Button
                    _hover={{ bgColor: "transparent" }}
                    bg={'transparent'}
                    onClick={togglePasswordVisibility1}
                    leftIcon={showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  ></Button>
                </InputRightElement>
              </InputGroup>
        {/* <Input
          marginLeft={'6'}
          w={'90%'}
          type="password"
        /> */}
      </Box>
      <Box marginLeft={'6'} marginBottom={'2'} >
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      </Box>
      <Box marginLeft={'6'}>
      <Button marginLeft={'8'} w={'80%'} h={'100'} marginTop={10} onClick={handleResetPassword} bg={'blue.300'} _hover={{bgColor:'gray.200'}}>Reset Kata Sandi</Button>
      </Box>
    </Box>
    </Box>
  );
};

export default ResetPasswordPage;
