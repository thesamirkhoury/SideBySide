import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
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

import { v4 } from "uuid";

function Register() {
  const [details, setDetails] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    city: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    maritalStatus: "",
    password: "",
    numberOfChildren: 0,
    isApproved: false,
    isAdmin: false,
  });
  const onChange1 = (e) => {
    // e.defaultPrevent();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  const [regConfirm, setRegConfirm] = useState(false);

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "admin"), {
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        dateOfBirth: user.dateOfBirth,
        email: user.email,
        phoneNumber: user.phoneNumber,
        maritalStatus: user.maritalStatus,
        password: user.password,
        numberOfChildren: user.numberOfChildren,
        isApproved: false,
        isAdmin: false
      });
      console.log("Document written with ID: ", docRef.id);
      uploadFile();
      setRegConfirm(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `images/${imageUpload.name + user.id + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          console.log(imageUrls);
        });
      });
    });
  }, []);

  return (
    <div className="register-container">
      <h1 className="title-txtR">
        רוצים להצטרף לכל הטוב הזה? <br></br>מלאו את הפרטים וניצור אתכם קשר בהקדם
      </h1>
      <div className="dataInput">
        <div className="singleLine-inputs">
          <div className="input-boxR">
            <input
              onChange={onChange1}
              id="lastName"
              name="lastName"
              dir="rtl"
              type="text"
            />
            <label for="firstName">:שם משפחה</label>
          </div>
          <div className="input-boxR">
            <input
              onChange={onChange1}
              id="firstName"
              type="text"
              name="firstName"
              dir="rtl"
            />
            <label for="lastName">שם פרטי</label>
          </div>
        </div>

        <div className="singleLine-inputs">
          <div className="input-boxR">
            <select onChange={onChange1} dir="rtl" name="city" id="city">
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
            />
            <label for="children">:מספר ילדים</label>
          </div>

          <div className="input-boxR">
            <select
              onChange={onChange1}
              dir="rtl"
              name="maritalStatus"
              id="maritalStatus"
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>

            <label for="maritalStatus">:סיסמה</label>
          </div>
        </div>
        <div className="singleLine-inputs">
          <div className="input-boxR">
            <input
              onChange={onChange1}
              id="confirmPassword"
              type="password"
              dir="rtl"
            />
            <label for="confirmPassword">:סיסמה בשינית:</label>
          </div>

          <div className="input-boxR">
            <input
              onChange={onChange1}
              name="password"
              id="password"
              type="password"
              dir="rtl"
            />
            <label for="password">:סיסמה </label>
          </div>
        </div>
      </div>

      <div className="inpurapper">
        <p>העלה תמונה</p>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
      </div>

      <NavLink to="/userregister">
        <div className="btnsR">
          <button type="submit" onClick={handleSubmit} className="btn-1R">
            כניסה לאזור האישי
          </button>
        </div>
      </NavLink>
      {regConfirm ? (
        <h2>
          Regisrede successfully to the waiting list!{" "}
          <a href="/login">go to login page</a>
        </h2>
      ) : (
        ""
      )}
    </div>
  );
}

export default Register;
