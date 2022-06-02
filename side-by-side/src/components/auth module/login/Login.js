import "./Login.css";
import { auth, authProvider } from "../../../firebase/Firebase.config";

import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/Firebase.config";
import { useUserContext } from "../../context/UseContext";
import { async } from "@firebase/util";
import { Nav } from "react-bootstrap";

function Login() {
  const { signInUser, userLogged, error } = useUserContext();
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });
  const onChange1 = (e) => {
    // e.defaultPrevent();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [errorMsg, setErrorMsg] = useState(
    "Wrong Credentials. Please try again."
  );

  const [triggr, setTringer] = useState(false);
  const [link, setLink] = useState("");

  const handleLogin = () => {
    signInUser(user.email, user.password);
    if (error) {
      setLink("/login");
    } else {
      setLink("/userdashboard/lectures");
    }
  };

   useEffect(()=>{

   },[signInUser, link, error])


  return (
    <div className="Login-container">
      <h1 className="title-txt">התחבר לאזור האישי</h1>

      <div className="inputs">
        <div className="singleInput">
          <label for="email">:מייל</label>
          <input
            name="email"
            onChange={(e) => onChange1(e)}
            type="email"
            dir="rtl"
            id="email"
          />
        </div>
        <div className="singleInput">
          <label for="password">:סיסמה</label>
          <input
            name="password"
            onChange={(e) => onChange1(e)}
            type="password"
            dir="rtl"
            id="password"
          />
        </div>
      </div>
      <div className="btns">
        
        <Link to={`${!userLogged ? "/login" : '/userdashbaord/lectures'}`}>
          <button type="submit" onClick={handleLogin} className="btn-1">
            כניסה לאזור האישי
          </button>
        </Link>

        <NavLink to="/resetpassword">
          <button className="btn-2">שכחת את הסיסמה</button>
        </NavLink>
      </div>

      {error ? (
        <p style={{ width: "30vw", padding: "10px" }}>Credentials incorrect!</p>
      ) : (
        ""
      )}
    </div>
  );
}
export default Login;
