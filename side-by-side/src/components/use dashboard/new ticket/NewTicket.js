import React from "react";
import { NavLink } from "react-router-dom";
import "./NewTicket.css";

import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";

export default function NewTicket() {
  const [tickets, setTicket] = React.useState({});

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setTicket({ ...tickets, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "tickets"), {
        ticketSubject: tickets.ticketSubject,
        ticketReferralContent: tickets.ticketReferralContent,
      });
      console.log("New ticket has been generated... ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  console.log("ticket", tickets);
  return (
    <div className="newTicket-component">
      <h1>פנייה חדשה</h1>

      <p>מה נושא הפניה:</p>
      <input
        type="text"
        className="input-newT"
        onChange={onChange2}
        name="ticketSubject"
        dir="rtl"
        style={{
          padding: "5px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      />

      <p>מה תוכן הפניה:</p>
      <textarea
        cols="70"
        rows="8"
        onChange={onChange2}
        name="ticketReferralContent"
        dir="rtl"
      />

      <NavLink to="/userdashboard/tickets">
        <button onClick={handleSubmit} className="newT-btn">שלח פנייה</button>
      </NavLink>
    </div>
  );
}
