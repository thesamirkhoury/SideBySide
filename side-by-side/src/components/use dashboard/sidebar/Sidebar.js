import React from "react";
import "./Sidebar.css";
import Lecture from "../assests/lecture-icon.svg";
import Coupon from "../assests/Coupons-icon.svg";
import Ticket from "../assests/Tickets-icon.svg";
import Setting from "../assests/Settings-icon.svg";
import Logout from "../assests/Logout-icon.svg";
import { NavLink } from "react-router-dom";

function Sidebar({ setUserLogged }) {
  const [imgColor, setImgColor] = React.useState("");
  return (
    <div className="sidebar-user">
      <div className="upper-items">
        <NavLink
          to="/userdashboard/lectures"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>סדנאות</p>
            <img
              src={Lecture}
              className={imgColor}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
        <NavLink
          to="/userdashboard/coupons"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>הטבות</p>
            <img
              src={Coupon}
              className={imgColor}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
        <NavLink
          to="/userdashboard/tickets"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>פניות</p>
            <img
              src={Ticket}
              style={{ color: "red" }}
              className={imgColor}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
      </div>

      <div className="lower-items">
        <NavLink
          to="/userdashboard/settings"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>הגדרות</p>
            <img
              src={Setting}
              className={imgColor}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="single-item" onClick={() => setUserLogged(false)}>
            <p>התנתק</p>
            <img src={Logout} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
