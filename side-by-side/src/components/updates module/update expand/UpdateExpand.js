import React from "react";
import "./UpdateExpand.css";
import { IoIosTime } from "react-icons/io";
import expand from "../../../assests/expand.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";



function UpdateExpand() {

  const location = useLocation();

  return (
    <div className="updateEx-component">
      <div className="top">
        <h2 className="page-title">{location.state.updateTopic}</h2>
        <div className="time">
          <p>{location.state.updateTime}</p>{" "}
          <span>
            <IoIosTime />
          </span>
        </div>
      </div>
      <hr style={{ width: "80%" }}></hr>
      <div className="content-Expand">
        <p>
          {location.state.updateDescription}
        </p>
      </div>

      <NavLink to="/updates">
        <div className="expand-btn">
          <button className="expand">לסגירת חלון</button>
          <img src={expand} alt="expand" />
        </div>
      </NavLink>
    </div>
  );
}

export default UpdateExpand;
