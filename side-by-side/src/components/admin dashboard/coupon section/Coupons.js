import React, { useState, useEffect } from "react";
import SingleCoupon from "./single coupon/SingleCoupon";
import "./Coupons.css";
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

function Coupons() {
  const [coupons, setCoupons] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const AllCoupons = async () => {
    const q = query(collection(db, "coupons"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCoupons(data);
  };
  useEffect(() => {
    AllCoupons();
  }, [trigger, setTrigger]);

  function unixTime(unixtime) {
    var u = new Date(unixtime );
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
      (u.getUTCMilliseconds() / 1000).toFixed(0).slice(2, 5)
    );
  }

  return (
    <div className="coupon-sectin">
      <div className="couponSection-header">
        <NavLink to="/admindashboard/couponsection/newcoupon">
          <button className="newPost-button">הטבה חדשה</button>
        </NavLink>
        <h1>הטבות בשבילך</h1>
      </div>

      <div className="Coupons-section">
        {coupons.map((coupon) => {
          return (
            <>
              <div className="coupon-card">
                <div className="singlecoupon-detail">
                  <h1>שם </h1>
                  <p>{coupon.couponName}</p>
                </div>

                <div className="singlecoupon-detail">
                  <h1>עסק </h1>
                  <p> {coupon.couponBusiness} </p>
                </div>

                <div className="singlecoupon-detail">
                  <h1>תוקף </h1>
                  <p>{unixTime(coupon.couponValidity)}</p>
                </div>
                <div className="coupon-btns">
                  <Popup
                    trigger={<button className="delt-btn-coupon">מחק</button>}
                    modal
                  >
                    {(close) => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      <h1 style={{textAlign: "center"}}>אישור מחיקה</h1>
                        <div className="header"></div>
                        <div className="content">
                      <h2> ?האם אתה בטוח שתרצה למחוק את הפוסט</h2>
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
                                  "coupons",
                                  coupon.id
                                );
                                deleteDoc(dataToupdate)
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

                  <NavLink
                    to="/admindashboard/couponsection/editcoupon"
                    state={coupon}
                  >
                    <button className="edit-btn-coupon">עדכן</button>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Coupons;
