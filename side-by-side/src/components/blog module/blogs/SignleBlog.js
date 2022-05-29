import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import blogImage from "../../../assests/BlogImage2.svg";
import "./SignleBlog.css";
function SingleBlog({blogTopic,blogDescription,blogTime}) {
  return (
    <div className="card-containerB">
      <div className="card-bodyB">
        <img src={blogImage} alt="blogImage" className="blogImgB" />

        <div className="card-headerB">
          <strong className="strong-1B">{blogTopic}</strong>
          <p className="date-paraB">
            {blogTime}
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
      </div>
    
      <Link state={{blogTopic,blogDescription,blogTime}}
      
      to="/blogs/expandedblog">
        <button id="btn-1B">
          {" "}
          קראה עוד <CgArrowsExpandLeft style={{ marginLeft: "6px" }} />
        </button>
      </Link>
    </div>
  );
}

export default SingleBlog;
