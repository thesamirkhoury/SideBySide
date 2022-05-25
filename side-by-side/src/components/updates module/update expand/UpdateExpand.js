import React from "react";
import "./UpdateExpand.css";
import { IoIosTime } from "react-icons/io";
import expand from "../../../assests/expand.svg";
import { NavLink } from "react-router-dom";
function UpdateExpand() {
  return (
    <div className="updateEx-component">
      <div className="top">
        <h2 className="page-title">כותרת ראשית</h2>
        <div className="time">
          <p>16-4-2022</p>{" "}
          <span>
            <IoIosTime />
          </span>
        </div>
      </div>
      <hr style={{ width: "80%" }}></hr>
      <div className="content-Expand">
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט
          דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ
          בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
          עמחליף לורם איפסום דולור סיט אמט, מוסן מנת.
        </p>
      </div>

      <NavLink to="/updates">
        <div className="expand-btn">
          <button className="expand">סגור חלון</button>
          <img src={expand} alt="expand" />
        </div>
      </NavLink>
    </div>
  );
}

export default UpdateExpand;
