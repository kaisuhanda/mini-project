import './dashboardComponents.css'

function EventCard({ event }) {
    const formatFollowers = (followers) => {
        if (followers < 1000) {
            return followers
        } else if (followers < 1000000) {
            return (followers / 1000).toFixed(1) + 'k'
        } else {
            return (followers / 1000000).toFixed(1) + 'M'
        }
    };

    return (
        <div className="eventCard">
            <img src={event.img} />
            <div className="eventCardContent">
                <p>{event.name}</p>
                <p className="timeCaption">{event.time}</p>
                <p className="locationCaption">{event.location}, <br /> {event.price}</p>
                <p className="creatorCaption">
                    event.promoterid
                    <div className="eventCardCreator">
                        <div className="iContainer">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <p>1000 followers</p>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default EventCard

