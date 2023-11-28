

import React, { useState, useEffect } from "react";
import "./profile.css";
import {
  Box,
  Button,
  Card,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import axios from "axios";
import { API_URL } from "../../../helper";
import photo1 from '../images/photo14.jpg';
import { useSelector,useDispatch } from "react-redux";
import { keepLogin } from "../../redux/reducer/accountReducer";

const Orders = () => {
  const [tickets, setTickets] = useState([]);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  console.log(id);


  useEffect(() => {
    dispatch(keepLogin());
    // Panggil API untuk mendapatkan data pemesanan tiket dari backend
    axios.get(`${API_URL}/tickets/transactions/${id}`) 
      .then(response => {
        setTickets(response.data.transactions);
        console.log(response.data.transactions);
      })
      .catch(error => {
        console.error("Error fetching ticket data:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <div className="bagian1">
        <div className="bagian1a">
          <div className="bagian1b">Orders User</div>
          <div className="bagian1c">MENU PAGE</div>
        </div>
      </div>
      <h1 className="bagian2a">Data Pemesanan Tiket</h1>
      <div className="bagian2b"></div>
      <div className="bagian2c"></div>

      {tickets.map((ticket) => (
        <Card
          key={ticket.id}
          margin={"auto"}
          paddingY={"4"}
          marginTop={"10"}
          w="90%"
          h={"30vh"}
          shadow={"xs"}
        >
      
            <Box
              display={"inline"}
              color={"green.500"}
              w={"20"}
              height={"50"}
              fontSize={15}
              marginLeft={5}
              marginBottom={2}
              border={"1px solid green"}
              bg={"green.100"}
              borderRadius={"6"}
              textAlign={"center"}
              paddingLeft={"2"}
              paddingRight={"2"}
            >
              {/* {ticket.status} */}Berhasil
            </Box> 
            <Box  marginTop={1} borderTop={"1px solid"} borderColor={"gray.400"}> </Box>
            <Box display={"flex"}>
              <Box marginLeft={5} w={"70%"} h={"10%"} marginTop={"8"}>
                <Text fontSize={"25"}>{ticket.name}</Text>
                <Text fontSize={"15"}>
                  <CalendarIcon boxSize={4} marginBottom={1} /> {ticket.date_and_time}
                </Text>
                <Text fontSize={"10"} marginBottom={2}>
                  Pembelian pada {new Date(ticket.createdAt).toLocaleString()}
                </Text>
                <Text fontSize={14}>Nama:  {ticket.first_name} {ticket.last_name} </Text>
                <Text fontSize={14}>Email : {ticket.email}</Text>
                <Text fontSize={14}>Payment : RP{ticket.payment_amount}</Text>
                <Text fontSize={14}>phone number : {ticket.phone_number} </Text>
                {/* <Button border={"1px solid gray"}>{ticket.buttonText}</Button> */}
              </Box>
              <Box
                display={{ base: "none", md: "flex" }}
                marginRight={5}
                w={"25%"}
                h={133}
                border={"1px solid transparent"}
                marginTop={"8"}
                textAlign={"center"}
              >
                <Image
                  src={photo1}
                  w={"100%"}
                  h={"100%"}
                  borderRadius={10}
                  shadow={"lg"}
                  display={{ base: "none", xl: "flex" }}
                />
              </Box>
            </Box>
        
          <Box> </Box>
        </Card>
      ))}
    </div>
  );
};

export default Orders;


