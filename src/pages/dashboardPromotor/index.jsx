import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Box,Text, Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducer/accountReducer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { keepLogin } from "../../redux/reducer/accountReducer";
import { loginSuccess } from "../../redux/reducer/accountReducer";
import { API_URL } from "../../../helper";
import PotoProfile from "../profileuser/potoProfile";



const DashboardPagePromotor = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  // Menggunakan useSelector untuk mengambil data dari Redux state
   const token = useSelector((state) => state.auth.token);
   const username = useSelector((state) => state.auth.username);
   const role = useSelector((state) => state.auth.role);
   const email = useSelector((state) => state.auth.email);
   const phone = useSelector((state) => state.auth.phone);
  



   //untuk memangil keep login
   useEffect(() => {
   // Panggil fungsi keepLogin di sini
   dispatch(keepLogin())
        .then((userData) => {
   // Perbarui state Redux dengan data pengguna dari keepLogin
    dispatch(loginSuccess(userData));
   })
   .catch((error) => {
   console.error('Error during keepLogin:', error);   
   });
   }, [dispatch]); 




    const handleLogout = () => {
        dispatch(logout);
        navigate("/");
    };
 

    return <Box>
        <Flex>
        </Flex>
        <Flex>
        {/* <img src={image} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} /> */}
        <PotoProfile />
      </Flex>
        <Popover>
  <PopoverTrigger>
    <Button>Profile Account Promotor</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>PROFIL</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      <Button type="button" colorScheme="blue" onClick={handleLogout}>
                <Link to={"/"}>LOGOUT</Link>
            </Button>
            <Text>{username}</Text>
            <Text>{role}</Text>
      </PopoverBody>
      <PopoverFooter>
        ISI DATA PROFIL : 
        <Text> - Informasi Dasar </Text>
        <Text> - Kata Sandi </Text>
        <Text> - Histroy pembelian </Text>
      
      </PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>

</Box>
};

export default DashboardPagePromotor;