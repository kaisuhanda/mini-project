import { Box, Button, Card, CardBody, Text ,Modal,ModalOverlay} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Input, InputGroup, InputRightElement ,useDisclosure } from '@chakra-ui/react'
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_URL } from "../../../helper";
import backgroundjpg from "../../pages/images/photo1.jpg"
import { Image } from '@chakra-ui/react'
import photo10 from "../../pages/images/photo12.jpg"


const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordError, setPasswordError] = useState(""); 
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [phone, setPhone] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRegister = async () => {
    try {
      const userData = {
                 username,
                 password,
                 email,
                 role: "user",
                 phone,
                 confirmPassword: passwordConfirmation,
               };
      const response = await axios.post(`${API_URL}/account/register`, userData);
  
      const { success, message } = response.data;
  
      if (success) {
        // Registrasi berhasil, lakukan sesuatu seperti redirect atau menampilkan pesan sukses
        alert("Registrasi sukses!")
        navigate('/')
      } else {
        // Registrasi gagal, tampilkan pesan error dari backend
        setErrorMessage(message);
        navigate('/Register')
      }
    } catch (error) {
      navigate('/Register')
       console.error("Error during registration:", error);
      // Jika respons dari backend memiliki pesan kesalahan
      if (error.response && error.response.data && error.response.data.message) {
        console.log("Server error message:", error.response.data.message)
        setErrorMessage(error.response.data.message);
      } else {
        // Jika tidak, tampilkan pesan umum
        setErrorMessage("An error occurred during registration.");
      }
      
    }
  };
  
  




      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                 <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"} color={'orange'}>Ticket <Text as={'span'} color={'black'}> wave </Text>  </Text>
                 <Text textAlign={"center"} >Selamat datang di Register Customer</Text>
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
                             type={showPassword ? "text" : "password"}
                             placeholder='Password Confirmation'
                             value={passwordConfirmation}
                             onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                     <Input marginTop={'5'} type="text" placeholder='Referral code ' />
                     {errorMessage && <Text color="red">{errorMessage}</Text>}
                 <Button type="button" w={'75%'} marginTop={"8"} colorScheme="blue" onClick={handleRegister}>
                     Register as Customer
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

export default Register;






{/* <Box bgImage={photo10} >
    <Box w={"auto"} bg={"transparent"} h={"10vh"}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
       <Box bg={"transparent"} w={"10%"} h={"50%"} display={"flex"} textAlign={"center"} justifyContent={"center"} color={"orange.500"} fontSize={"2xl"} fontFamily={'fantasy'}> TicketWave </Box>
</Box>
<Box display={"Flex"} flexDirection={"row"} h={"85vh"} w={"auto"} bg={"transparent"}>

<Box margin={"auto"} paddingY={"3"} bg={"gray.50"}  borderRadius="100"  display={"flex"} justifyContent={"center"} alignItems={"center"} width={{ base: "100%", sm: "100%", md: "50%" }}>
       <Card maxW={"md"} margin={"auto"}  paddingY={"4"} shadow={"dark-lg"} w='100%'>
       <CardBody textAlign={"center"} >
         <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"}>Welcome</Text>
         <Text textAlign={"center"} >Selamat datang di Register</Text>
         <Text textAlign={"left"} >Username</Text>
         <Input type="text" placeholder='input your username' value={username} onChange={(e) => setUsername(e.target.value)} />
         <Text textAlign={"left"} >Email</Text>
         <Input type="text" placeholder='input your email' value={email} onChange={(e) => setEmail(e.target.value)} />
         <Text textAlign={"left"}>Nomor Telepon</Text>
         <Input type="text" placeholder="Input your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
         <Text textAlign={"left"} >Pasword</Text>
         <InputGroup>
                 <Input
                     type={showPassword ? "text" : "password"}
                     placeholder='Input your password'
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
             <Text textAlign={"left"} >konfirmasi Pasword</Text>
         <InputGroup>
                 <Input
                     type={showPassword ? "text" : "password"}
                     placeholder='Input your password again'
                     value={passwordConfirmation}
                     onChange={(e) => setPasswordConfirmation(e.target.value)}
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
         
             <Text textAlign={"left"} >ID referral code (option) </Text>
         <Input type="text" placeholder='input your referral code ' />
         {errorMessage && <Text color="red">{errorMessage}</Text>}
         <Button type="button" w={'50%'} marginTop={"8"} colorScheme="#00080" onClick={handleRegister}>
             daftar
         </Button>
     </CardBody>
       </Card>
       <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
</Modal>  
   </Box>
</Box>
                 <Box bg={"transparent"} w={"auto"} h={"5vh"}>  </Box>
</Box> */}
    