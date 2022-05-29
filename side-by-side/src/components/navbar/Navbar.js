import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { ReactComponent as BrandIcon } from "../../assests/Logo.svg";
import {useUserContext} from '../context/UseContext'

function Navbar() {
const {userLogged,setUserLogged,adminLogged,setAdminLogged}  = useUserContext();

  // console.log("USER LOGGED",userLogged)

  return (
    <nav style={{ width: "100vw", background: "white", padding: "10px 0px" }}>
      <div className="div-parent">
        {userLogged || adminLogged ? (
          <div className="profile">
            <div className="desc">
              <p></p>
              <h4>ילארשי לארשי</h4>
            </div>
            <img
              src="https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg"
              width="50"
              height="50"
              alt="profileImg"
            />
          </div>
        ) : (
          <div className="div-child">
            <span>
              <a target='_blank' href="https://www.instagram.com/">
                <FaInstagramSquare className="social-icons insta" />
              </a>
              <a target='_blank' href="https://www.facebook.com/">
                <IoLogoFacebook className="social-icons" />
              </a>
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
