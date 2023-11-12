import './eventsComponents.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="filter">
                Filter
            </div>
            <div className="border"></div>
            <div className="locationContainer">
                <ul>
                    <li>Online</li>
                    <li>Location</li>
                </ul>
            </div>
            <div className="border"></div>
            <div className="categoryContainer">
                <ul>
                    <li>Category</li>
                    <li>Date</li>
                    <li>Time</li>
                </ul>
            </div>
            <div className="border"></div>
            <div className="priceContainer">
                <ul>
                    <li>Price</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar