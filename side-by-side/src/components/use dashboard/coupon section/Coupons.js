import React,{useEffect, useState} from "react";
import SingleCoupon from './single coupon/SingleCoupon'
import "./Coupons.css";
import {
  collection,
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/Firebase.config";

function Coupons() {


  const [coupons, setCoupons] = useState([]);

  const AllCoupons = async () => {
    const q = query(collection(db, "coupons"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCoupons(data);
    // console.log("All coupone", data);
  };

  useEffect(() => {
    AllCoupons();
  }, []);

  function unixTime(unixtime) {
    var u = new Date(unixtime );
    return (
      u.getUTCFullYear() +
      "-" +
      ("0" + u.getUTCMonth()).slice(-2) +
      "-" +
      ("0" + u.getUTCDate()).slice(-2) +
      " " +
      (u.getUTCMilliseconds() / 1000).toFixed(0).slice(2, 5)
    );
  }
  console.log("coupons: ", coupons)






  return (
    <div className="coupon-sectn">
      <h1 className="coupon-heading" style={{textAlign:'right', padding:'10px 50px'}}>הטבות בשבילך</h1>
      <div className="Coupons-section"> 

      {
        coupons.map(coupon=>{
          return <SingleCoupon couponID={coupon.id} couponName={coupon.couponName} couponBusiness={coupon.couponBusiness} couponTime={unixTime(coupon.couponValidity)} couponeCode={coupon.couponCode} />
        })
      }
        
       
      </div>
    
    </div>
  );
}
export default Coupons;
