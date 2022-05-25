import React from "react";
import "./BlogExpand.css";
import { IoIosTime } from "react-icons/io";
import expand from "../../../assests/expand.svg";
import BlogImage from "../../../assests/BlogImage.svg";
import { NavLink } from "react-router-dom";

function UpdateExpand() {
  return (
    <div className="blogExp-component">
      <div className="topExp">
        <h2 className="page-titleExp">כותרת ראשית</h2>
        <div className="timeExp">
          <p>16-4-2022</p>{" "}
          <span>
            <IoIosTime />
          </span>
        </div>
      </div>
      <hr style={{ width: "80%" }}></hr>
      <div className="content-Exp">
        <img
          src={BlogImage}
          width="189"
          height="166"
          alt="blogImg"
          className="blogImg"
        />
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט
          דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ
          בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
          עמחליף לורם איפסום דולור סיט אמט, מוסן מנת.
        </p>
      </div>

      <NavLink to="/blogs">
        <div className="bExp-btn">
          <button className="expandExp">סגור חלון</button>
          <img src={expand} alt="expandExp" />
        </div>
      </NavLink>
    </div>
  );
}

export default UpdateExpand;
