import React, { useState, useEffect } from "react";
import "./Setting.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/Firebase.config";

import { storage } from "../../../firebase/Firebase.config";
import { doc, setDoc, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { async } from "@firebase/util";

function Settings() {

  const onChange1 = (e) => {
    // e.defaultPrevent();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [details, setDetails] = useState([]);

  const userData = async () => {
    const q = query(collection(db, "admin"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDetails(data);
    console.log("All users", data);
  };

  useEffect(() => {
    userData();
  }, []);

  // const [currentUsr, setCurrentUser] = useState({});

  // const curntUser = async () => {
  //   const curntUsrId = JSON.parse(localStorage.getItem("currentUser"));   
  //   await details.map((detail) => {
  //     if(detail.email === curntUsrId.email){
  //        setCurrentUser(()=>detail)
  //     }
  //     // console.log(detail.email)   
  //   });
  //   console.log(currentUsr)
  // };

  // curntUser();



  const [user, setUser] = useState({
    firstName:details.firstName,
    lastName: details.lastName,
    city: details.city,
    dateOfBirth: details.dateOfBirth,
    email: details.email,
    phoneNumber: details.phoneNumber,
    maritalStatus: details.maritalStatus,
    password: "",
    numberOfChildren: details.numberOfChildren,
    isApproved: false,
  });

  return (
    <div className="user-settings">
      <h1>רוצה לעדכן פרטים? תרגיש חופשי</h1>

      <div className="update-information">
        <div className="updateInfo-container">
          <div className="singleLine-input">
            <div className="input-box">
              <input type="text" dir="rtl" value={details.firstName}/>
              <label>שם משפחה</label>
            </div>
            <div className="input-box">
              <input id="name" value={details.lastName} type="text" dir="rtl" />
              <label for="name" >שם פרטי</label>
            </div>
          </div>
          <div className="singleLine-input">
            <div className="input-box">
              <input type="text" dir="rtl" />
              <label>עיר מגורים</label>
            </div>
            <div className="input-box">
              <input id="name" type="text" dir="rtl" />
              <label for="name">תאריך לידה </label>
            </div>
          </div>
          <div className="singleLine-input">
            <div className="input-box">
              <input type="text" dir="rtl" />
              <label>מספר טלפון</label>
            </div>
            <div className="input-box">
              <input id="name" type="text" dir="rtl" />
              <label for="name">מייל</label>
            </div>
          </div>
          <div className="singleLine-input">
            <div className="input-box">
              <input type="text" dir="rtl" />
              <label>מספר ילדים</label>
            </div>
            <div className="input-box">
              <input id="name" type="text" dir="rtl" />
              <label for="name">מצב משפחתי</label>
            </div>
          </div>

          <div className="saveInfoBtn">
            <button className="saveInfoBtn-1R">שמור</button>
          </div>
        </div>
      </div>

      <div className="update-password">
        <div className="password-container">
          <h1>רוצה לשנות סיסמה? בוא נצא לדרך</h1>

          <div className="singleLine-inputPassword">
            <div className="input-boxPassword">
              <input id="name" type="password" dir="rtl" />
              <label for="name">הסיסמה הישנה</label>
            </div>
          </div>
          <div className="singleLine-inputPassword">
            <div className="input-boxPassword">
              <input id="name" type="password" dir="rtl" />
              <label for="name">הסיסמה החדשה</label>
            </div>
          </div>
          <div className="singleLine-inputPassword">
            <div className="input-boxPassword">
              <input id="name" type="password" dir="rtl" />
              <label for="name">הסיסמה החדשה שוב</label>
            </div>
          </div>

          <div className="passSave">
            <button className="passSaveBtn">שמור</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
