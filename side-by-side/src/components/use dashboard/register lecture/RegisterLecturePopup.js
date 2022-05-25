import React from "react";
import "./RegisterLecturePopup.css";

function RegisterLecturePopup() {
  return (
    <div className="regLecture-popup">
      <h1>בוא נאמת פרטים</h1>

      <hr className="horizontal-row" />

      <div className="single-input">
        <label for="email">המייל שלך נשאר כזה, לא?</label>
        <input type="email" id="email" placeholder="israelisraeli@gmail.com" />
      </div>
      <div className="single-input">
        <label for="phon">ומה עם מספר טלפון? </label>
        <input type="number" id="phon" placeholder="0521234567" />
      </div>

      <div className="cancel-confirm-btns">
        <button className="cancel">ביטול</button>
        <button className="confirm">אישור</button>
      </div>
    </div>
  );
}

export default RegisterLecturePopup;
