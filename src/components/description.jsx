import { useState } from "react";

function Description({ event, tickets }) {
    const [activeTab, setActiveTab] = useState("Description")
    const [total, setTotal] = useState(0)

    const addTotal = async (price) => {
        setTotal((prevTotal) => (
            prevTotal += price
        ))
        console.log(total);
    }

    return (
        <div className="description">
            <ul className="descriptionHeader">
                <li className={activeTab === "Description" ? "activeTab" : ""} onClick={() => setActiveTab("Description")}>
                    Description
                </li>
                <li className={activeTab === "Tickets" ? "activeTab" : ""} onClick={() => setActiveTab("Tickets")}>
                    Tickets
                </li>
            </ul>
            <ul className={`descriptionContent ${activeTab === "Description" ? "activePage" : ""}`}>
                {activeTab === "Description" && (
                    <li className="ulContent">
                        {event?.description}
                    </li>
                )}
                {activeTab === "Tickets" && (
                    <li className="ulContent">
                        <ul>
                            {tickets.map((ticket, index) => (
                                <li key={index} className="aTicket">
                                    <h2>{ticket.type}</h2>
                                    <p>Tax and administration fee included</p>
                                    <div className="until">
                                        <i class="fa-solid fa-clock"></i>
                                        Until {ticket.end_sales}
                                    </div>
                                    <div className="line"></div>
                                    <div className="buyTicketTicket">
                                        <h1>Rp. {ticket.price}</h1>
                                        <button onClick={() => {addTotal(ticket.price)}}>
                                            Add
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Description;

{/* <li className="aTicket">
                                <h2>Ticket 1</h2>
                                <p>Tax and administration fee included</p>
                                <div className="until">
                                    <i class="fa-solid fa-clock"></i>
                                    Until event.time
                                </div>
                                <div className="line"></div>
                                <h1>$$$$</h1>
                            </li>
                            <li className="aTicket">
                                <h2>Ticket 2</h2>
                                <p>Tax and administration fee included</p>
                                <div className="until">
                                    <i class="fa-solid fa-clock"></i>
                                    Until event.time
                                </div>
                                <div className="line"></div>
                                <h1>$$$$</h1>
                            </li>
                            <li className="aTicket">
                                <h2>Ticket 3</h2>
                                <p>Tax and administration fee included</p>
                                <div className="until">
                                    <i class="fa-solid fa-clock"></i>
                                    Until event.time
                                </div>
                                <div className="line"></div>
                                <h1>$$$$</h1>
                            </li> */}