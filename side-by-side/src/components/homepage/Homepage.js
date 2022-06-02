import React from "react";
import "./homepage.css";
import emoji from "../../assests/homepage-emoji.svg";
import { NavLink } from "react-router-dom";
function Homepage() {
  return (
    <div className="homepage-component">
      <div className="image-side">
        <img src={emoji} alt="emoji" className="emoji" />
      </div>

      <div className="content-side">
        <h1> החממה </h1>
        <p>קהילה תומכת דיגיטלית. </p>
        <NavLink to="/login">
          <button className="home-login"> התחבר לאזור האישי</button>
        </NavLink>
        <NavLink to="/userregister">
          <button className="home-waitinglist"> הכנס לרשימת ההמתנה </button>
        </NavLink>
      </div>
      {/* <div className="chat">
        <a href="https://www.tidio.com/panel/dashboard" target="_blank" ><img src={chat} alt="chat"/></a>
      </div> */}
    </div>
  );
}

export default Homepage;
