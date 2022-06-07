import React from "react";
import "./NewCoupon.css";
import { NavLink } from "react-router-dom";
import { collection, addDoc , doc, updateDoc} from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";
import { useLocation } from "react-router-dom";

function EditCoupon() {
  const location = useLocation();

  const [coupon, setCoupon] = React.useState({
    couponValidity: location.state.couponValidity,
    couponName: location.state.couponName,
    couponCode: location.state.couponCode,
    couponBusiness: location.state.couponBusiness,
    couponCity: location.state.couponCity,
  });

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setCoupon({ ...coupon, [e.target.name]: e.target.value });
  };

  // console.log("location stat: ", location.state)
  const handleSubmit = async () => {
    try {
      const docRef = updateDoc(doc(db, "coupons", location.state.id), {
        couponName: coupon.couponName,
        couponCode: coupon.couponCode,
        couponBusiness: coupon.couponBusiness,
        couponCity: coupon.couponCity,
        couponValidity: coupon.couponValidity,
      });
      console.log("= coupon updated successfully ", docRef.id);
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
        placeholder={coupon.couponName}
      />

      <p>שם עסק</p>
      <input
        type="text"
        onChange={onChange2}
        name="couponBusiness"
        className="input-newCoupon"
        dir="rtl"
        lang="Hebrew"
        placeholder={coupon.couponBusiness}
      />

      <p>עיר</p>
      <select
        className="input-newCoupon drop"
        onChange={onChange2}
        name="couponCity"
        placeholder={coupon.couponCity}
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
        placeholder={coupon.couponValidity}
      />

      <p>קוד קופון</p>
      <input
        type="text"
        className="input-newCoupon"
        onChange={onChange2}
        name="couponCode"
        dir="rtl"
        lang="Hebrew"
        placeholder={coupon.couponCode}
      />

      <div className="btns-newCop">
        <NavLink to="/admindashboard/couponsection">
          <button className="newCop-btn-cancel">ביטול</button>
        </NavLink>
        <NavLink to="/admindashboard/couponsection">
          <button onClick={handleSubmit} className="newCop-btn">
            פרסם
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default EditCoupon;
