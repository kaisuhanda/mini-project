import { useState, useEffect } from "react";

function Description({ event, tickets, total, setTotal, cart, setCart }) {
    const [activeTab, setActiveTab] = useState("Description");
    const [amount, setAmount] = useState({});
  
    useEffect(() => {
      let startAmount = {};
      tickets.forEach((ticket) => {
        startAmount[ticket.id] = 0;
      });
      setAmount(startAmount);
    }, [tickets]);
  
    const end_date = event?.end_date || "";
    const date = end_date.slice(0, 10);
  
    const addTotal = (ticket) => {
      setTotal((prevTotal) => prevTotal + ticket.price);
      setAmount((prevAmount) => ({
        ...prevAmount,
        [ticket.id]: prevAmount[ticket.id] + 1,
      }));
      updateCart(ticket, true);
    };
  
    const subtractTotal = (ticket) => {
      if (amount[ticket.id] > 0) {
        setTotal((prevTotal) => prevTotal - ticket.price);
        setAmount((prevAmount) => ({
          ...prevAmount,
          [ticket.id]: prevAmount[ticket.id] - 1,
        }));
        updateCart(ticket, false);
      }
    };
  
    const updateCart = (ticket, isAdd) => {
      const index = cart.findIndex((cartItem) => cartItem.id === ticket.id);
  
      if (index !== -1) {
        const updatedCart = [...cart];
        isAdd ? (updatedCart[index].quantity += 1) : (updatedCart[index].quantity -= 1);
  
        if (updatedCart[index].quantity === 0) {
          updatedCart.splice(index, 1);
        }
  
        setCart(updatedCart);
      } else if (isAdd) {
        setCart([...cart, { id: ticket.id, type: ticket.type, price: ticket.price, quantity: 1 }]);
      }
    };
  
    console.log(cart);

    return (
        <div className="description">
            <ul className="descriptionHeader">
                <li
                    className={activeTab === "Description" ? "activeTab" : ""}
                    onClick={() => setActiveTab("Description")}
                >
                    Description
                </li>
                <li
                    className={activeTab === "Tickets" ? "activeTab" : ""}
                    onClick={() => setActiveTab("Tickets")}
                >
                    Tickets
                </li>
            </ul>
            <ul
                className={`descriptionContent ${activeTab === "Description" ? "activePage" : ""
                    }`}
            >
                {activeTab === "Description" && (
                    <li className="ulContent">{event?.description}</li>
                )}
                {activeTab === "Tickets" && (
                    <li className="ulContent">
                        <ul>
                            {tickets.map((ticket, index) => (
                                <li key={index} className="aTicket">
                                    <h2>{ticket.type}</h2>
                                    <p>Tax and administration fee included</p>
                                    <div className="until">
                                        <i className="fa-solid fa-clock"></i>
                                        Until {date}
                                    </div>
                                    <div className="line"></div>
                                    <div className="buyTicketTicket">
                                        {ticket.price > 0 ? (
                                          <h1>Rp. {ticket.price}</h1>
                                        ) : (
                                          <h1>Free</h1>
                                        )}
                                        <div className="increment">
                                            <button onClick={() => subtractTotal(ticket)}>-</button>
                                            <span>{amount[ticket.id]}</span>
                                            <button onClick={() => addTotal(ticket)}>+</button>
                                        </div>
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


// import { useState } from "react";

// function Description({ event, tickets, setTotal }) {
//     const [activeTab, setActiveTab] = useState("Description")
//     const [amount, setAmount] = useState(0)

//     const end_date = event?.end_date || '';
//     const date = end_date.slice(0, 10);

//     const addTotal = async (price) => {
//         console.log('added');
//         setAmount((prevAmount) => prevAmount + 1)
//         setTotal((prevTotal) => prevTotal + price * (amount + 1))
//         console.log(total);
//     }
    
//     const subtractTotal = async (price) => {
//         console.log('subtracted');
//         setAmount((prevAmount) => prevAmount - 1)
//         setTotal((prevTotal) => prevTotal - price * (amount - 1))
//         console.log(total);
//     }
    
//     return (
//         <div className="description">
//             <ul className="descriptionHeader">
//                 <li className={activeTab === "Description" ? "activeTab" : ""} onClick={() => setActiveTab("Description")}>
//                     Description
//                 </li>
//                 <li className={activeTab === "Tickets" ? "activeTab" : ""} onClick={() => setActiveTab("Tickets")}>
//                     Tickets
//                 </li>
//             </ul>
//             <ul className={`descriptionContent ${activeTab === "Description" ? "activePage" : ""}`}>
//                 {activeTab === "Description" && (
//                     <li className="ulContent">
//                         {event?.description}
//                     </li>
//                 )}
//                 {activeTab === "Tickets" && (
//                     <li className="ulContent">
//                         <ul>
//                             {tickets.map((ticket, index) => (
//                                 <li key={index} className="aTicket">
//                                     <h2>{ticket.type}</h2>
//                                     <p>Tax and administration fee included</p>
//                                     <div className="until">
//                                         <i class="fa-solid fa-clock"></i>
//                                         Until {date}
//                                     </div>
//                                     <div className="line"></div>
//                                     <div className="buyTicketTicket">
//                                         <h1>Rp. {ticket.price}</h1>
//                                         <div className="increment">
//                                             <button onClick={subtractTotal}>-</button>
//                                             <span>{amount}</span>
//                                             <button onClick={addTotal}>+</button>
//                                         </div>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </li>
//                 )}
//             </ul>
//         </div>
//     );
// }

// export default Description;
