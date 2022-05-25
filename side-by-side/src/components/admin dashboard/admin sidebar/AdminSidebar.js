import React from "react";
import "./AdminSidebar.css";
import updates from "../assets/updates.svg";
import blogs from "../assets/blogs.svg";
import Lectures from "../assets/lectures.svg";
import admins from "../assets/admin.svg";
import tickets from "../assets/tickets.svg";
import chatMngtmnt from "../assets/chats.svg";
import users from "../assets/users.svg";
import setting from "../assets/setting.svg";
import logout from "../assets/logout.svg";
import coupons from "../assets/coupons.svg";
import { NavLink } from "react-router-dom";
function AdminSidebar({ setAdminLogged }) {
  return (
    <div className="admin-sidebar">
      <div className="admin-upper-items">
        <NavLink
          to="/admindashboard/updates"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>עדכונים</p>
            <img src={updates} alt="icon" height="43" width="32" />
          </div>
        </NavLink>

        <NavLink
          to="/admindashboard/blogssection"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>פוסטים</p>
            <img src={blogs} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <NavLink
          to="/admindashboard/lecturessection"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>סדנאות</p>
            <img src={Lectures} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <NavLink
          to="/admindashboard/couponsection"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>סדנאות</p>
            <img src={coupons} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <NavLink
          to="/admindashboard/ticketssectin"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>פניות</p>
            <img src={tickets} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <NavLink
          to="/admindashboard/userssection"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>משתמשים</p>
            <img src={users} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <a href="https://www.tidio.com/panel/dashboard" target="_blank">
          <div className="single-item">
            <p>ניהול צ׳אט</p>
            <img src={chatMngtmnt} alt="icon" height="43" width="32" />
          </div>
        </a>
        <NavLink
          to="/admindashboard/adminssection"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>מנהלים</p>
            <img src={admins} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
      </div>

      <div className="lower-items adminSdbr">
        <NavLink
          to="/admindashboard/settingssection"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item">
            <p>הטבות</p>
            <img src={setting} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item" onClick={() => setAdminLogged(false)}>
            <p>התנתק</p>
            <img src={logout} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
