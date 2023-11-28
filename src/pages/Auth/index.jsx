import jwt from "jsonwebtoken";
import { Image } from '@chakra-ui/react';
import backgroundjpg from "../../pages/images/photo1.jpg";
import { Box, Button, Card, CardBody, Text, Input, InputGroup, InputRightElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios';
import { API_URL } from "../../../helper";
import { login } from "../../redux/reducer/accountReducer";
import { useDispatch } from "react-redux";
import { useDisclosure } from '@chakra-ui/react';
import { BsCalendar3 } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decodedToken = jwt.decode(storedToken);
  
      if (decodedToken) {
        const userRole = decodedToken.role;
        console.log(userRole);
  
        if (userRole === "user") {
          navigate("/dashboard");
        } else if (userRole === "promoter") {
          navigate("/dashboardPromoter");
        } else {
          navigate("/auth");
        }
      }
    }
  }, [navigate]);
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      dispatch(login(usernameOrEmail, password, navigate, setErrorMessage));
    } catch (error) {
      console.error("Gagal login:", error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetPassword = async () => {
    try {
      await axios.post(`${API_URL}/account/forgotPassword`, {
        email: resetEmail,
      });

      // Tampilkan pesan sukses atau sesuai respons server
      console.log("Email reset dikirim.");
      alert("Email reset berhasil dikirim.")

      // Tutup modal setelah mengirim email
      handleCloseModal();
    } catch (error) {
      console.error("Gagal mengirim email reset:", error.response.data.message);
      alert('email reset tidak ditemukan')
      // Tampilkan pesan kesalahan atau sesuai respons server
      // Anda dapat menambahkan notifikasi atau menanggapi pesan ini sesuai kebutuhan
    }
  };

  return (
    <Box>
      <Box display={'Flex'} flexDirection={'row'} h={'100vh'} w={'auto'}>
        <Box display={{ base: "none", md: "flex" }} bg={"white.100"} w={"50%"} justifyContent={"center"} alignItems={"center"}>
          <Image src={backgroundjpg} w={"80%"} />
        </Box>
        <Box flexDirection={'column'} bg={"gray.100"} w={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={{ base: "100%", sm: "100%", md: "50%" }}>
          <Card maxW={"md"} margin={"auto"} paddingY={"4"} shadow={"xl"} w='100%'>
            <CardBody textAlign={"center"}>
              <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"}>Login</Text>
              <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"} marginBottom={1}>Your Account</Text>
              <Input marginTop={'10'} marginBottom={'10'} type="text" placeholder=' Username or Email' value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {errorMessage && <Text color="red">{errorMessage}</Text>}
              <Button type="button" w={'100%'} marginTop={"8"} colorScheme="blue" onClick={handleLogin}>
                Login
              </Button>
              <Text padding={'2'} textAlign={"center"} >Belum punya akun? <Link onClick={onOpen}>
               <span style={{ color: 'blue' }}>Daftar</span></Link></Text>
              <Text padding={'2'} textAlign={"center"} >
                <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleForgotPassword}>
                  Lupa kata sandi?
                </span>
              </Text>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Lupa Kata Sandi</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input
                      type="email"
                      placeholder="Masukkan email Anda"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleResetPassword}>
                      Kirim Email Reset
                    </Button>
                    <Button onClick={handleCloseModal}>Batal</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                         <ModalOverlay />
                         <ModalContent>
                             <ModalHeader>Create your account</ModalHeader>
                             <ModalCloseButton />
                             <ModalBody pb={6} >
                                 <Button width={"45%"} h={"100"} type="button" margin={"auto"} border={'1px solid red'} marginRight={5} _hover={{bg:'red.500' , transition:'ease-in-out 0.6s', color:'white'}}>
                                     <Box marginRight={'2'} > <BsFillFileEarmarkPersonFill /> </Box>
                                     <Link to={"/Register"}>Pengguna</Link>
                                 </Button>
                                 <Button width={"45%"} h={"100"} type="button" margin={"auto"} border={'1px solid blue'} marginLeft={5} _hover={{bg:'blue.500', transition:'ease-in-out 0.6s', color:'white'}} >
                                     <Box marginRight={'2'}> <BsCalendar3/> </Box>  
                                     <Link to={"/RegisterPromotor"}>Promotor</Link>
                                 </Button>
                             </ModalBody>
                         </ModalContent>
                    </Modal>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;

