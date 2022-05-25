import React from "react";
import SingleCoupon from './single coupon/SingleCoupon'
import "./Coupons.css";

function Coupons() {
  return (
    <div className="coupon-sectn">
      <h1 className="coupon-heading" style={{textAlign:'right', padding:'10px 50px'}}>הטבות בשבילך</h1>
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
