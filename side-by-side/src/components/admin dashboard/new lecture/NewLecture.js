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
  const handleSubmit = async () => {
    const registeredUser =[]
    try {
      const docRef = await addDoc(collection(db, "courses"), {
        courseName: courses.courseName,
        courseLocation: courses.courseLocation,
        courseTime: courses.courseTime,
        courseCost: courses.courseCost,
        registeredUsers: registeredUser,
        isRegistered: false
      });

      console.log("new lecture written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="newLectur-component">
      <div className="content-newLect">
        <h1>הוספת סדנא חדשה</h1>

        <p>שם הסדנא</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
          name="courseName"
          onChange={onChange2}
        />

        <p>מיקום</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
          name="courseLocation"
          onChange={onChange2}
        />

        <p>תאריך וזמן</p>
        <input
          type="date"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
          name="courseTime"
          onChange={onChange2}
        />

        <p>עלות השתתפות</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
          name="courseCost"
          onChange={onChange2}
        />

        {/* <p>קוד קופון</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
        /> */}

        <div className="btns-newLec">
          <NavLink to="/admindashboard/lecturessection">
            <button className="newLec-btn-cancel">ביטול</button>
          </NavLink>
          <NavLink to="/admindashboard/lecturessection">
            <button onClick={handleSubmit} className="newLec-btn">
              פרסם
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NewLecture;
