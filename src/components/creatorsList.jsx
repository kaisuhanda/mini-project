import './dashboardComponents.css'
import profilePic from '../assets/user.png'
import { current } from '@reduxjs/toolkit';
import { useState, useRef } from 'react';

function CreatorsList(){
    const creatorsList = [
        { name: 'Erudite Training', eventsMade: ['Google Ads Consultation'], followers: 1000 },
        { name: 'Begin Group', eventsMade: ['Blockchain For Business'], followers: 1100 },
        { name: 'Horizon Group', eventsMade: ['Halloween Party', 'Vibes Next Door'], followers: 1000 },
        { name: 'AUG Student Services', eventsMade: ['Edu Fair Indonesia'], followers: 1000 },
        { name: 'One Christ Community', eventsMade: ['Sunday Service', 'Christmas Celebration'], followers: 1100 },
        { name: 'Ciputra University', eventsMade: ['AI For Impact', 'Business of Vending Machines'], followers: 2000 },
        { name: 'National University of Singapore', eventsMade: ['Economic Development', 'If you list, you last', 'Progressing Chords Basics'], followers: 4000 },
        { name: 'Better Help', eventsMade: ['Therapy For Troubled Teens'], followers: 500 },
    ];

    const[position, setPosition] = useState(0)
    const ulRef = useRef(null)

    const handleSwipe = (e) => {
        ulElement = ulRef(current)
        if(ulElement){
            if (ulElement) {
                const delta = event.deltaY || event.deltaX;
          
                if (delta !== 0) {
                  ulElement.scrollLeft += delta;
                  setScrollPosition(ulElement.scrollLeft);
                }
              }
            };
        }

    return (
        <div className="creatorsList" onWheel={handleSwipe}>
            <h2>
            <i class="fa-solid fa-user"></i>
            Organizers to follow
            </h2>
            <ul on>
                {creatorsList.map((creator, index) => (
                    <li key={index}>
                        <div className="profilePicContainer">
                            <img src={profilePic} alt="" />
                        </div>
                        <div className="profileContainer">
                            <h3>{creator.name}</h3>
                            <div className='followers'>{creator.followers} followers</div> 
                        </div>
                        <button>View</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CreatorsList;
