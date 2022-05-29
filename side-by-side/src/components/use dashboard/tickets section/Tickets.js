import React, { useState, useEffect } from "react";
import SingleTicket from "./single ticket/SingleTicket";
import "./Tickets.css";
import searchicon from "../assests/search-icon.svg";
import plus from "../assests/newticket.svg";
import { NavLink } from "react-router-dom";
import {
  collection,
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/Firebase.config";

function Tickets() {
  const [tickets, setTickets] = useState([]);

  const Alltickets = async () => {
    const q = query(collection(db, "tickets"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setTickets(data);
    console.log("All Tickets", data);
  };

  useEffect(() => {
    Alltickets();
  }, []);

  function unixTime(unixtime) {
    var theDate = new Date(unixtime * 1000);
    return  theDate.toLocaleDateString();
  }

  return (
    <div className="tickets-section">
      <div className="searchBox">
        <input type="text" dir="rtl" placeholder="הזין ערך לחיפוש" />
        <img src={searchicon} />
      </div>
      <div className="title-button">
        <NavLink to="/userdashboard/tickets/newticket">
          <div className="new-ticket-btn">
            <button>פניה חדשה</button>
            <img src={plus} alt="plus" className="plus" />
          </div>
        </NavLink>
        <h1>פניות אחרונות</h1>
      </div>
      <div className="singletickets-section">
        {tickets.map((ticket) => {
          return (
            <SingleTicket
              ticketNo={ticket.ticketNumber}
              ticketStatus={ticket.ticketStatus}
              ticketSubject={ticket.ticketSubject}
              ticketTime={unixTime(ticket.ticketTime)}
              ticketReferral={ticket.ticketReferral}
              ticketAnswer={ticket.ticketAnswer}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tickets;
