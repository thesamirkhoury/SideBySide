import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NewLecture.css";

import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

import { useLocation } from "react-router-dom";

function EditeLecture() {
  const location = useLocation();

  const [courses, setCourses] = React.useState({
    courseName: location.state.courseName,
    courseLocation: location.state.courseLocation,
    courseTime: location.state.courseTime,
    courseCost: location.state.courseCost,
  });

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setCourses({ ...courses, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const docRef = updateDoc(doc(db, "courses", location.state.id), {
      courseName: courses.courseName,
      courseLocation: courses.courseLocation,
      courseTime: courses.courseTime,
      courseCost: courses.courseCost,
    })
      .then((res) => {

        console.log("updated successfully..!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="newLectur-component">
      <div className="content-newLect">
        <h1>הוספת סדנא חדשה</h1>

        <p>שם ההטבה</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
          name="courseName"
          onChange={onChange2}
          placeholder={courses.courseName}
        />

        <p>שם עסק</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
          name="courseLocation"
          onChange={onChange2}
          placeholder={courses.courseLocation}
        />

        <p>עיר</p>
        <input
          type="date"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
          name="courseTime"
          onChange={onChange2}
          placeholder={courses.courseTime}
        />

        <p>תוקף</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
          name="courseCost"
          onChange={onChange2}
          placeholder={courses.courseCost}
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

export default EditeLecture;
