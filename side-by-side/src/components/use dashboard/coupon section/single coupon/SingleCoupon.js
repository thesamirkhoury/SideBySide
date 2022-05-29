import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./SingleCoupon.css";
import { NavLink } from "react-router-dom";
import { db } from '../../../../firebase/Firebase.config';


import {
  collection,
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function SingleCoupon({
  couponID,
  couponName,
  couponBusiness,
  couponTime,
  couponeCode,
}) {
  return (
    <div className="coupon-card">
      <div className="singlecoupon-detail">
        <h1>שם </h1>
        <p>{couponName} </p>
      </div>

      <div className="singlecoupon-detail">
        <h1>עסק </h1>
        <p>{couponBusiness}</p>
      </div>

      <div className="singlecoupon-detail">
        <h1>תוקף </h1>
        <p> {couponTime}</p>
      </div>

      <Popup
        trigger={
          <button
            onClick={() => {
              let dataToupdate = doc(db, "coupons", couponID);
              updateDoc(dataToupdate, {
                viewCoupon:[...couponID, couponID],
              })
                .then((res) => {
                  console.log("Approved", res);
                  // setTrigger(true);
                })
                .catch((err) => {
                  console.log("ERROR", err);
                });
            }}
            className="redeem-btn-coupon"
          >
            ממש
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal1">
            <div className="header1">
              <h1>קוד הקופון שלך</h1>
            </div>
            <div className="content1">
              <div className="coupon-code">
                <p className="coupon">{couponeCode}</p>
              </div>
              <button
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
                className="coupon-btn"
              >
                סגור
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default SingleCoupon;
