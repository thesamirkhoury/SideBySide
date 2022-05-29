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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../../firebase/Firebase.config";
import { useUserContext } from "../../context/UseContext";

function UsersSection() {
  const [details, setDetails] = useState([]);
  const[trigger, setTrigger] = useState(false)
  const { registerUser } = useUserContext();
  const userData = async () => {
    const q = query(collection(db, "admin"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDetails(data);
    // console.log("All users", data);
  };

  useEffect(() => {
    userData();
  }, [[],setTrigger]);

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
            if (!singleUserDetails.isApproved) {
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
                            console.log("UPdate",res)
                            setTrigger(true)
                          })
                          .catch((err) => {
                            console.log("ERROR", err);
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

      <h1>ניהול משתמשים חדשים</h1>
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
            if (singleUserDetails.isApproved) {
              return (
                <tr>
                  <td className="repBn">
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
                            console.log("Approved", res);
                            setTrigger(true)

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
