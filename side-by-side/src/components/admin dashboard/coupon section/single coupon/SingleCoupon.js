import React from "react";
import { NavLink } from "react-router-dom";
import "./SingleCoupon.css";
function SingleCoupon({ couponName, couponBusiness, couponCode, couponTime }) {
  return (
    <div className="coupon-card">
      <div className="singlecoupon-detail">
        <h1>שם </h1>
        <p>{couponName}</p>
      </div>

      <div className="singlecoupon-detail">
        <h1>עסק </h1>
        <p> {couponBusiness} </p>
      </div>

      <div className="singlecoupon-detail">
        <h1>תוקף </h1>
        <p>{couponTime}</p>
      </div>
      <div className="coupon-btns">
        <button className="delt-btn-coupon">מחק</button>
        <button className="edit-btn-coupon">עדכן</button>
      </div>
    </div>
  );
}

export default SingleCoupon;
