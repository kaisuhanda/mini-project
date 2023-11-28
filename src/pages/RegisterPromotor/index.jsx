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


const RegisterPromotor = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [phone, setPhone] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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

    const togglePasswordVisibility1 = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

    return (
      <Box >
           {/* <Box w={"auto"} bg={"transparant"} h={"10vh"}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Box bg={"white"} w={"10%"} h={"50%"} display={"flex"} textAlign={"center"} justifyContent={"center"} color={"orange.500"} fontSize={"2xl"} fontFamily={'fantasy'}> TicketWave </Box>
      </Box> */}
      <Box display={"Flex"} flexDirection={"row"} h={"100vh"} w={"auto"}>
      <Box display={{base:"none" , md :"flex"}} bg={"white.100"} w={"50%"}   justifyContent={"center"} alignItems={"center"} >
          <Image  src={backgroundjpg}  w={"80%"}/>
          </Box>
      <Box bg={"gray.100"} borderRadius="0" w={"50%"} marginLeft={"0%"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={{ base: "100%", sm: "100%", md: "50%" }}>
              <Card maxW={"md"} margin={"auto"}  paddingY={"4"} shadow={"xl"} w='100%' bg={'whiteAlpha.20'} >
              <CardBody textAlign={"center"} >
                 <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"} color={'orange'}>Ticket <Text as={'span'} color={'black'}> wave </Text></Text>
                 <Text textAlign={"center"} >Selamat datang di Register Promotor</Text>
                 {/* <Text textAlign={"left"} >Username</Text> */}
                 <Input marginTop={'5'} bg={'white'} type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                 {/* <Text textAlign={"left"} >Email</Text> */}
                 <Input marginTop={'5'} bg={'white'} type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                 {/* <Text textAlign={"left"}>Nomor Telepon</Text> */}
                 <Input marginTop={'5'} bg={'white'} type="text" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                 {/* <Text textAlign={"left"} >Pasword</Text> */}
                 <InputGroup bg={'white'} marginTop={'5'} >
                         <Input
                             type={showPassword ? "text" : "password"}
                            placeholder='Password'
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                         />
                         <InputRightElement width="3rem">
                             <Button
                                  _hover={{bgColor:"transparent"}}
                                  bg={'transparent'}
                                 onClick={togglePasswordVisibility}
                                 leftIcon={showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                             >
                             </Button>
                         </InputRightElement>
                     </InputGroup>
                     {/* <Text textAlign={"left"} >konfirmasi Pasword</Text> */}
                 <InputGroup bg={'white'} marginTop={'5'} >
                         <Input
                             type={showConfirmPassword ? "text" : "password"}
                             placeholder='Password Confirmation'
                             value={passwordConfirmation}
                             onChange={(e) => setPasswordConfirmation(e.target.value)}
                         />
                         <InputRightElement width="3rem">
                             <Button
                                   _hover={{bgColor:"transparent"}}
                                   bg={'transparent'}
                                 onClick={togglePasswordVisibility1}
                                 leftIcon={showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                             >
                             </Button>
                         </InputRightElement>
                     </InputGroup>
                     {errorMessage && <Text color="red">{errorMessage}</Text>}
                 <Button type="button" w={'75%'} marginTop={"8"} colorScheme="blue" onClick={handleRegister}>
                     Register as Promotor
                 </Button>
             </CardBody>
              </Card>
              <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
    </Modal>  
          </Box>
      </Box>
                        {/* <Box bg={"white.200"} w={"auto"} h={"5vh"}>  </Box> */}
      </Box>
  );
}

 

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