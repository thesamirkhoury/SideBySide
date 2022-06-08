import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NewLecture.css";

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

function NewLecture() {
  const [courses, setCourses] = useState([]);

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setCourses({ ...courses, [e.target.name]: e.target.value });
  };

  const [newLec, setNewLect] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const registeredUser = [];
    try {
      const docRef = await addDoc(collection(db, "courses"), {
        courseName: courses.courseName,
        courseLocation: courses.courseLocation,
        courseTime: courses.courseTime,
        courseCost: courses.courseCost,
        registeredUsers: registeredUser,
        isRegistered: false,
      });

      console.log("new lecture written with ID: ", docRef.id);
      setNewLect(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="newLectur-component">
      <form onSubmit={handleSubmit}>
        <div className="content-newLect">
          <h1>הוספת סדנה חדשה</h1>

          <p>שם הסדנה</p>
          <input
            type="text"
            className="input-newLectur"
            dir="rtl"
            lang="Hebrew"
            name="courseName"
            onChange={onChange2}
            required
          />

          <p>מיקום</p>
          <input
            type="text"
            className="input-newLectur"
            dir="rtl"
            lang="Hebrew"
            name="courseLocation"
            onChange={onChange2}
            required
          />

          <p>תאריך וזמן</p>
          <input
            type="date"
            className="input-newLectur"
            dir="rtl"
            lang="Hebrew"
            name="courseTime"
            onChange={onChange2}
            required
          />

          <p>עלות השתתפות</p>
          <input
            type="text"
            className="input-newLectur"
            dir="rtl"
            lang="Hebrew"
            name="courseCost"
            onChange={onChange2}
            required
          />

          <div className="btns-newLec">
            <NavLink to="/admindashboard/lecturessection">
              <button className="newLec-btn-cancel">ביטול</button>
            </NavLink>
            <button className="newLec-btn">פרסם</button>
          </div>
          {newLec ? (
            <span>
            סדנה חדשה  התפרסמה בהצלחה
            <br/>

              <NavLink to="/admindashboard/lecturessection">
              <b><u style={{marginLeft:'8px'}}>חזור לדף הסדנאות</u></b>
              </NavLink>
            </span>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export default NewLecture;
