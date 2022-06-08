import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const docRef = await addDoc(collection(db, "coupons"), {
        couponName: coupon.couponName,
        couponCode: coupon.couponCode,
        couponBusiness: coupon.couponBusiness,
        couponCity: coupon.couponCity,
        couponValidity:  Date.now(),
      });
      setNewCoupon(true);
      console.log("newe coupon added written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [newCoupon, setNewCoupon] = useState(false);
  return (
    <form onSubmit={handleSubmit}>
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
          required
        />

        <p>שם עסק</p>
        <input
          type="text"
          onChange={onChange2}
          name="couponBusiness"
          className="input-newCoupon"
          dir="rtl"
          lang="Hebrew"
          required
        />

        <p>עיר</p>
        <select
          className="input-newCoupon drop"
          onChange={onChange2}
          required
          name="couponCity"
        >
         <option>בחר עיר</option>
        <option  value="ירושלים והסביבה">ירושלים והסביבה</option>
        <option value="תל אביב-יפו">תל אביב-יפו</option>
        <option value="באר שבע רבתי">באר שבע רבתי</option>
         <option value="חיפה והצפון">חיפה והצפון</option>
        </select>

        <p>תוקף</p>
        <input
          type="date"
          className="input-newCoupon"
          onChange={onChange2}
          name="couponValidity"
          dir="rtl"
          lang="Hebrew"
          required
        />

        <p>קוד קופון</p>
        <input
          type="text"
          className="input-newCoupon"
          onChange={onChange2}
          name="couponCode"
          dir="rtl"
          lang="Hebrew"
          required
        />

        <div className="btns-newCop">
          <NavLink to="/admindashboard/couponsection">
            <button className="newCop-btn-cancel">ביטול</button>
          </NavLink>
          <button className="newCop-btn">פרסם</button>
        </div>

        {newCoupon ? (
          <span>
            Coupon added successfully
            <NavLink to="/admindashboard/couponsection">
              <b style={{ marginLeft: "8px" }}>go to couopon section</b>
            </NavLink>
          </span>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default NewCoupon;
