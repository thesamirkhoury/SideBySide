import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./LecturesSection.css";
import SingleLecture from "./single lecture/SingleLecture";

import {
  collection,
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/Firebase.config";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function LecturesSection() {
  const [courses, setCourses] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const AllCourses = async () => {
    const q = query(collection(db, "courses"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCourses(data);
    // console.log("All courses", data);
  };

  useEffect(() => {
    AllCourses();
  }, [trigger]);

  function unixTime(unixtime) {
    var u = new Date(unixtime * 1000);
    return (
      u.getUTCFullYear() +
      "-" +
      ("0" + u.getUTCMonth()).slice(-2) +
      "-" +
      ("0" + u.getUTCDate()).slice(-2) +
      " " +
      ("0" + u.getUTCHours()).slice(-2) +
      ":" +
      ("0" + u.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + u.getUTCSeconds()).slice(-2) +
      "." +
      (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5)
    );
  }

  return (
    <div className="lecture-section">
      <div className="lectureSection-header">
        <NavLink to="/admindashboard/newlecture">
          <button className="newPost-button">סדנא חדשה</button>
        </NavLink>
        <h1>סדנאות קיימות</h1>
      </div>

      <div className="lectures-section">
        {courses.map((course) => {
          return (
            <div className="lecture-card">
              <div className="single-lecture-detail">
                <h1 style={{ marginBottom: "-13px" }}>שם סדנא</h1>
                <p>{course.courseName} </p>
              </div>

              <div className="singleL-detail">
                <h1>מיקום הסדנא</h1>
                <p>{course.courseLocation}</p>
              </div>
              <div className="singleL-detail">
                <h1>תאריך וזמן</h1>
                <p> {unixTime(course.courseTime)}</p>
              </div>
              <div className="singleL-detail">
                <h1>עלות השתתפות</h1>
                <p>{course.courseCost} ₪</p>
              </div>

              <div className="buttonsL-div">
                <button
                  onClick={() => {
                    let dataToupdate = doc(db, "courses", course.id);
                    deleteDoc(dataToupdate)
                      .then((res) => {
                        console.log("deleted", res);
                        setTrigger(true);
                      })
                      .catch((err) => {
                        console.log("ERROR", err);
                      });
                  }}
                  className="delL-btn"
                >
                  מחק
                </button>
                <NavLink to="/admindashboard/registeredusers">
                  <button className="regL-btn">נרשמים</button>
                </NavLink>

                <Link to="/admindashboard/editlecture" state={course}>
                  <button className="editL-btn">עדכן</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LecturesSection;
