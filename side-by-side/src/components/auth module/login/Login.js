import "./Login.css";
import { auth, authProvider } from "../../../firebase/Firebase.config";

import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/Firebase.config";
import { useUserContext } from "../../context/UseContext";
import { async } from "@firebase/util";

function Login() {
  const { signInUser, userLogged,setUserLogged, wrongCreds } = useUserContext();
  const [details, setDetails] = useState([]);
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
  const handleLoggedin = async () => {
    await signInUser(user.email, user.password);
    if (!userLogged) {
       await setTringer(true);
    } else {
      // setUserLogged(true);
      // await setTringer(false);
    }
  };

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
        {!triggr ? (
          <button
            // onClick={() => {
            //   signInUser(user.email, user.password);
            // }}
            onClick={handleLoggedin}
            className="btn-1"
          >
            כניסה לאזור האישי
          </button>
        ) : (
          <Link to="/userdashboard/lectures">
            <button
              onClick={handleLoggedin}
              className="btn-1"
            >
              כניסה לאזור האישי
            </button>
          </Link>
        )}

        <Link to="/forgotpassword">
          <button className="btn-2">שכחת את הסיסמה</button>
        </Link>
      </div>
      {triggr ? (
        <p style={{ width: "30vw", padding: "10px" }}>{errorMsg}</p>
      ) : (
        ""
      )}
    </div>
  );
}
export default Login;
