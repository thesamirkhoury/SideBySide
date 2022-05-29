import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import "./updatecard.css";
function UpdateCard({updateTopic,updateDescription,updateTime}) {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-header">
          <strong className="strong-1">{updateTopic}</strong>
          <p className="date-para">
           {updateTime}
            <AiFillClockCircle
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "2px",
                color: "#595A5B",
              }}
            />
          </p>
        </div>
        <p className="main-para">
        {updateDescription} </p>
      </div>
      <Link state={{updateTime, updateTopic, updateDescription}} to="/updates/expandupdate">
        <button id="btn-1">
          הרחיב תצוגה <CgArrowsExpandLeft style={{ marginLeft: "6px" }} />
        </button>
      </Link>
    </div>
  );
}

export default UpdateCard;
