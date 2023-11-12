import './dashboardComponents.css';
import jakarta from '../assets/jakarta.jpeg';
import bali from '../assets/bali.jpeg';
import singapore from '../assets/singapore.webp';
import manila from '../assets/manila.webp';
import kl from '../assets/kl.webp';
import melbourne from '../assets/melbourne.jpeg';
import sydney from '../assets/sydney.webp';
import surabaya from '../assets/surabaya.jpeg';
import { useState, useRef } from 'react';

function Locations() {
    const locationsList = [
        { name: 'Jakarta', image: jakarta },
        { name: 'Bali', image: bali },
        { name: 'Singapore', image: singapore },
        { name: 'Manila', image: manila },
        { name: 'Kuala Lumpur', image: kl },
        { name: 'Melbourne', image: melbourne },
        { name: 'Sydney', image: sydney },
        { name: 'Surabaya', image: surabaya },
    ];

    const [position, setPosition] = useState(0);
    const ulRef = useRef(null);

    const handleSwipe = (event) => {
        const ulElement = ulRef.current;
        if (ulElement) {
            const delta = event.deltaY || event.deltaX;

            if (delta !== 0) {
                ulElement.scrollLeft += delta;
                setPosition(ulElement.scrollLeft);
            }
        }
    };

    return (
        <div className="locations">
            <div className="locationsList" onWheel={handleSwipe}>
                <ul ref={ulRef}>
                    {locationsList.map((location, index) => (
                        <li key={index}>
                            <img src={location.image} alt={location.name} />
                            <div className="locationName">
                                {location.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Locations;
