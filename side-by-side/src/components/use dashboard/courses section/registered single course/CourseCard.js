import React from "react";
import { NavLink } from "react-router-dom";
import "./CourseCard.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function CourseCard() {
  return (
    <div className="course-card">
      <div className="single-detail">
        <h1>שם סדנא</h1>
        <p>לורם איפשסום </p>
      </div>

      <div className="single-detail">
        <h1>מיקום הסדנא</h1>
        <p>לורם איפסום דולור סיט אמט</p>
      </div>

      <div className="single-detail">
        <h1>תאריך וזמן</h1>
        <p> 13:00 11.04.2022</p>
      </div>

      <div className="single-detail">
        <h1>עלות השתתפות </h1>
        <p>0.00 ₪</p>
      </div>

      <Popup trigger={<button className="dl-btn">מחקda</button>} modal nested>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              {" "}
              <h1>ביטל הרשמה לסדנא</h1>{" "}
            </div>
            <div className="content">
              <h3>האם אתה רוצה לבטל את הרישום?</h3>
              <br />

              <div className="cancel-confirm-btns">
                <button
                  className="cancel"
                  onClick={() => {
                    close();
                  }}
                >
                  ביטול
                </button>
                <NavLink to="/userdashboard/lectures">
                  <button className="confirm">אישור</button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default CourseCard;
