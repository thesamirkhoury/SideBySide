import React from "react";
import SingleTicket from "./single ticket/SingleTicket";
import "./Tickets.css";
import searchicon from "../assests/search-icon.svg";
import plus from "../assests/newticket.svg";
import { NavLink } from "react-router-dom";
function Tickets() {
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
        <SingleTicket />
        <SingleTicket />
        <SingleTicket />
        <SingleTicket />
      </div>
    </div>
  );
}

export default Tickets;
