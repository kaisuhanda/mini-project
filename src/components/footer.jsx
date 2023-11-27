
import './dashboardComponents.css'

function Footer() {
    return (
        <div className="footer">
            <div className="leftDiv">
                <ul>
                    <li className="liHeader">Use Ticketwave</li>
                    <li>Sell Tickets Online</li>
                    <li>Buy Tickets Online</li>
                    <li>Event Promotion</li>
                </ul>
                <ul>
                    <li className="liHeader">Features</li>
                    <li>Blog</li>
                    <li>Community</li>
                    <li>FAQs</li>
                </ul>
                <ul>
                    <li className="liHeader">For You</li>
                    <li>Music</li>
                    <li>Nightlife</li>
                    <li>Performing Arts</li>
                </ul>
                <ul>
                    <li className="liHeader">Follow Us</li>
                    <li className="footerLi">
                        <div className="iContainerFooter">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <p className="socialMedia">Instagram</p>
                    </li>
                    <li className="footerLi">
                        <div className="iContainerFooter">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <p className="socialMedia">Facebook</p>
                    </li>
                    <li className="footerLi">
                        <div className="iContainerFooter">
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <p className="socialMedia">Twitter</p>
                    </li>
                </ul>
            </div>
            <div className="rightDiv">
                <div className="content">
                    <h2>SUBSCRIBE NOW</h2>
                    <input type="text" placeholder="email" /><br />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
