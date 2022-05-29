import React, { useState, useEffect } from "react";
import "./Courses.css";
import { NavLink } from "react-router-dom";
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


function Courses() {
  const [courses, setCourses] = useState([]);

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
  }, []);

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
    <div className="courses-component">
      <h1>סדנאות פתוחות להרשמה</h1>
      <div className="courses-section">
        {courses.map((singlecourse) => {
          if (!singlecourse.isRegistered) {
            return (
              <div className="course-card">
                <div className="single-detail">
                  <h1>שם סדנא</h1>
                  <p>{singlecourse.courseName} </p>
                </div>

                <div className="single-detail">
                  <h1>מיקום הסדנא</h1>
                  <p>{singlecourse.courseLocation}</p>
                </div>

                <div className="single-detail">
                  <h1>תאריך וזמן</h1>
                  <p> {unixTime(singlecourse.courseTime)}</p>
                </div>

                <div className="single-detail">
                  <h1>עלות השתתפות </h1>
                  <p>{singlecourse.courseCost} ₪</p>
                </div>
                <NavLink to="/userdashboard/lectures/registerlecture">
                  <button
                    onClick={() => {
                      let dataToupdate = doc(db, "courses", singlecourse.id);
                      updateDoc(dataToupdate, {
                        isRegistered: true,
                      })
                        .then((res) => {
                          console.log("Registered", res);
                          // setTrigger(true);
                        })
                        .catch((err) => {
                          console.log("ERROR", err);
                        });
                    }}
                    className="reg-btn"
                  >
                    הרשם
                  </button>
                </NavLink>
              </div>
            );
          }
        })}
      </div>
      <h1>סדנאות אליהם נרשמתם</h1>
      <div className="courses-section">
        {courses.map((singlecourse) => {
          if (singlecourse.isRegistered) {
            return (
              <div className="course-card">
                <div className="single-detail">
                  <h1>שם סדנא</h1>
                  <p>לורם איפשסום </p>
                </div>

                <div className="single-detail">
                  <h1>מיקום הסדנא</h1>
                  <p>לורם איפסום דולור סיט אמט</p>
                </div>

                <div className="single-detail">
                  <h1>תאריך וזמן</h1>
                  <p> 13:00 11.04.2022</p>
                </div>

                <div className="single-detail">
                  <h1>עלות השתתפות </h1>
                  <p>0.00 ₪</p>
                </div>

                <Popup
                  trigger={<button className="dl-btn">מחקda</button>}
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header">
                        {" "}
                        <h1>ביטל הרשמה לסדנא</h1>{" "}
                      </div>
                      <div className="content">
                        <h3>האם אתה רוצה לבטל את הרישום?</h3>
                        <br />

                        <div className="cancel-confirm-btns">
                          <button
                            className="cancel"
                            onClick={() => {
                              console.log("modal closed ");
                              close();
                            }}
                          >
                            ביטול
                          </button>
                          <button
                            onClick={() => {
                              let dataToupdate = doc(
                                db,
                                "courses",
                                singlecourse.id
                              );
                              deleteDoc(dataToupdate, {
                                isRegistered: true,
                              })
                                .then((res) => {
                                  console.log("deleted");
                                  // setTrigger(true);
                                  close();
                                })
                                .catch((err) => {
                                  console.log("ERROR", err);
                                });
                            }}
                            className="confirm"
                          >
                            אישור
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Courses;
