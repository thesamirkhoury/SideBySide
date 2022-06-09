import React from "react";
import "./Sidebar.css";
import Lecture from "../assests/Lecture.svg";
import lectureFilled from "../assests/LectureFilled.svg";
import Coupon from "../assests/Coupons-icon.svg";
import CouponFilled from "../assests/CouponFilled.svg";
import Ticket from "../assests/Tickets-icon.svg";
import TicketFilled from "../assests/TicketsFilled.svg";
import Setting from "../assests/Settings-icon.svg";
import SettingFilled from "../assests/SettingFilled.svg";
import Logout from "../assests/Logout-icon.svg";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UseContext";
function Sidebar() {
  const { signInUser, userLogged, setUserLogged, wrongCreds } =
    useUserContext();

  const [lectImgFilled, setLectImgFilled] = React.useState(false);
  const [coupImgFilled, setCouptImgFilled] = React.useState(false);
  const [tickmgFilled, setTickImgFilled] = React.useState(false);
  const [setImgFilled, setSetImgFilled] = React.useState(false);

  return (
    <div className="sidebar-user">
      <div className="upper-items">
        <NavLink
          to="/userdashboard/lectures"
          className={({ isActive }) =>
            isActive ? setLectImgFilled(true) : setLectImgFilled(false)
          }
        >
          <div className="single-item">
            <p style={{ fontWeight: `${lectImgFilled ? "bold" : ""}` }}>
              סדנאות
            </p>
            <img
              src={lectImgFilled ? lectureFilled : Lecture}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
        <NavLink
          to="/userdashboard/coupons"
          className={({ isActive }) =>
            isActive ? setCouptImgFilled(true) : setCouptImgFilled(false)
          }
        >
          <div className="single-item">
            <p style={{ fontWeight: `${coupImgFilled ? "bold" : ""}` }}>
              הטבות
            </p>
            <img
              src={coupImgFilled ? CouponFilled : Coupon}
              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
        <NavLink
          to="/userdashboard/tickets"
          className={({ isActive }) =>
            isActive ? setTickImgFilled(true) : setTickImgFilled(false)
          }
        >
          <div className="single-item">
            <p style={{ fontWeight: `${tickmgFilled ? "bold" : ""}` }}>פניות</p>
            <img
              src={tickmgFilled ? TicketFilled : Ticket}
              style={{ color: "red" }}
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
          className={({ isActive }) =>
            isActive ? setSetImgFilled(true) : setSetImgFilled(false)
          }
        >
          <div className="single-item">
            <p style={{ fontWeight: `${setImgFilled ? "bold" : ""}` }}>
              הגדרות
            </p>
            <img
              src={setImgFilled ? SettingFilled : Setting}

              alt="icon"
              height="43"
              width="32"
            />
          </div>
        </NavLink>
        <NavLink to="/">
          <div
            className="single-item"
            onClick={() => {
              setUserLogged(false);
              localStorage.clear()
            }}
          >
            <p>התנתק</p>
            <img src={Logout} alt="icon" height="43" width="32" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
