import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboardComponents.css';
import { Box, Button, Card, CardBody, Text, Input, InputGroup, InputRightElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import { BsCalendar3 } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

function Header() {
  const [eventsList, setEventsList] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchEvents = async () => {
    let endpoint = 'http://localhost:2066/events';
    const response = await fetch(endpoint);
    const data = await response.json();
    setEventsList(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    const filtered = eventsList.filter((event) =>
      event.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const navUlBurger = document.querySelector('.navUlBurger');
    if (navUlBurger) {
      navUlBurger.classList.toggle('open', isMenuOpen);
    }
  }



  return (
    <div className='header'>
      <div className="logo">Ticket<span>Wave</span></div>
      <ul className='navUl'>
        <li>
          <Link to='/' onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/events' onClick={toggleMenu}>
            Find Events
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            Create Events
          </Link>
        </li>
      </ul>


      <ul className='navUlBurger'>
        <li>
          <Link to='/' onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/events' onClick={toggleMenu}>
            Find Events
          </Link>
        </li>
        <li>
          Create Events
        </li>
      </ul>

      <div className="pushToTheRight">
        <div className="inputContainer">
          <input type="text" placeholder='Search...' value={searchInput} onChange={handleSearchInput} />
          {searchInput && (
            <ul className='dropdownSearch'>
              {filteredEvents.map((event) => (
                <Link to={`/event-details/${event.id}`} onClick={toggleMenu}>
                  <li key={event.id} className="dropdownSearchItem">
                    {event.name}
                    <img src={event.image} alt="" />
                  </li>
                </Link>
              ))}
              {filteredEvents.length === 0 && (
                <li className="dropdownSearchItem">Not found</li>
              )}
            </ul>
          )}
        </div>
        <div className="loginSignup">
          <div className="login">
            <Link to={'/auth'}> Log In </Link>
          </div>
          <Link className="signup" onClick={onOpen}>
            Sign Up
          </Link>
        </div>
      </div>
//       <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create your account</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6} >
//             <Button width={"45%"} h={"100"} type="button" margin={"auto"} border={'1px solid red'} marginRight={5} _hover={{ bg: 'red.500', transition: 'ease-in-out 0.6s', color: 'white' }}>
//               <Box marginRight={'2'} > <BsFillFileEarmarkPersonFill /> </Box>
//               <Link to={"/Register"}>Pengguna</Link>
//             </Button>
//             <Button width={"45%"} h={"100"} type="button" margin={"auto"} border={'1px solid blue'} marginLeft={5} _hover={{ bg: 'blue.500', transition: 'ease-in-out 0.6s', color: 'white' }} >
//               <Box marginRight={'2'}> <BsCalendar3 /> </Box>
//               <Link to={"/RegisterPromotor"}>Promotor</Link>
//             </Button>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
      <div className="burger" onClick={toggleMenu}>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Header;
