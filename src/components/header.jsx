import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboardComponents.css';
import {
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { BsCalendar3, BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { logout } from '../redux/reducer/accountReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Text, Input, InputGroup, InputRightElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { keepLogin } from '../redux/reducer/accountReducer';
import { loginSuccess } from '../redux/reducer/accountReducer';
import PotoProfile from '../pages/profileuser/potoProfile';


function Header() {
  const [eventsList, setEventsList] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const username = useSelector((state) => state.auth.username);
  const role = useSelector((state) => state.auth.role);
  const phone = useSelector((state) => state.auth.phone);
  const id = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const fetchEvents = async () => {
    let endpoint = 'http://localhost:2066/events';
    const response = await fetch(endpoint);
    const data = await response.json();
    setEventsList(data);
  };

  const handleLogout = () => {
    dispatch(logout);
    navigate('/');
    setRefreshTrigger((prev) => !prev);
  };


  useEffect(() => {
    fetchEvents();
    const storedToken = localStorage.getItem('token');
  
    if (storedToken) {
      setIsAuthenticated(true);
      const loginButton = document.querySelector('.login');
      if (loginButton) {
        loginButton.style.display = 'none';
      }
    } else {
      setIsAuthenticated(false);
    }
  
    dispatch(keepLogin())
      .then((userData) => {
        dispatch(loginSuccess(userData));
        console.log(userData);
      })
      .catch((error) => {
        console.error('Error during keepLogin:', error);
      });
  }, [refreshTrigger, dispatch]);
  

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    const filtered = eventsList.filter((event) =>
      event.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className='header'>
      <div className="logo">Ticket<span>Wave</span></div>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/events'>
            Find Events
          </Link>
        </li>
        <li>Create Events</li>
      </ul>
      <div className="pushToTheRight">
        <div className="inputWrapper">
          <input type="text" placeholder='Search...' value={searchInput} onChange={handleSearchInput} />
          {searchInput && (
            <ul className='dropdownSearch'>
              {filteredEvents.map((event) => (
                <li key={event.id} className="dropdownSearchItem">
                  {event.name}
                </li>
              ))}
              {filteredEvents.length === 0 && (
                <li className="dropdownSearchItem">Not found</li>
              )}
            </ul>
          )}
        </div>
        <div className="loginSignup">
          <Link to={'/auth'} className="login"> Log In 
          </Link>
          <Link className="signup" onClick={onOpen}>
            Sign Up
          </Link>
          {isAuthenticated ? (
            <Popover>
              <PopoverTrigger>
                <Button>Profile Account {username}</Button>
              </PopoverTrigger>

              <PopoverContent >
                <PopoverHeader>PROFIL</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                 <PotoProfile/>
                  <p>{username}</p>
                  <p>{role}</p>
                  <p>{id}</p>
                </PopoverBody>
                <PopoverFooter>
                  <Text>ISI DATA PROFIL :</Text> 
                  <Box > - Informasi Dasar </Box>
                  <Box marginTop={2}>
                  <Button w={'100%'} type="button" colorScheme="blue" onClick={handleLogout}>
                    <Link to={"/dashboard"}>LOGOUT</Link>
                  </Button>
                  </Box>
                  <Box marginTop={2}>
                  <Button w={'100%'}>
                    <Link to={'/ProfileUser'}> informasi user </Link>
                  </Button>
                  </Box>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="loginSignup">
              <Link to={'/auth'} className="login"> Log In </Link>
              <Link className="signup" onClick={onOpen} >
                Sign Up
              </Link>
            </div>
          )}
        </div>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6} >
                          <Button width={"45%"} h={"100"} type="button" margin={"auto"} border={'1px solid red'} marginRight={5} _hover={{ bg: 'red.500', transition: 'ease-in-out 0.6s', color: 'white' }}>
                            <Box marginRight={'2'} > <BsFillFileEarmarkPersonFill /> </Box>
                            <Link to={"/Register"}>Pengguna</Link>
                          </Button>
                          <Button width={"45%"} h={"100"} type="button" margin={"auto"} border={'1px solid blue'} marginLeft={5} _hover={{ bg: 'blue.500', transition: 'ease-in-out 0.6s', color: 'white' }} >
                            <Box marginRight={'2'}> <BsCalendar3 /> </Box>
                            <Link to={"/RegisterPromotor"}>Promotor</Link>
                          </Button>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
      </div>
    </div>
  );
}

export default Header;