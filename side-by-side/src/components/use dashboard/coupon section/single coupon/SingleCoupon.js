import React from "react";
import "./SingleCoupon.css";
function SingleCoupon() {
  return (
    <div className="coupon-card">
      <div className="singlecoupon-detail">
        <h1>שם </h1>
        <p>לורם איפסום </p>
      </div>

      <div className="singlecoupon-detail">
        <h1>עסק </h1>
        <p>לורם איפסום דולור סיט אמט</p>
      </div>

      <div className="singlecoupon-detail">
        <h1>תוקף </h1>
        <p> 13:00  11.04.2022</p>
      </div>

      <button className="redeem-btn-coupon">ממש</button>
    </div>
  );
}

export default SingleCoupon;
