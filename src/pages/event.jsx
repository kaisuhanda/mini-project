import './pages.css'
import Layout from './layout'
import Sidebar from '../components/sidebar'
import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'

function EventPage() {
    const [eventsList, setEventsList] = useState([])
    const [SearchParams, setSearchParams] = useSearchParams()

    const fetchEvents = async () => {
        try {
            let endpoint = 'http://localhost:2066/events'
            const queryParams = []

            if (SearchParams.get('isOnline') === 'true') {
                queryParams.push('city_id=null')
            }
            if (SearchParams.get('isOnline') === 'false') {
                queryParams.push('')
            }
            if (SearchParams.get('isFree') === 'true') {
                queryParams.push('price=0')
            }
            const category_id = SearchParams.get('category_id')
            if (category_id) {
                queryParams.push(`category_id=${category_id}`)
            }
            const city_id = SearchParams.get('city_id')
            if (city_id && !SearchParams.get('isOnline')) {
                queryParams.push(`city_id=${city_id}`)
            }
            const time = SearchParams.get('time')
            if (time) {
                queryParams.push(`time=${time}`)
            }
            const sortBy = SearchParams.get('sortBy')
            if (sortBy) {
                queryParams.push(`sortby=${sortBy}`)
            }

            if (queryParams.length > 0) {
                endpoint += '?' + queryParams.join('&')
            }
            const response = await fetch(endpoint);
            const data = await response.json();
            setEventsList(data)
            console.log(endpoint);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [SearchParams])

    const toggleOnline = () => {
        setSearchParams((prevSearchParams) => {
            const currentOnline = prevSearchParams.get('isOnline');
            const newParams = new URLSearchParams(prevSearchParams);
            newParams.set('isOnline', currentOnline === 'true' ? 'false' : 'true');
            if (newParams.get('isOnline') === 'false') {
                newParams.delete('isOnline');
            }
            return newParams; 
        })
    }
    
    const toggleFree = () => {
        setSearchParams((prevSearchParams) => {
            const currentFree = prevSearchParams.get('isFree')
            const newParams = new URLSearchParams(prevSearchParams)
            newParams.set('isFree', currentFree === 'true' ? 'false' : 'true')
            if(newParams.get('isFree') === 'false') {
                newParams.delete('isFree')
            }
            return Object.fromEntries(newParams)
        })
    }

    const handleCategory = (selectedCategory) => {
        setSearchParams((prevSearchParams) => {
            const currentCategory = prevSearchParams.get('category_id')
            const newParams = new URLSearchParams(prevSearchParams)
            if (String(currentCategory) === String(selectedCategory)) {
                newParams.delete('category_id')
                console.log('successfully turned off');
            } else {
                newParams.set('category_id', selectedCategory)
                console.log('successfully set');
            }
            return { ...Object.fromEntries(newParams) }
        })
        console.log('afterSearchParams : ', SearchParams);
    }
    
    const handleCity = (selectedCity) => {
        setSearchParams((prevSearchParams) => {
            const currentCity = prevSearchParams.get('city_id')
            const newParams = new URLSearchParams(prevSearchParams)
            if(String(currentCity) === String(selectedCity)) {
                newParams.delete('city_id')
            } else {
                newParams.set('city_id', selectedCity)
            }
            return { ...Object.fromEntries(newParams)}
        })
    }

    const handleTime = (selectedTime) => {
        setSearchParams((prevSearchParams) => {
            const currentTime = SearchParams.get('time')
            const newParams = new URLSearchParams(prevSearchParams)
            if(currentTime === selectedTime){
                newParams.delete('time')
            } else {
                newParams.set('time', selectedTime)
                console.log('test');
            }
            return { ...Object.fromEntries(newParams)}
        })
    }

    const handleSortBy = (newSortBy) => {
        setSearchParams((prevSearchParams) => {
            const currentSortBy = prevSearchParams.get('sortBy')
            const newParams = new URLSearchParams(prevSearchParams)
            if (newSortBy !== currentSortBy) {
                newParams.set('sortBy', newSortBy)
            } else {
                newParams.delete('sortBy')
                newParams.set('sortBy', 'default');
            }
            return Object.fromEntries(newParams)
        })
    }
    

    const resetFilters = () => {
        setSearchParams(() => new URLSearchParams())
    }

    const [currentPage, setCurrentPage] = useState(1)
    const startIndex = (currentPage - 1) * 6
    const totalPages = Math.ceil(eventsList.length / 6)
    const remainingEvents = eventsList.length - (currentPage - 1) * 6
    const endIndex = currentPage === totalPages ? startIndex + remainingEvents : startIndex + 6
    const displayedEvents = eventsList.slice(startIndex, endIndex)

    const nextPage = () => {
        if (endIndex < eventsList.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (startIndex > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const row = []
    for (let i = 0; i < displayedEvents.length; i += 3) {
        row.push(displayedEvents.slice(i, i + 3))
    }

    console.log(SearchParams.get('category_id') ? 'category is on' : 'category turned off');

    console.log(SearchParams.get('sortBy') ? 'sortby is on' : 'sort by is off');

    return (
        <Layout>
            <div className="eventPage">
                <Sidebar
                    toggleFree={toggleFree}
                    toggleOnline={toggleOnline}
                    handleCategory={handleCategory}
                    handleCity={handleCity}
                    handleTime={handleTime}
                    resetFilters={resetFilters}
                />
                <div className='contentContainer'>
                    <table className='eventPageTable'>
                        <div className="showing">
                            <p>Showing {startIndex + 1}-{endIndex} out of {eventsList.length} events</p>
                            <div className="sortby">
                                sort by:
                                <select name="sort" placeholder='sort by' onChange={(e) => handleSortBy(e.target.value)}>
                                    <option value="default">default</option>
                                    <option value="nearest-time">nearest time</option>
                                    <option value="furthest-time">furthest time</option>
                                    <option value="price-asc">lowest price</option>
                                    <option value="price-desc">highest price</option>
                                </select>
                            </div>
                        </div>
                        <tbody>
                            {row.map((displayedEvents, index) => (
                                <tr key={index}>
                                    {displayedEvents.map((event, index) => (
                                        <td key={index}>
                                            <Link to={`/event-details/${event.id}`}>
                                            <div className="whiteContainer">
                                                <img src={event.image} />
                                                <div className="tdContainer">
                                                    <p>{event.name}</p>
                                                    <p className="timeCaption">{(event.start_date).slice(0,10)}</p>
                                                    <p className="locationCaption">{event.location}, {(event.start_date).slice(11,16)}</p>
                                                    <p className="creatorCaption">
                                                        Starts from Rp. {event?.tickets.sort((a, b) => a.start_from - b.start_from)[0].start_from}
                                                    </p>
                                                </div>
                                            </div>
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='onetwo'>
                        <ul>
                            <li onClick={prevPage}>&lt;</li>
                            <li onClick={nextPage}>&gt;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default EventPage