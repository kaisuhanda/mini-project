import React, { useState, useEffect } from 'react';
import './dashboardComponents.css';
import eventBanner from '../assets/eventBanner2.webp';
import bannerResponsive from '../assets/bannerResponsive.webp';
import { Link } from 'react-router-dom';

function Banner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const backgroundImage = windowWidth <= 430 ? bannerResponsive : eventBanner;

    return (
        <div className="banner">
            <div className="imageContainer">
                <img src={backgroundImage} alt="" className="backgroundImage" />
                <Link to="/events" className="FindYourNextEvent">
                    Find your next event
                </Link>
            </div>
        </div>
    );
}

export default Banner;
