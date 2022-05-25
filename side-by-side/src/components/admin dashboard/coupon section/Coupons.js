import React from "react";
import SingleCoupon from "./single coupon/SingleCoupon";
import "./Coupons.css";

function Coupons() {
  return (
    <div className="coupon-sectin">
      <div className="couponSection-header">
        <button className="newPost-button">פוסט חדש</button>
        <h1>הטבות בשבילך</h1>
      </div>

      <div className="Coupons-section">
        <SingleCoupon />
        <SingleCoupon />
        <SingleCoupon />
        <SingleCoupon />
        <SingleCoupon />
      </div>
    </div>
  );
}
export default Coupons;
