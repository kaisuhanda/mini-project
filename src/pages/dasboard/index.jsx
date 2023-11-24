import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Box, Button, Flex, flexbox } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {LOGOUT} from "../../redux/reducer/type";
import backgroundjpg from "../../pages/images/photo1.jpg"
import { Image } from '@chakra-ui/react'
import { Card, CardBody, Text, Spacer } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem("username");
        const token = localStorage.getItem("token");

        if (username || token) {
            // Jika local storage berisi username dan token, redirect ke halaman lain
            navigate("/dashboard");
        }
    }, []);

    return <Box >
        <Flex>
            <Button type="button"marginTop={"8"} colorScheme="green">
                <Link to={"/"}>LOGIN</Link>
            </Button>
        </Flex> 




    </Box>
};

export default DashboardPage;
