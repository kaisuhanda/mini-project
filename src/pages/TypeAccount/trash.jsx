
// import jwt from "jsonwebtoken";
// import { Image } from '@chakra-ui/react';
// import backgroundjpg from "../../pages/images/photo1.jpg";
// import { Box, Button, Card, CardBody, Text, Flex, Spacer, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector  } from "react-redux";
// import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
// import { useState, useEffect } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import React from "react";
// import { useDisclosure } from '@chakra-ui/react';
// import { login } from "../../redux/reducer/accountReducer";
// import {FaFacebook } from 'react-icons/fa';
// import {FcGoogle} from 'react-icons/fc';
// import { BsCalendar3 } from "react-icons/bs";
// import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

// const AuthPage = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//     const [showPassword, setShowPassword] = useState(false);
//     const [password, setPassword] = useState("");
//     const [usernameOrEmail, setUsernameOrEmail] = useState(""); 
//     const [errorMessage, setErrorMessage] = useState("");

//     useEffect(() => {
//         const storedToken = localStorage.getItem("token");
//         if (storedToken) {
//             const decodedToken = jwt.decode(storedToken);
//             if (decodedToken) {
//                 const userRole = decodedToken.role;
//                 if (userRole === "user" || userRole === "promotor") {
//                     navigate("/dashboard");
//                 } else {
//                     navigate("/");
//                 }
//             }
//         };
//     }, []);

  

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };
//     const handleLogin = (e) => {
//         dispatch(login(usernameOrEmail, password, navigate, setErrorMessage));
        
        
//       };

//     return (
//         <Box>
//             {/* <Box w={"auto"} bg={"white.100"} h={"10vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
//                 <Box bg={"white"} w={"10%"} h={"50%"} display={"flex"} textAlign={"center"} justifyContent={"center"} color={"orange.500"} fontSize={"2xl"} fontFamily={'fantasy'}> TicketWave </Box>
//             </Box> */}
//             <Box display={"Flex"} flexDirection={"row"} h={"100vh"} w={"auto"}>
//                 <Box display={{ base: "none", md: "flex" }} bg={"white.100"} w={"50%"} justifyContent={"center"} alignItems={"center"}>
//                     <Image src={backgroundjpg} w={"80%"} />
//                 </Box>
//                 <Box flexDirection={'column'} bg={"gray.100"}  w={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={{ base: "100%", sm: "100%", md: "50%" }}>
//                     <Card maxW={"md"} margin={"auto"} paddingY={"4"} shadow={"xl"} w='100%'>
//                         <CardBody textAlign={"center"}>
//                             <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"}>Login</Text>
//                             <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"} marginBottom={1}>Your Account</Text>
//                             <Text textAlign={"center"} ></Text>
//                             {/* <Text textAlign={"left"} >Username or Email</Text> */}
//                             <Input marginTop={'10'} marginBottom={'10'} type="text" placeholder=' Username or Email' value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
//                             {/* <Text textAlign={"left"} >Password</Text> */}
//                             <InputGroup>
//                                 <Input
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder='Password'
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                                 <InputRightElement >
//                                     <Button 
//                                         _hover={{bgColor:"transparent"}}
//                                         bg={'transparent'}
//                                         onClick={togglePasswordVisibility}
//                                         leftIcon={showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                                     ></Button>
//                                 </InputRightElement>
//                             </InputGroup>
//                             {errorMessage && <Text color="red">{errorMessage}</Text>}
//                             <Button type="button" w={'100%'} marginTop={"8"} colorScheme="blue" onClick={handleLogin}>
//                                 Login
//                             </Button>
//                             <Text padding={'2'} textAlign={"center"} >Belum punya akun? <Link onClick={onOpen}>
//                                 <span style={{ color: 'blue' }}>Daftar</span>
//                             </Link></Text>
//                         </CardBody>
//                         <Box   display={'flex'} flexDirection={'row'} w={'100%'} justifyContent={'space-around'} marginBottom={'10'}>
//                            <Button margin={'0px 10px'} className="btn-fb" w={"30%"} h={'10'} display={"flex"} gap={"5px"} colorScheme="blue"> <FaFacebook fontSize={"24px"}/> Facebook</Button>
//                            <Button margin={'0px 10px'} className="btn-g" w={"30%"} h={'10'} display={"flex"} gap={"5px"} colorScheme="teal" variant={"outline"} boxShadow={'md'} border={'none'}> <FcGoogle fontSize={"23px"}/> Google</Button>
//                     </Box>
//                     </Card>

//                     <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
//                         <ModalOverlay />
//                         <ModalContent>
//                             <ModalHeader>Create your account</ModalHeader>
//                             <ModalCloseButton />
//                             <ModalBody pb={6} >
//                                 <Button width={"45%"} h={"100"} type="button" margin={"auto"} border={'1px solid red'} marginRight={5} _hover={{bg:'red.500' , transition:'ease-in-out 0.6s', color:'white'}}>
//                                     <Box marginRight={'2'} > <BsFillFileEarmarkPersonFill /> </Box>
//                                     <Link to={"/Register"}>Pengguna</Link>
//                                 </Button>
//                                 <Button width={"45%"} h={"100"} type="button" margin={"auto"} border={'1px solid blue'} marginLeft={5} _hover={{bg:'blue.500', transition:'ease-in-out 0.6s', color:'white'}} >
//                                     <Box marginRight={'2'}> <BsCalendar3/> </Box>  
//                                     <Link to={"/RegisterPromotor"}>Promotor</Link>
//                                 </Button>
//                             </ModalBody>
//                         </ModalContent>
//                     </Modal>
//                 </Box>
//             </Box>
//             {/* <Box bg={"white.200"} w={"auto"} h={"5vh"}>  </Box> */}
//         </Box>
//     );
// };

// export default AuthPage;






















   



















// const Profile = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
  
//     const updateUsername = () => {
//       const data = { username };
  
//       axios
//         .post(`${API_URL}/account/editUsername`, data) // Ganti dengan URL yang sesuai
//         .then((response) => {
//           console.log(response.data);
//           alert("Username updated successfully!");
//         })
//         .catch((error) => {
//           console.error(error);
//           alert("An error occurred while updating username.");
//         });
//     };
  
//     const updateEmail = () => {
//       const data = { email };
  
//       axios
//         .post(`${API_URL}/account/editEmail`, data) // Ganti dengan URL yang sesuai
//         .then((response) => {
//           console.log(response.data);
//           alert("Email updated successfully!");
//         })
//         .catch((error) => {
//           console.error(error);
//           alert("An error occurred while updating email.");
//         });
//     };
  
//     const updatePhone = () => {
//       const data = { phone };
  
//       axios
//         .post(`${API_URL}/account/editPhone`, data) // Ganti dengan URL yang sesuai
//         .then((response) => {
//           console.log(response.data);
//           alert("Phone number updated successfully!");
//         })
//         .catch((error) => {
//           console.error(error);
//           alert("An error occurred while updating phone number.");
//         });
//     };
  
//     return (
//       <div>
//         <div className="bagian1">
//           <div className="bagian1a">
//             <div className="bagian1b">Profile User</div>
//             <div className="bagian1c">MENU PAGE</div>
//           </div>
//         </div>
//         <h1 className="bagian2a">Account Profile</h1>
//         <div className="bagian2b"></div>
//         <Card >
//           <div>
//             <Input
//               type="text"
//               placeholder="Input your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <Button onClick={updateUsername}>Update Username</Button>
//           </div>
//           <div>
//             <Input
//               type="text"
//               placeholder="Input your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Button margin={'auto'} onClick={updateEmail}>Update Email</Button>
//           </div>
//           <div>
//             <Input
//               type="text"
//               placeholder="Input your phone number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <Button onClick={updatePhone}>Update Phone Number</Button>
//           </div>
//         </Card>
//       </div>
//     );
//   };
  
  








