import React from "react";
import { Link } from "react-router-dom";
import "./SingleUpdate.css";
function SingleUpdate({ title, content, id }) {
  
  return (
    <div className="updateComponent">
      <div className="update-card">
        <div className="single-update-detail">
          <h1 style={{ marginBottom: "-13px" }}>נושא</h1>
          <p>{title}</p>
        </div>

        <div className="single-detail">
          <h1>תוכן</h1>
          <p>{content}</p>
        </div>

        <div className="buttons-div">
          <button className="del-btn">מחק</button>
          <button className="edit-btn">עדכן</button>
        </div>
      </div>
    </div>
  );
}

export default SingleUpdate;
