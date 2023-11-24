function Ticket() {
    return (
        <div className="ticket">
            <div className="checkoutContainer">
                <div className="checkout">
                    <div className="iContainerlarge">
                        <i class="fa-solid fa-ticket-simple"></i>
                    </div>
                    <p>You haven't chosen a ticket. Please choose a ticket</p>
                </div>
                <div className="line2"></div>
                <div className="total">
                    <p>Price starts from</p>
                    <h1>$$$$</h1>
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