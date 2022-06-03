import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./RegisteredUsers.css";
import { useLocation } from "react-router-dom";

import {
  collection,
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/Firebase.config";

function RegisteredUsers() {
  const location = useLocation();

  const [courses, setCourses] = useState([]);
  const [regUsers, setRegUsers] = useState([]);
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

  useEffect(() => {
    AllCourses();
  }, []);

  console.log("Location", location.state);

  function unixTime(unixtime) {
    var u = new Date(unixtime * 1000);
    return (
      u.getUTCFullYear() +
      "-" +
      ("0" + u.getUTCMonth()).slice(-2) +
      "-" +
      ("0" + u.getUTCDate()).slice(-2) +
      (u.getUTCMilliseconds() / 1000).toFixed(0).slice(2, 5)
    );
  }

  return (
    <div className="Reguser-sectin">
      <h1>רשימת נרשמים לסדנא</h1>
      <div className="Reguser-table">
        <table border="1" rules="rows">
          <tr>
            <th>עיר מגורים</th>
            <th>מספר ילדים</th>
            <th>שם משפחה</th>
            <th>שם פרטי</th>
          </tr>
          {location.state.registeredUsers?.map((usr) => {
            return (
              <tr>
                <td> {usr.email}</td>
                <td>{usr.phoneNumber}</td>
                <td>{usr.lastName}</td>
                <td>{usr.firstName}</td>
              </tr>
            );
            // console.log(usr);
          })}
        </table>
        <NavLink to="/admindashboard/lecturessection">
          <button className="closeBtn">סגור</button>
        </NavLink>
      </div>
    </div>
  );
}

export default RegisteredUsers;
