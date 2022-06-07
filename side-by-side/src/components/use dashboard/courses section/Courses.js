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
  const [trigger, setTrigger] = useState(false);

  const AllCourses = async () => {
    const q = query(collection(db, "courses"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCourses(data);
  };

  console.log("All coursesddd", courses);

  const [users, setUsers] = useState([]);

  const AllUsers = async () => {
    const q = query(collection(db, "admin"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const userdata = data.filter((dat) => dat.email == cUser.email);
    //  console.log("USERDATA",userdata)

    setUsers(userdata);
  };
  // console.log("userssss: ", users)

  useEffect(() => {
    AllCourses();
    AllUsers();
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
      (u.getUTCMilliseconds() / 1000).toFixed(0).slice(2, 5)
    );
  }
  const cUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log("cUser: ", cUser)

  return (
    <div className="courses-component">
      <h1>סדנאות פתוחות להרשמה</h1>
      <div className="courses-section">
        {courses.map((singlecourse) => {
          // console.log("Cousr;;;;;;: ", singlecourse?.registeredUsers);
          if (
            singlecourse.registeredUsers?.filter(
              (dat) => dat.email == cUser.email
            ).length == 0 ||
            singlecourse.isRegistered == false
          ) {
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
                  <p> {singlecourse.courseTime}</p>
                </div>

                <div className="single-detail">
                  <h1>עלות השתתפות </h1>
                  <p>{singlecourse.courseCost} ₪</p>
                </div>
                {/* <NavLink to="/userdashboard/lectures/registerlecture"> */}
                <button
                  onClick={() => {
                    let dataToupdate = doc(db, "courses", singlecourse.id);
                    updateDoc(dataToupdate, {
                      registeredUsers: [
                        ...singlecourse.registeredUsers,
                        ...users,
                      ],
                      isRegistered: true,
                    })
                      .then((res) => {
                        console.log("Registered", res);

                        setTrigger(true);
                      })
                      .catch((err) => {
                        console.log("ERROR", err);
                      });
                  }}
                  className="reg-btn"
                >
                  הרשם
                </button>
                {/* </NavLink> */}
              </div>
            );
          }
        })}
      </div>
      <h1>סדנאות אליהם נרשמתם</h1>
      <div className="courses-section">
        {courses.map((singlecourse) => {
          if (
            singlecourse.registeredUsers?.filter(
              (dat) => dat.email == cUser.email
            ).length >= 1 &&
            singlecourse.isRegistered == true
          ) {
            return (
              <div className="course-card">
                <div className="single-detail">
                  <h1>שם סדנא</h1>
                  <p>{singlecourse.courseName}</p>
                </div>

                <div className="single-detail">
                  <h1>מיקום הסדנא</h1>
                  <p>{singlecourse.courseLocation}</p>
                </div>

                <div className="single-detail">
                  <h1>תאריך וזמן</h1>
                  <p> {singlecourse.courseTime}</p>
                </div>

                <div className="single-detail">
                  <h1>עלות השתתפות </h1>
                  <p>{singlecourse.courseCost} ₪</p>
                </div>
  
                <Popup
                  trigger={<button className="dl-btn">ביטול</button>}
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
                              updateDoc(dataToupdate, {
                                isRegistered: false,
                              })
                                .then((res) => {
                                  console.log("UPdate", res);
                                  setTrigger(trigger? false: true);
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
