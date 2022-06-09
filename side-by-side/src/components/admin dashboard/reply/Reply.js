import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Reply.css";
import { useLocation } from "react-router-dom";

import { updateDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../firebase/Firebase.config";
import {location } from 'react-router-dom'
function Reply() {

  const location = useLocation();

  function unixTime(unixtime) {
    var u = new Date(unixtime * 1000);
    return (
      u.getUTCFullYear() +
      "-" +
      ("0" + u.getUTCMonth()).slice(-2) +
      "-" +
      ("0" + u.getUTCDate()).slice(-2) +
      " " +
      ("0" + u.getUTCHours()).slice(-2) +
      ":" +
      ("0" + u.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + u.getUTCSeconds()).slice(-2) +
      "." +
      (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5)
    );
  }

  const [ans, setAns] = useState("");

  function handleSubmit() {
    let dataToupdate = doc(db, "tickets", location.state.id);
    updateDoc(dataToupdate, {
      ticketAnswer: ans,
      ticketStatus:'closed'
    })
      .then((res) => {
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }

  return (
    <div className="reply-component">
      <h1>השב לפנייה</h1>
      <hr
        style={{
          width: "100%",
          textAlign: "center",
          border: "1px solid #EBEBF9",
        }}
      />
      <div className="singleLin">
        <h2>:מספר פניה</h2>
        <p>{location.state.ticketNumber}</p>
      </div>

      <div className="singleLin">
        <h2>:נושא הפניה</h2>
        <p>{location.state.ticketSubject}</p>
      </div>
      <div className="singleLin">
        <h2>:תאריך פתיחה</h2>
        <p>{unixTime(location.state.ticketTime.date.seconds)}</p>
      </div>
      <div className="singleLin col">
        <h2>:מלל הפניה</h2>
        <p>{location.state.ticketReferral}</p>
      </div>
      <div className="singleLin col">
        <h2>:תשובה</h2>
        <textarea
          onChange={(e) => setAns(e.target.value)}
          id="w3review"
          name="w3review"
          rows="8"
          dir="rtl"
          cols="100"
          placeholder={location.state.ticketAnswer}
        />
      </div>

      <div className="replyBtns">
        <NavLink to="/admindashboard/ticketssectin">
          <button className="cancelB">ביטול</button>
        </NavLink>
        <NavLink to="/admindashboard/ticketssectin">
          <button onClick={handleSubmit} className="sendB">
            שלח
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Reply;
