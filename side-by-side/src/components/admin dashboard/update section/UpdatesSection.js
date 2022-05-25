import React from "react";
import "./UpdatesSection.css";
import SingleUpdate from "./single update/SingleUpdate";
import { Link } from "react-router-dom";
function UpdatesSection() {
  return (
    <div className="update-sec">
      <div className="updateSection-header">
        <Link to="/admindashboard/newupdate">
          <button className="newUpdate-button">פוסט </button>
        </Link>
        <h1>סדנאות פתוחות להרשמה</h1>
      </div>
      <div className="updatessection-section">
        <SingleUpdate />
        <SingleUpdate />
        <SingleUpdate />
        <SingleUpdate />
        <SingleUpdate />
      </div>
      
    </div>
  );
}
export default UpdatesSection;
