import React from "react";
import { Link } from "react-router-dom";
import "./NewUpdate.css";

function NewUpdate() {
  return (
    <div className="newUpdate-component">
      <h1>הוספת עדכון חדש</h1>

      <p>כותרת</p>
      <input type="text" dir="rtl" className="input-newT" />

      <p>תוכן</p>
      <textarea className="text-area" dir="rtl" cols="50" rows="10" />

      <div className="btns-newP">
        <Link to="/admindashboard/updates">
          <button className="newP-btn-cancel">ביטול</button>
        </Link>
        <Link to="/admindashboard/updates">
          <button className="newP-btn">פרסם</button>
        </Link>
      </div>
    </div>
  );
}

export default NewUpdate;
