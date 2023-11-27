

import React, { useState, useEffect } from "react";
import "./profile.css";
import {
  Box,
  Input,
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

const Orders = () => {
  const tickets = [
    {
      id: 1,
      status: "Pembayaran Berhasil",
      date: "25 November 2023",
      purchaseDate: "01 November 2023, 17:57",
      buttonText: "Invoice",
      image: photo1,
    },
    // Add more ticket data as needed
  ];

  return (
    <div>
      <div className="bagian1">
        <div className="bagian1a">
          <div className="bagian1b">Oders User</div>
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
          h={"100vh"}
          shadow={"xs"}
        >
          <Box
            w={"90%"}
            h={"35%"}
            margin={"auto"}
            marginTop={10}
            border={"1px solid"}
            borderColor={"gray.300"}
            shadow={"2xl"}
            borderRadius={"10px"}
          >
            <Box
              display={"inline"}
              color={"green.500"}
              w={"20"}
              fontSize={15}
              marginLeft={5}
              marginTop={2}
              marginBottom={2}
              border={"1px solid green"}
              bg={"green.100"}
              borderRadius={"6"}
              textAlign={"center"}
              paddingLeft={"2"}
              paddingRight={"2"}
            >
              {ticket.status}
            </Box>
            <Box marginTop={1} borderTop={"1px solid"} borderColor={"gray.400"}></Box>
            <Box display={"flex"}>
              <Box marginLeft={5} w={"70%"} h={"10%"} marginTop={"8"}>
                <Text fontSize={"25"}>{ticket.name}</Text>
                <Text fontSize={"15"}>
                  <CalendarIcon boxSize={4} marginBottom={1} /> {ticket.date}
                </Text>
                <Text fontSize={"10"} marginBottom={2}>
                  Pembelian pada {ticket.purchaseDate}
                </Text>
                <Button border={"1px solid gray"}>{ticket.buttonText}</Button>
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
                  src={ticket.image}
                  w={"100%"}
                  h={"100%"}
                  borderRadius={10}
                  shadow={"lg"}
                  display={{ base: "none", xl: "flex" }}
                />
              </Box>
            </Box>
          </Box>
          <Box> </Box>
        </Card>
      ))}
    </div>
  );
};

export default Orders;
