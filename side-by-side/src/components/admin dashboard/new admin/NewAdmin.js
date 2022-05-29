import React,{useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import line from "./line.svg";
import "./NewAdmin.css";

import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";
import {
  addDoc,
  collection,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/firestore";

function NewAdmin() {
  const [admins, setAdmins] = useState([]);

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setAdmins({ ...admins, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "adminsList"), {
        adminFirstName: admins.adminFirstName,
        adminLastName: admins.adminLastName,
        adminPhonNumber: admins.adminPhonNumber,
        adminEmail: admins.adminEmail,
      });
      console.log("new admin added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="newAdmin-component">
      <h1>הוספת מנהל חדש</h1>
      <hr className="line"></hr>

      <div className="newAdmin-information">
        <div className="single-line-input">
          <div className="single-inpt">
            <label>שם פרטי</label>
            <input type="text" dir="rtl" />
          </div>
          <div className="single-inpt">
            <label>שם משפחה</label>
            <input type="text" dir="rtl" />
          </div>
        </div>

        <div className="single-line-input">
          <div className="single-inpt">
            <label>תאריך לידה</label>
            <input type="date" dir="rtl" />
          </div>
          <div className="single-inpt">
            <label>עיר </label>
            <select dir="rtl" name="city" id="city">
              <option value="city1">city1</option>
              <option value="city2">city2</option>
              <option value="city3">city3</option>
            </select>
          </div>
        </div>
        <div className="single-line-input">
          <div className="single-inpt">
            <label>מספר טלפון</label>
            <input type="text" dir="rtl" />
          </div>
          <div className="single-inpt">
            <label>מייל</label>
            <input type="text" dir="rtl" />
          </div>
        </div>
        <div className="single-line-input">
          <div className="single-inpt">
            <label>סיסמה</label>
            <input type="text" dir="rtl" />
          </div>
          <div className="single-inpt">
            <label>סיסמה בשינית</label>
            <input type="text" dir="rtl" />
          </div>
        </div>
        <div className="inpurapper newAD">
          <p>העלאת קבצים</p>
          <input
            type="file"
            onChange={(event) => {
              // setImageUpload(event.target.files[0]);
            }}
          />
        </div>

        <div className="newAdmin-btns">
          <NavLink to="/admindashboard/adminssection">
            <button className="cancel-btn">ביטול</button>
          </NavLink>
          <NavLink to="/admindashboard/adminssection">
            <button className="add-btn">הוסיף</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NewAdmin;
