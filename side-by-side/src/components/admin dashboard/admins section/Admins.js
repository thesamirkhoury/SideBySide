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
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { db } from "../../../firebase/Firebase.config";

function Admins() {
  const [admins, setAdmins] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const AllAdmins = async () => {
    const q = query(collection(db, "admin"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setAdmins(data);
    console.log("All admins", data);
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
            if (admin.isAdmin) {
              return (
                <tr>
                  <td className="repBtn">
                    <Popup
                      trigger={<button className="blockButton">חסום</button>}
                      modal
                    >
                      {(close) => (
                        <div className="modal">
                          <button className="close" onClick={close}>
                            &times;
                          </button>
                      <h1 style={{textAlign: "center"}}>אישור חסימת מנהל</h1>
                          <div className="header"></div>
                          <div className="content">
                      <h2> ?האם אתה בטוח שתרצה לחסום את המנהל</h2>
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
                                  let dataToupdate = doc(db, "admin", admin.id);
                                  deleteDoc(dataToupdate)
                                    .then((res) => {
                                      setTrigger(true);
                                      console.log("admin deleted...");
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
                    
                  </td>
                  <td>{admin.email}</td>
                  <td>{admin.phoneNumber}</td>
                  <td>{admin.lastName}</td>
                  <td>{admin.firstName}</td>
                </tr>
              );
            }
          })}
        </table>
      </div>
    </div>
  );
}

export default Admins;
