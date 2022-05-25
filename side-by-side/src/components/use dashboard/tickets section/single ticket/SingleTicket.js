import React from "react";
import "./SingleTicket.css";
import expand from "../../assests/expand.svg";
import { NavLink } from "react-router-dom";
function SingleTicket() {
  return (
    <div className="newticket-card">
      <div className="singleticket-detail">
        <h2>מספר פניה</h2>
        <p>12345 </p>
      </div>

      <div className="singleticket-detail">
        <h2>נושא הפניה</h2>
        <p>לורם איפסום דולור סיט אמט</p>
      </div>

      <div className="singleticket-detail">
        <h2>סטטוס </h2>
        <p className="status">
          <span>סגורה</span>
        </p>
      </div>

      <NavLink to="/userdashboard/tickets/extendedticket">
        <div className="expand-ticket">
          <p>הציג פרטים</p> <img src={expand} />
        </div>
      </NavLink>
    </div>
  );
}

export default SingleTicket;
