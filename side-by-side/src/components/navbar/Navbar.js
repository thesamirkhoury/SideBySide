import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { ReactComponent as BrandIcon } from "../../assests/Logo.svg";
import { useUserContext } from "../context/UseContext";

import {
  collection,
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../firebase/Firebase.config";

function Navbar() {
  const { userLogged, setUserLogged, adminLogged, setAdminLogged } =
    useUserContext();

  const [loggedUserDetails, setLoggedUserDetails] = React.useState([]);
  const userData = async () => {
    const q = query(collection(db, "admin"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const cUser = JSON.parse(localStorage.getItem("currentUser"));
    for (var i = 0; i <= data?.length; i++) {
      if (data[i]?.email == cUser?.email) {
        console.log("ADmin data at navbar", data[i]);
        setLoggedUserDetails(data[i]);

        break;
      }
    }
  };

  React.useEffect(() => {
    userData();
  }, [userLogged, adminLogged]);

  const phot = loggedUserDetails?.photoURL;
  const imgeRL = phot?.imageUrl;

  console.log("final: ", imgeRL);

  return (
    <nav style={{ width: "100vw", background: "white", padding: "10px 0px" }}>
      <div className="div-parent">
        {userLogged || adminLogged ? (
          <div className="profile">
            <div className="desc">
              <p>שלום</p>

              <h4>
                <span>{loggedUserDetails?.firstName}</span>
                <span>{loggedUserDetails?.lastName}</span>
              </h4>
            </div>
            <img
              src={imgeRL}
              width="50"
              height="50"
              className={`${!imgeRL ? "grayBackeground" : ""}`}
            />
          </div>
        ) : (
          <div className="div-child">
            <span>
              <a target="_blank" href="https://www.instagram.com/">
                <FaInstagramSquare className="social-icons insta" />
              </a>
              <a target="_blank" href="https://www.facebook.com/">
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
