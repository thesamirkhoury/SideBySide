import React from "react";
import "./BlogExpand.css";
import { IoIosTime } from "react-icons/io";
import expand from "../../../assests/expand.svg";
import BlogImage from "../../../assests/BlogImage.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function UpdateExpand() {
  const location = useLocation();

  return (
    <div className="blogExp-component">
      <div className="topExp">
        <h2 className="page-titleExp">{location.state.blogTopic}</h2>
        <div className="timeExp">
          <p>16-4-2022</p>{" "}
          <span>
            <IoIosTime />
          </span>
        </div>
      </div>
      <hr style={{ width: "80%" }}></hr>
      <div className="content-Exp">
        <br/>
        <img
          src={location.state?.blogPhoto}
          width="440"
          height="266"
          alt="blogImg"
          className="blogImg"
        />
        <p>
        {location.state.blogDescription}
        </p>
      </div>
      <br/>
      <NavLink to="/blogs">
        <div className="bExp-btn">
          <button className="expandExp">לסגירת חלון</button>
          <img src={expand} alt="expandExp" />
        </div>
      </NavLink>
    </div>
  );
}

export default UpdateExpand;
