import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./TicketsSection.css";

import {
  collection,
  query,
  getDocs
} from "firebase/firestore";

import { db } from "../../../firebase/Firebase.config";

function TicketsSection() {
  const [tickets, setTickets] = useState([]);

  const Alltickets = async () => {
    const q = query(collection(db, "tickets"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setTickets(data);
  };

  useEffect(() => {
    Alltickets();
  }, []);

  function unixTime(unixtime) {
    var u = new Date(unixtime * 1000);
    return (
      u.getUTCFullYear() +
      "-" +
      ("0" + u.getUTCMonth()).slice(-2) +
      "-" +
      ("0" + u.getUTCDate()).slice(-2) +
     
    
      (u.getUTCMilliseconds() / 1000).toFixed().slice(2, 5)
    );
  }


  return (
    <div className="ticket-sectin">
      <h1>פניות אחרונות</h1>
      <div className="ticket-table">
        <table border="1" rules="rows">
          <tr>
            <th></th>
            <th>תאריך פנייה</th>
            <th>נושא הפנייה</th>
            <th>שם מלא</th>
            <th>מספר פנייה</th>
          </tr>

          {tickets.map((ticket) => {
            return (
              <tr>
                <td>
                  <Link to="/admindashboard/ticketssectin/reply" state={ticket}>
                    <button className="replyButton">השב</button>
                  </Link>
                </td>
                <td>{unixTime(ticket.ticketTime.date.seconds)}</td>
                <td>{ticket.ticketSubject}</td>
                <td>{ticket.userFirstName} {ticket.usreLastName}</td>
                <td>{ticket.ticketNumber}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default TicketsSection;
