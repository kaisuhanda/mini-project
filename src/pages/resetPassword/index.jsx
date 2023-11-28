import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Input, Button, Text, Box } from "@chakra-ui/react"; // Gantilah sesuai library UI yang Anda gunakan
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import { useEffect } from "react";


const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [decodedToken, setDecodedToken] = useState(null);
    const navigate = useNavigate();

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
  
    

  

  return ( <Box>
    <Box w={'90%'} h={'500'} margin={'auto'} boxShadow={'dark-lg'} borderRadius={10}>
      <Text fontSize={24} margin={'10px auto 10px 50% '}>Reset Kata Sandi</Text>
      <Box>
        <Text>Kata Sandi Baru:</Text>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Box>
      <Box>
        <Text>Konfirmasi Kata Sandi:</Text>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Box>
      {errorMessage && <Text color="red">{errorMessage}</Text>}
      <Button onClick={handleResetPassword}>Reset Kata Sandi</Button>
    </Box>
    </Box>
  );
};

export default ResetPasswordPage;
