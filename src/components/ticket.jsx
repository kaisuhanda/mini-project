import './eventDetailsComponents.css'

function Ticket({ total, cart }) {
    return (
        <div className="ticket">
            <div className="checkoutContainer">
                <div className="checkout">
                    {cart.length > 0 ? (
                        <ul className='cartTickets'>
                            {cart.map((cartTicket, index) => (
                                <li key={index}>
                                    <div className="flexboxTop">
                                        <div className="iContainerlarge">
                                            <i class="fa-solid fa-ticket-simple"></i>
                                        </div>
                                        <span>{cartTicket.type}</span>
                                    </div>
                                    <div className="flexbox">
                                        <p>{cartTicket.quantity} tickets</p>
                                        <span>Rp. {cartTicket.price * cartTicket.quantity}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="div">
                            <div className="iContainerlarge">
                                <i class="fa-solid fa-ticket-simple"></i>
                            </div>
                            <p>You haven't chosen a ticket. Please choose a ticket</p>
                        </div>
                    )}
                </div>
                <div className="line2"></div>
                <div className="total">
                    <p>Your total is</p>
                    <span><h1>Rp. {Number(total)}</h1></span>
                </div>
                <div className="buttonContainer">
                    <button className="buyTicket">Buy Ticket</button>
                </div>
            </div>
            <div className="share">
                Share this event
                <ul className="socialMediaIcons">
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-whatsapp"></i></li>
                    <li><i class="fa-solid fa-link"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Ticket