import React, { useState, useEffect } from "react";
import "./Setting.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/Firebase.config";
import { storage } from "../../../firebase/Firebase.config";
import { doc, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { where } from "firebase/firestore";
import PasswordReset from "../../auth module/password reset/PasswordReset";
import {useUserContext}  from '../../context/UseContext'

function Settings() {
  const [userdetails, setUserDetails] = useState([]);
  const [currentID, setcurrentID] = useState();

  const loggeInUserDate = async () => {
    const id = JSON.parse(localStorage.getItem("currentUser"));
    const q = query(collection(db, "admin"), where("email", "==", id.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setcurrentID(doc.id);
      const uData = doc.data();
      setUserDetails(uData);
    });
  };

  useEffect(() => {
    loggeInUserDate();
  }, []);

  const onChange1 = (e) => {
    setUserDetails({ ...userdetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const cId = JSON.parse(localStorage.getItem("currentUser"));
    let dataToupdate = doc(db, "admin", currentID);
    updateDoc(dataToupdate, {
      firstName: userdetails.firstName,
      lastName: userdetails.lastName,
      city: userdetails.city,
      dateOfBirth: userdetails.dateOfBirth,
      email: userdetails.email,
      phoneNumber: userdetails.phoneNumber,
      maritalStatus: userdetails.maritalStatus,
      password: userdetails.password,
      numberOfChildren: userdetails.numberOfChildren,
      isApproved: true,
    })
      .then((res) => {
        console.log("admin details updated..", res);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  const handleSubmit1 = (e) => {
    console.log(email);
    e.preventDefault();
    forgotPassword(email)
      .then(() => {
        // setNotify(true);
        // setResetPass("password reset link has been sent to your email!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setResetPass( "Sorry. Wrong email!");
      });
  };

  const { forgotPassword, setResetPass, resetPass } = useUserContext();

  const [email, setEmail] = React.useState("");

  return (
    <div className="user-settings">
      <h1>רוצה לעדכן פרטים? תרגיש חופשי</h1>

      <div className="update-information">
        <div className="updateInfo-container">
          <div className="singleLine-inputs">
            <div className="input-boxR">
              <input
                onChange={onChange1}
                id="lastName"
                name="lastName"
                dir="rtl"
                type="text"
                placeholder={userdetails.lastName}
              />
              <label for="firstName">:שם משפחה</label>
            </div>
            <div className="input-boxR">
              <input
                onChange={onChange1}
                id="firstName"
                type="text"
                name="firstName"
                placeholder={userdetails.firstName}
                dir="rtl"
              />
              <label for="lastName">שם פרטי</label>
            </div>
          </div>

          <div className="singleLine-inputs">
            <div className="input-boxR">
              <select
                onChange={onChange1}
                dir="rtl"
                placeholder={userdetails.city}
                name="city"
                id="city"
              >
                <option value="city1">city1</option>
                <option value="city2">city2</option>
                <option value="city3">city3</option>
              </select>
              <label for="city">: עיר מגורים </label>
            </div>

            <div className="input-boxR">
              <input
                onChange={onChange1}
                name="dateOfBirth"
                id="dateOfBirth"
                type="date"
                dir="rtl"
                placeholder={userdetails.dateOfBirth}
              />
              <label for="dateOfBirth">:תאריך לידה</label>
            </div>
          </div>

          <div className="singleLine-inputs">
            <div className="input-boxR">
              <input
                onChange={onChange1}
                name="phoneNumber"
                id="phoneNumber"
                type="number"
                dir="rtl"
                placeholder={userdetails.phoneNumber}
              />
              <label for="email">:מספר טלפון</label>
            </div>
            <div className="input-boxR">
              <input
                onChange={onChange1}
                name="email"
                id="email"
                type="email"
                dir="rtl"
                placeholder={userdetails.email}
              />

              <label for="phoneNumber">:מייל</label>
            </div>
          </div>
          <div className="singleLine-inputs">
            <div className="input-boxR">
              <input
                onChange={onChange1}
                id="children"
                name="numberOfChildren"
                dir="rtl"
                type="number"
                placeholder={userdetails.numberOfChildren}
              />
              <label for="children">:מספר ילדים</label>
            </div>

            <div className="input-boxR">
              <select
                onChange={onChange1}
                dir="rtl"
                name="maritalStatus"
                id="maritalStatus"
                placeholder={userdetails.maritalStatus}
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>

              <label for="maritalStatus">:סיסמה</label>
            </div>
          </div>

          <div className="saveInfoBtn">
            <button onClick={handleSubmit} className="saveInfoBtn-1R">
              שמור
            </button>
          </div>
        </div>
      </div>

      <div className="update-password">
        <div className="password-container">
          <h1>רוצה לשנות סיסמה? בוא נצא לדרך</h1>
          <form onSubmit={handleSubmit1}>
            <div className="input-reset">
              <label>:מייל</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                dir="rtl"
                className="input-pass"
              />
            </div>

            <button
              // onClick={ handleSubmit}
              type="submit"
              className="resetPassButton"
            >
              אפסו לי את הסיסמה{" "}
            </button>
          </form>
          {resetPass}
        </div>
      </div>
    </div>
  );
}

export default Settings;
