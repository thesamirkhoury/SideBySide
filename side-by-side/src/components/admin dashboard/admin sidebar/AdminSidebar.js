import React from "react";
import "./AdminSidebar.css";
import updates from "../assets/updates.svg";
import updatesfilled1 from "../assets/updatesfilled.svg";
import blogs from "../assets/blogs.svg";
import blogsfilled1 from "../assets/blogsfilled.svg";
import Lectures from "../assets/lectures.svg";
import lecturesfilled1 from "../assets/lecturesfilled.svg";
import admins from "../assets/admin.svg";
import adminsfilled1 from "../assets/adminfilled.svg";
import tickets from "../assets/tickets.svg";
import ticketsfilled1 from "../assets/ticketsfilled.svg";
import chatMngtmnt from "../assets/chats.svg";
import users from "../assets/users.svg";
import usersfilled1 from "../assets/usersfilled.svg";
import setting from "../assets/setting.svg";
import settingfilled1 from "../assets/settingfilled.svg";
import logout from "../assets/logout.svg";
import coupons from "../assets/coupons.svg";
import couponsfilled1 from "../assets/couponsfilled.svg";
import { NavLink } from "react-router-dom";
function AdminSidebar({ setAdminLogged }) {
  const [upadefilled, setUpdatefilled] = React.useState(false);
  const [blogsfilled, setBlogsfilled] = React.useState(false);
  const [lecturesfilled, setLecturesfilled] = React.useState(false);
  const [usersfilled, setUsersfilled] = React.useState(false);
  const [adminsfilled, setAdminsfilled] = React.useState(false);
  const [couponsfilled, setCouponsfilled] = React.useState(false);
  const [settingsfilled, setSettingsfilled] = React.useState(false);
  const [ticketsfilled, setticketsfilled] = React.useState(false);
  return (
    <div className="admin-sidebar">
      <div className="admin-upper-items">
        <NavLink
          to="/admindashboard/updates"
          className={({ isActive }) =>
            isActive ? setUpdatefilled(true) : setUpdatefilled(false)
          }
        >
          <div className="single-item">
            <p style={{fontWeight:`${upadefilled?'bold' : ''}`}}>עדכונים</p>
            <img
              src={upadefilled ? updatesfilled1 : updates}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>

        <NavLink
          to="/admindashboard/blogssection"
          className={({ isActive }) =>
            isActive ? setBlogsfilled(true) : setBlogsfilled(false)
          }
        >
          <div className="single-item">
            <p style={{fontWeight:`${blogsfilled?'bold' : ''}`}}>פוסטים</p>
            <img
              src={blogsfilled ? blogsfilled1 : blogs}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
        <NavLink
          to="/admindashboard/lecturessection"
          className={({ isActive }) =>
            isActive ? setLecturesfilled(true) : setLecturesfilled(false)
          }
        >
          <div className="single-item">
            <p  style={{fontWeight:`${lecturesfilled?'bold' : ''}`}}>סדנאות</p>
            <img
              src={lecturesfilled ? lecturesfilled1 : Lectures}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
        <NavLink
          to="/admindashboard/couponsection"
          className={({ isActive }) => (isActive ? setCouponsfilled(true): setCouponsfilled(false) )}
        >
          <div className="single-item">
            <p  style={{fontWeight:`${couponsfilled?'bold' : ''}`}}>הטבות</p>
            <img src={ couponsfilled ? couponsfilled1 : coupons} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <NavLink
          to="/admindashboard/ticketssectin"
          className={({ isActive }) => (isActive ? setticketsfilled(true): setticketsfilled(false))}
        >
          <div className="single-item">
            <p style={{fontWeight:`${ticketsfilled?'bold' : ''}`}}>פניות</p>
            <img src={ticketsfilled? ticketsfilled1: tickets} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <NavLink
          to="/admindashboard/userssection"
          className={({ isActive }) => (isActive ? setUsersfilled(true): setUsersfilled(false))}
        >
          <div className="single-item">
            <p style={{fontWeight:`${usersfilled?'bold' : ''}`}}>משתמשים</p>
            <img src={usersfilled ? usersfilled1:  users} alt="icon" height="43" width="32" />
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
          className={({ isActive }) => (isActive ? setAdminsfilled(true): setAdminsfilled(false))}
        >
          <div className="single-item">
            <p style={{fontWeight:`${adminsfilled?'bold' : ''}`}}>מנהלים</p>
            <img src={adminsfilled? adminsfilled1 : admins} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
      </div>

      <div className="lower-items adminSdbr">
        <NavLink
          to="/admindashboard/settingssection"
          className={({ isActive }) => (isActive ? setSettingsfilled(true): setSettingsfilled(false))}
        >
          <div className="single-item">
            <p style={{fontWeight:`${settingsfilled?'bold' : ''}`}}>הטבות</p>
            <img src={settingsfilled? settingfilled1: setting} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <div className="single-item" onClick={() => setAdminLogged(false)}>
            <p >התנתק</p>
            <img src={logout} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
