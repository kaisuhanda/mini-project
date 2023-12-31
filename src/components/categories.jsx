import './dashboardComponents.css';
import Music from '../assets/Music.webp';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Categories() {
    const [categoriesList, setCategoriesList] = useState([]);
    const navigate = useNavigate();

    const fetchCategories = async () => {
        let endpoint = 'http://localhost:2066/categories';
        const response = await fetch(endpoint);
        const data = await response.json();
        setCategoriesList(data.slice(0, 8));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="eventCategories">
            <ul>
                {categoriesList.map((category, index) => (
                    <Link to={`events?category_id=${category.id}`} key={index}>
                        <li>
                            <div className="catContainer">
                                <div
                                    className="catContainerImg"
                                    style={{ backgroundImage: `url(${Music})`, display:'flex', justifyContent:'center', alignItems:'center' }}
                                ></div>
                            </div>
                            {category.category}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
