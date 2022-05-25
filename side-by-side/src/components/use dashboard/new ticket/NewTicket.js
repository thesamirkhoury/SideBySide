import React from "react";
import { NavLink } from "react-router-dom";
import "./NewTicket.css";
export default function NewTicket() {
  return (
    <div className="newTicket-component">
      <h1>פנייה חדשה</h1>

      <p>מה נושא הפניה:</p>
      <input type="text" className="input-newT" dir="rtl" style={{padding: '5px', border:'1px solid black', borderRadius:'5px'}} />

      <p>מה תוכן הפניה:</p>
      <textarea cols='70' rows='8' dir='rtl' />

      <NavLink to="/userdashboard/tickets">
        <button className="newT-btn">שלח פנייה</button>
      </NavLink>
    </div>
  );
}
