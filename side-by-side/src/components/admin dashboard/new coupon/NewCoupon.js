import React from "react";
import "./NewCoupon.css";
import { NavLink } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";

function NewCoupon() {
  const [coupon, setCoupon] = React.useState({
    couponValidity: "",
    couponName: "",
    couponCode: "",
    couponBusiness: "",
    couponCity: "",
  });

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setCoupon({ ...coupon, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "coupons"), {
        couponName: coupon.couponName,
        couponCode: coupon.couponCode,
        couponBusiness: coupon.couponBusiness,
        couponCity: coupon.couponCity,
        couponValidity: coupon.couponValidity,
      });
      console.log("newe coupon added written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };



  return (
    <div className="newCoupon-component">
      <h1>הוספת הטבה חדשה</h1>

      <p>שם ההטבה</p>
      <input
        type="text"
        onChange={onChange2}
        name="couponName"
        className="input-newCoupon"
        dir="rtl"
        lang="Hebrew"
      />

      <p>שם עסק</p>
      <input
        type="text"
        onChange={onChange2}
        name="couponBusiness"
        className="input-newCoupon"
        dir="rtl"
        lang="Hebrew"
      />

      <p>עיר</p>
      <select
        className="input-newCoupon drop"
        onChange={onChange2}
        name="couponCity"
      >
        <option>Japan </option>
        <option>Germany </option>
        <option>China </option>
      </select>
      {/* <input type="text" className="input-newCoupon" dir='rtl' lang="Hebrew" /> */}

      <p>תוקף</p>
      <input
        type="date"
        className="input-newCoupon"
        onChange={onChange2}
        name="couponValidity"
        dir="rtl"
        lang="Hebrew"
      />

      <p>קוד קופון</p>
      <input
        type="text"
        className="input-newCoupon"
        onChange={onChange2}
        name="couponCode"
        dir="rtl"
        lang="Hebrew"
      />

      <div className="btns-newCop">
        <NavLink to="/admindashboard/couponsection">
          <button className="newCop-btn-cancel">ביטול</button>
        </NavLink>
        <NavLink to="/admindashboard/couponsection">
          <button onClick={handleSubmit}  className="newCop-btn">פרסם</button>
        </NavLink>
      </div>
    </div>
  );
}

export default NewCoupon;
