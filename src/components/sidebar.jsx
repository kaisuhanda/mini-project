import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import './eventsComponents.css'

function Sidebar({ toggleFree, toggleOnline, handleCategory, handleCity, handleTime, resetFilters, showSidebar }) {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const [isOnline, setIsOnline] = useState(false);
    const [isFree, setIsFree] = useState(false);

    const [isVisibleCities, setIsVisibleCities] = useState(false)
    const [isVisibleCategories, setIsVisibleCategories] = useState(false)
    const [isVisibleTime, setIsVisibleTime] = useState(false)

    const [citiesIconRotation, setCitiesIconRotation] = useState(0);
    const [categoriesIconRotation, setCategoriesIconRotation] = useState(0);
    const [timeIconRotation, setTimeIconRotation] = useState(0)

    const [categoriesList, setCategoriesList] = useState([])
    const [citiesList, setCitiesList] = useState([])

    const [selectedCity, setSelectedCity] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)

    const fetchCategories = async () => {
        try {
            let endpoint = 'http://localhost:2066/categories';
            const response = await fetch(endpoint);
            const data = await response.json();
            setCategoriesList(data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCities = async () => {
        try {
            let endpoint = 'http://localhost:2066/cities';
            const response = await fetch(endpoint)
            const data = await response.json()
            setCitiesList(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategories(),
            fetchCities()
    }, []);
    const handleToggleVisibleCities = () => {
        setCitiesIconRotation(isVisibleCities ? 0 : 180);
        setIsVisibleCities(!isVisibleCities)
        console.log('isOnline: ', isOnline);
    }
    const handleToggleVisibleCategories = () => {
        setCategoriesIconRotation(isVisibleCategories ? 0 : 180)
        setIsVisibleCategories(!isVisibleCategories)
        console.log('test categories');
    }
    const handleToggleVisibleTime = () => {
        setTimeIconRotation(isVisibleTime ? 0 : 180)
        setIsVisibleTime(!isVisibleTime)
        console.log('test time');
    }
    const handleToggleOnline = () => {
        setIsOnline((prevIsOnline) => {
            toggleOnline(!prevIsOnline);
            return !prevIsOnline;
        });
        console.log('test online');
    };

    const handleToggleFree = () => {
        setIsFree(!isFree)
        toggleFree()
        console.log('test free');
    };
    const handleCityClick = (city_id) => {
        setSelectedCity((prevSelectedCity) => (prevSelectedCity === city_id ? null : city_id))
        handleCity(city_id)
        console.log('test ', city_id);
    }
    const handleCategoryClick = (category_id) => {
        console.log('prevSelectedCategory: ', selectedCategory);
        setSelectedCategory((prevSelectedCategory) => (prevSelectedCategory === category_id ? null : category_id))
        console.log('afterSelectedCategory : ', selectedCategory);
        handleCategory(category_id)
    }
    const handleTimeClick = (time) => {
        setSelectedTime((prevSelectedTime) => prevSelectedTime === time ? null : time)
        handleTime(time)
        console.log('test', time);
    }

    const sidebarStyle = {
        height: window.innerWidth <= 1024 ? '800px' : 'auto'
    }

    return (
        <div className={`sidebar ${showSidebar ? 'visible' : ''}`} style={sidebarStyle}>
            <div className="filter">
                Filter
                <button className='reset' onClick={resetFilters}>
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
            </div>
            <div className="border"></div>
            <div className="locationContainer">
                <ul>
                    <li>
                        <div className="aCategory">
                            Online
                            <div className="switchContainer">
                                <label className="switch">
                                    <input id='checkbox' type="checkbox" checked={searchParams.get('isOnline') === 'true' ? true : false} onChange={handleToggleOnline} />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="aCategory">
                            City
                            <button
                                key={searchParams}
                                className={`dropdown ${searchParams.get('isOnline') === null ? '' : 'disabled'}`}
                                onClick={searchParams.get('isOnline') === null ? handleToggleVisibleCities : null}
                            >
                                <i className="fa-solid fa-caret-down" style={{ transform: `rotate(${citiesIconRotation}deg)` }}></i>
                            </button>
                        </div>
                        <ul className={`citiesList ${isVisibleCities && searchParams.get('isOnline') === null ? 'visible' : ''}`} >
                            {citiesList.map((city, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleCityClick(city.id)}
                                    className={searchParams.get('city_id') && searchParams.get('city_id') === String(city.id) ? 'active' : ''}
                                >
                                    {city.city}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div >
            <div className="border"></div>
            <div className="categoryContainer">
                <ul>
                    <li>
                        <div className="aCategory">
                            Category
                            <button className='dropdown' onClick={handleToggleVisibleCategories}>
                                <i className="fa-solid fa-caret-down" style={{ transform: `rotate(${categoriesIconRotation}deg)` }}></i>
                            </button>
                        </div>
                        <ul className={`categoriesList ${isVisibleCategories ? 'visible' : ''}`}>
                            {categoriesList.map((category, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleCategoryClick(category.id)}
                                    className={searchParams.get('category_id') && searchParams.get('category_id') === String(category.id) ? 'active' : ''}
                                >
                                    {category.category}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="aCategory">
                            Time
                            <button className='dropdown' onClick={handleToggleVisibleTime}>
                                <i className="fa-solid fa-caret-down" style={{ transform: `rotate(${timeIconRotation}deg)` }}></i>
                            </button>
                        </div>
                        <ul className={`timeList ${isVisibleTime ? 'visible' : ''}`}>
                            <li className={searchParams.get('time') && searchParams.get('time') === 'today' ? 'active' : ''} onClick={() => handleTimeClick('today')}>Today</li>
                            <li className={searchParams.get('time') && searchParams.get('time') === 'tomorrow' ? 'active' : ''} onClick={() => handleTimeClick('tomorrow')}>Tomorrow</li>
                            <li className={searchParams.get('time') && searchParams.get('time') === 'this-week' ? 'active' : ''} onClick={() => handleTimeClick('this-week')}>This week</li>
                            <li className={searchParams.get('time') && searchParams.get('time') === 'this-month' ? 'active' : ''} onClick={() => handleTimeClick('this-month')}>This month</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="border"></div>
            <div className="priceContainer">
                <ul>
                    <li>
                        <div className="aCategory">
                            Free
                            <div className="switchContainer">
                                <label className="switch">
                                    <input id='checkbox' type="checkbox" checked={searchParams.get('isFree') === 'true' ? true : false} onChange={handleToggleFree} />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Sidebar;
