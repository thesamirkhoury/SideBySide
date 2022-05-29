import React from "react";
import "./SingleLecture.css";
function SingleLecture() {
  return (
    <div className="lecture-card">
      <div className="single-lecture-detail">
        <h1 style={{ marginBottom: "-13px" }}>שם סדנא</h1>
        <p>לורם איפשסום </p>
      </div>

      <div className="singleL-detail">
        <h1>מיקום הסדנא</h1>
        <p>לורם איפסום דולור סיט אמט</p>
      </div>
      <div className="singleL-detail">
        <h1>תאריך וזמן</h1>
        <p> 13:00  11.04.2022</p>
      </div>
      <div className="singleL-detail">
        <h1>עלות השתתפות</h1>
        <p>0.00 ₪</p>
      </div>

      <div className="buttonsL-div">
        <button className="delL-btn">מחק</button>
        <button className="regL-btn">נרשמים</button>
        <button className="editL-btn">עדכן</button>
      </div>
    </div>
  );
}

export default SingleLecture;
