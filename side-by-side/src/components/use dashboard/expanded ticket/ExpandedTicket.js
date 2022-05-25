import React from "react";
import "./ExpandedTicket.css";
import { IoIosTime } from "react-icons/io";
import { NavLink } from "react-router-dom";
function ExpandedTicket() {
  return (
    <div className="expandedticket-component">
      <div className="expand-header">
        <div className="single-line">
          <h2>: מספר פניה</h2>
          <p>12345</p>
        </div>
        <div className="single-line">
          <h2>: נושא הפניה </h2>
          <p>לורם איפסום דולור סיט אמט</p>
        </div>
        <div className="single-line">
          <h2>: סטטוס</h2>
          <p className="status-exp">סגורה</p>
        </div>
        <div className="single-line">
          <div className="timeExp expandTime">
            <p>16-4-2022</p>{" "}
            <span>
              <IoIosTime />
            </span>
          </div>
        </div>
        <hr className="horizontal-rowCan expan" />

        <div className="description-expand">
          <div className="sng-desc">
            <h2>: מלל הפניה</h2>
            <p>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק
              סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק
              יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום סילקוף,
              מרגשי ומרגשח. עמחליף לורם איפסום דולור סיט אמט, מוסן מנת.
            </p>
          </div>
          <div className="sng-desc">
            <h2>: תשובה</h2>
            <p>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק
              סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק
              יהול, לכנוץ בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום סילקוף,
              מרגשי ומרגשח. עמחליף לורם איפסום דולור סיט אמט, מוסן מנת.
            </p>
          </div>
        </div>
        <NavLink to="/userdashboard/tickets">
          <button className="closeExp-btn">סגור</button>
        </NavLink>
      </div>
    </div>
  );
}

export default ExpandedTicket;
