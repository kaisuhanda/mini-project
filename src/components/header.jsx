import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboardComponents.css';

function Header() {
  const [eventsList, setEventsList] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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
          <div className="login">
            Log In
          </div>
          <div className="signup">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

