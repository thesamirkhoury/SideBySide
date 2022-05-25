import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { ReactComponent as BrandIcon } from "../../assests/Logo.svg";

function Navbar({ userLogged, adminLogged }) {
  return (
    <nav style={{ width: "100vw", background: "white", padding: "10px 0px" }}>
      <div className="div-parent">
        {userLogged || adminLogged ? (
          <div className="profile">
            <div className="desc">
              <p>םולש</p>
              <h4>ילארשי לארשי</h4>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sam_Worthington_2013.jpg/330px-Sam_Worthington_2013.jpg"
              width="50"
              height="50"
              alt="profileImg"
            />
          </div>
        ) : (
          <div className="div-child">
            <span>
              <FaInstagramSquare className="social-icons insta" />
              <IoLogoFacebook className="social-icons" />
            </span>

            <span>
              <ul>
                <li>
                  <a href="http://katef.org.il" target="_blank">
                    כתף לכתף
                  </a>
                </li>
                <li>
                  <NavLink to="/about">אודותינו</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">בלוג</NavLink>
                </li>
                <li>
                  <NavLink to="/updates">עדכונים</NavLink>
                </li>
                <li>
                  <NavLink to="/">בית</NavLink>
                </li>
              </ul>
            </span>
          </div>
        )}

        <span>
          <BrandIcon />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
