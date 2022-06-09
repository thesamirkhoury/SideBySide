import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./UsersSection.css";

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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../../firebase/Firebase.config";
import { useUserContext } from "../../context/UseContext";

function UsersSection() {
  const [details, setDetails] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const { registerUser } = useUserContext();
  const userData = async () => {
    const q = query(collection(db, "admin"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDetails(data);
  };

  useEffect(() => {
    userData();
  }, [[], setTrigger]);

  return (
    <div className="user-sectin">
      <h1>ניהול משתמשים חדשים</h1>
      <div className="Newuser-table">
        <table border="1" rules="rows">
          <tr>
            <th className="reptn"></th>
            <th>עיר מגורים</th>
            <th>מספר ילדים</th>
            <th>מצב משפחתי</th>
            <th>שם ושם משפחה </th>
          </tr>

          {details.map((singleUserDetails) => {
            if (!singleUserDetails.isApproved && !singleUserDetails.isAmdin) {
              return (
                <tr>
                  <td className="repBn">
                    <button
                      onClick={() => {
                        registerUser(
                          singleUserDetails.email,
                          singleUserDetails.password,
                          singleUserDetails.firstName
                        );
                        let dataToupdate = doc(
                          db,
                          "admin",
                          singleUserDetails.id
                        );
                        updateDoc(dataToupdate, {
                          isApproved: true,
                        })
                          .then((res) => {
                            setTrigger(true);
                          })
                          .catch((err) => {
                            console.error("ERROR", err);
                          });
                      }}
                      className="adminButton"
                    >
                      אישור
                    </button>
                  </td>
                  <td>{singleUserDetails.city}</td>
                  <td>{singleUserDetails.numberOfChildren}</td>
                  <td>{singleUserDetails.maritalStatus}</td>
                  <td>
                    {`${singleUserDetails.firstName} ${singleUserDetails.lastName}`}{" "}
                  </td>
                </tr>
              );
            }
          })}
        </table>
      </div>

      <h1>ניהול משתמשים קיימים</h1>
      <div className="olduser-table">
        <table border="1" rules="rows">
          <tr>
            <th className="repBn"></th>
            <th>עיר מגורים</th>
            <th>מספר ילדים</th>
            <th>מצב משפחתי</th>
            <th>שם ושם משפחה </th>
          </tr>

          {details.map((singleUserDetails) => {
            if (singleUserDetails.isApproved && !singleUserDetails.isAdmin) {
              return (
                <tr>
                  <td className="repBn">
                    <Popup
                      trigger={<button className="blockButton">חסום</button>}
                      modal
                    >
                      {(close) => (
                        <div className="modal">
                          <button className="close" onClick={close}>
                            &times;
                          </button>
                      <h1 style={{textAlign: "center"}}>אישור חסימת משתמש</h1>

                          <div className="header"></div>
                          <div className="content">
                      <h2> ?האם אתה בטוח שתרצה לחסום את המשתמש</h2>

                            <br />

                            <div className="cancel-confirm-btns">
                              <button
                                className="cancel"
                                onClick={() => {
                                  close();
                                }}
                              >
                              ביטול
                              </button>
                              <button
                                onClick={() => {
                                  let dataToupdate = doc(
                                    db,
                                    "admin",
                                    singleUserDetails.id
                                  );
                                  deleteDoc(dataToupdate, {
                                    isApproved: true,
                                  })
                                    .then((res) => {
                                      setTrigger(true);
                                      close();
                                    })
                                    .catch((err) => {
                                      console.error("ERROR", err);
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
                  <td>{singleUserDetails.city}</td>
                  <td>{singleUserDetails.numberOfChildren}</td>
                  <td>{singleUserDetails.maritalStatus}</td>
                  <td>
                    {`${singleUserDetails.firstName} ${singleUserDetails.lastName}`}{" "}
                  </td>
                </tr>
              );
            }
          })}
        </table>
      </div>
    </div>
  );
}

export default UsersSection;
