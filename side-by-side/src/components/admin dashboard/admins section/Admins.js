import React, { useState, useEffect } from "react";
import "./Admins.css";
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

function Admins() {
  const [admins, setAdmins] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const AllAdmins = async () => {
    const q = query(collection(db, "adminsList"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setAdmins(data);
    // console.log("All courses", data);
  };

  useEffect(() => {
    AllAdmins();
  }, [trigger]);

  return (
    <div className="admins-section">
      <div className="lectureSection-header">
        <NavLink to="/admindashboard/adminssection/newadmin">
          <button className="newPost-button">מנהל חדש</button>
        </NavLink>
        <h1>ניהול מנהלים קיימים</h1>
      </div>
      <div className="admins-table">
        <table border="1" rules="rows">
          <tr>
            <th className="repBtn"></th>
            <th>מייל</th>
            <th>מספר טלפון</th>
            <th>שם משפחה</th>
            <th>שם ושם משפחה</th>
          </tr>
          {admins.map((admin) => {
            return (
              <tr>
                <td className="repBtn">
                  <button
                    onClick={() => {
                      let dataToupdate = doc(db, "adminsList", admins.id);
                      deleteDoc(dataToupdate)
                        .then((res) => {
                          setTrigger(true);
                          console.log('admin deleted...')
                        })
                        .catch((err) => {
                          console.log("ERROR", err);
                        });
                    }}
                    className="blockButton"
                  >
                    חסום
                  </button>
                </td>
                <td>{admins.adminEmail}</td>
                <td>{admins.adminPhonNumber}</td>
                <td>{admins.adminLastName}</td>
                <td>{admins.adminFirstName}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Admins;
