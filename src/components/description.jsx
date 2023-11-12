import { useState } from "react";

function Description() {
    const [activeTab, setActiveTab] = useState("Description");

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
                        This is the description for the event.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates rem, asperiores officia ea totam cupiditate, sunt, ducimus possimus quo quod amet enim dolores dignissimos suscipit. Iste asperiores quos dolorum perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, obcaecati dicta. Placeat, deserunt minima, numquam error ipsam reprehenderit dignissimos consequuntur nemo velit praesentium at quidem quisquam. Assumenda ipsam explicabo reprehenderit?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quaerat, totam quas ipsum amet tempore maiores excepturi voluptatibus eum eaque mollitia autem omnis dolorem reprehenderit ipsa est architecto repellat unde.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem iusto ad delectus nemo maxime at doloremque eos possimus impedit, consectetur debitis molestiae nulla similique officia eligendi enim obcaecati voluptate?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos hic officiis adipisci, itaque officia sit obcaecati, nam aliquid natus rerum culpa fugit architecto quia harum animi ut perspiciatis deleniti illo?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe ab, repellat animi temporibus magnam reprehenderit tenetur nobis soluta, consectetur doloremque. Corrupti omnis tempore est voluptatibus a nemo molestias quos?

                    </li>
                )}
                {activeTab === "Tickets" && (
                    <li className="ulContent">
                        <ul>
                            <li className="aTicket">
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
                            </li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Description;
