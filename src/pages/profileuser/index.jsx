import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {Box,Button,useMenuButton,
    Menu, MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,
  } from '@chakra-ui/react'
import { useDispatch } from "react-redux"
import Register from "../Register/index"
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import './index.css'
import  Profile  from "./profile";
import { useState } from "react";
import Orders from "./Orders";
import Setting from "./Setting"

const ProfileUser = () => {
    const navigate = useNavigate()
    const [activeContent, setActiveContent] = useState("profile");
    
    const switchToProfile = () => {
      setActiveContent("profile");
    };
    const switchToSettings = () => {
      setActiveContent("settings");
    };
    const switchToOrders = () => {
      setActiveContent("orders");
    };
    

    return <Box w={'102%'}>
        <div className="sidenav">
            <div style={{cursor:"pointer"}} onClick={() => navigate('/')} className="ab">TicketWave</div>
            <div className="ac">
            <p href="#dashboard">Jelajah Events</p>
            <p href="#myticket">Ticket saya</p>
            </div>
            <div className="ad">
          <p   onClick={switchToProfile} style={{ backgroundColor: activeContent === "profile" ? "#4cb3b3" : "transparent" }} >    Profile       </p>
          <p   onClick={switchToSettings} style={{ backgroundColor: activeContent === "settings" ? "#4cb3b3" : "transparent" }} >    Kata Sandi   </p>
          <p   onClick={switchToOrders} style={{ backgroundColor: activeContent === "orders" ? "#4cb3b3" : "transparent" }} >    Daftar Data Pemesan   </p>
            </div>
        </div>
        <div className="main">
         <div className="first"> 
              <div className="akun1" >Tiket Saya</div> 
              <Menu >
                        <MenuButton as={Button} className="akun2" colorScheme="orange">
                            account
                        </MenuButton>
                        <MenuList fontSize={20}>
                            <MenuItem onClick={switchToProfile}>Profile</MenuItem>
                            <MenuItem onClick={switchToSettings}>kata sandi</MenuItem>
                            <MenuItem onClick={switchToOrders}>Daftar pemesanan</MenuItem>
                            <MenuItem onClick={() => navigate('/logout')}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
              {/* <div className="akun3"> Buat Event</div> */}
         </div>
         <div className="second">
         <Box w={'90%'} marginLeft={40}>
        {activeContent === "profile" && <Profile />}
        {activeContent === "settings" && <Setting />}
        {activeContent === "orders" && <Orders />}
      </Box>
         </div>
        </div> 

    
    </Box>

};

export default ProfileUser;