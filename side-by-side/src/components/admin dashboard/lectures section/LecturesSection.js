import React from "react";
import { NavLink } from "react-router-dom";
import "./LecturesSection.css";
import SingleLecture from "./single lecture/SingleLecture";

function LecturesSection() {
  return (
    <div className="lecture-section">
      <div className="lectureSection-header">
        <button className="newPost-button">סדנא חדשה</button>
        <h1>סדנאות קיימות</h1>
      </div>

      <div className="lectures-section">
        <SingleLecture />
        <SingleLecture />
      </div>
    </div>
  );
}

export default LecturesSection;
