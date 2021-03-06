import React, { useState, useEffect } from "react";
import "./Setting.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/Firebase.config";

import { storage } from "../../../firebase/Firebase.config";
import { doc, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { where } from "firebase/firestore";
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
      password: userdetails.password,
    })
      .then((res) => {
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  };




  
  const handleSubmit1 = (e) => {
    e.preventDefault();
    forgotPassword(email)
      .then(() => {
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const { forgotPassword, setResetPass, resetPass } = useUserContext();

  const [email, setEmail] = React.useState("");

  return (
    <div className="user-settings">
      <h1>???????? ?????????? ??????????? ?????????? ??????????</h1>
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
                placeholder={userdetails.firstName}
              />
              <label for="firstName">:???? ??????????</label>
            </div>
            <div className="input-boxR">
              <input
                onChange={onChange1}
                id="firstName"
                type="text"
                name="firstName"
                placeholder={userdetails.lastName}
                dir="rtl"
              />
              <label for="lastName">???? ????????</label>
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
                <option  value="?????????????? ??????????????">?????????????? ??????????????</option>
                <option value="???? ????????-??????">???? ????????-??????</option>
                <option value="?????? ?????? ????????">?????? ?????? ????????</option>
                <option value="???????? ????????????">???????? ????????????</option>
              </select>
              <label for="city">: ?????? ???????????? </label>
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
              <label for="dateOfBirth">:?????????? ????????</label>
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
              <label for="email">:???????? ??????????</label>
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

              <label for="phoneNumber">:????????</label>
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
              <label for="children">:???????? ??????????</label>
            </div>

            <div className="input-boxR">
              <select
                onChange={onChange1}
                dir="rtl"
                name="maritalStatus"
                id="maritalStatus"
                placeholder={userdetails.maritalStatus}
              >
              <option value="????????.??">????????.??</option>
              <option value="????????????">????????????</option>
              <option value="????????.??">????????.??</option>
              <option value="??????">??????</option>
              </select>

              <label for="maritalStatus">:?????? ????????????</label>
            </div>
          </div>

          <div className="saveInfoBtn">
            <button onClick={handleSubmit} className="saveInfoBtn-1R">
              ????????
            </button>
          </div>
        </div>
      </div>

      <div className="update-password">
        <div className="password-container">
          <h1>???????? ?????????? ??????????? ?????? ?????? ????????</h1>

          <form onSubmit={handleSubmit1}>
            <div className="input-reset">
              <label>:????????</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                dir="rtl"
                className="input-pass"
              />
            </div>


            <button
              type="submit"
              className="resetPassButton"
            >
              ???????? ???? ???? ????????????{" "}
            </button>

          </form>
            {resetPass}

         

       
        </div>
      </div>
    </div>
  );
}

export default Settings;
