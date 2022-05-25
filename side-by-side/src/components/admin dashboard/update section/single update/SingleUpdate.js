import React from "react";
import { Link } from "react-router-dom";
import "./SingleUpdate.css";
function SingleUpdate() {
  return (
    <div className="updateComponent">
      <div className="update-card">
        <div className="single-update-detail">
          <h1 style={{ marginBottom: "-13px" }}>נושא</h1>
          <p>לורם איפסום </p>
        </div>

        <div className="single-detail">
          <h1>תוכן</h1>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק
            סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק
            יהול.
          </p>
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
