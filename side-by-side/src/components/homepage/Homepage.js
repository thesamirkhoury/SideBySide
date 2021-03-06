import React from "react";
import "./homepage.css";
import emoji from "../../assests/homepage-emoji.svg";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Homepage() {
  return (
    <div className="homepage-component">
      <div className="image-side">
        <img src={emoji} alt="emoji" className="emoji" />
      </div>

      <div className="content-side">
        <h1> החממה </h1>
        <h2>קהילה תומכת דיגיטלית</h2>
        <NavLink to="/login">
          <button className="home-login"> התחבר לאזור האישי</button>
        </NavLink>
        <NavLink to="/userregister">
          <button className="home-waitinglist"> להצטרפות</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Homepage;
