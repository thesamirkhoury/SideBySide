import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
function Register() {
  return (
    <div className="register-container">
      <h1 className="title-txtR">
        רוצים להצטרף לכל הטוב הזה? <br></br>מלאו את הפרטים וניצור אתכם קשר בהקדם
      </h1>
      <div className="dataInput">
        <div className="singleLine-inputs">
          <div className="input-boxR">
            <input type="text" dir="rtl" />
            <label>:שם משפחה</label>
          </div>
          <div className="input-boxR">
            <input id="name" dir="rtl" type="text" />
            <label for="name">שם פרטי</label>
          </div>
        </div>
        <div className="singleLine-inputs">
          <div className="input-boxR">
            <input type="email" dir="rtl" />
            <label>:עיר מגורים</label>
          </div>
          <div className="input-boxR">
            <input type="email" dir="rtl" />
            <label>:תאריך לידה </label>
          </div>
        </div>
        <div className="singleLine-inputs">
          <div className="input-boxR">
            <input type="password" dir="rtl" />
            <label>:מספר טלפון</label>
          </div>
          <div className="input-boxR">
            <input dir="rtl" />
            <label>:מייל</label>
          </div>
        </div>
        <div className="singleLine-inputs">
          <div className="input-boxR">
            <input type="password" dir="rtl" />
            <label>:מספר ילדים</label>
          </div>
          <div className="input-boxR">
            <input dir="rtl" />
            <label>:מצב משפחתי</label>
          </div>
        </div>
        <div className="singleLine-inputs">
          <div className="input-boxR">
            <input type="password" dir="rtl" />
            <label>:סיסמה בשינית</label>
          </div>
          <div className="input-boxR">
            <input dir="rtl" />
            <label>:סיסמה:</label>
          </div>
        </div>
      </div>

      <div className="inputWrapper">
        העלה תמונה
        <input className="fileInput" type="file" name="file1" />
      </div>
      <NavLink to="/login">
        <div className="btnsR">
          <button className="btn-1R">כניסה לאזור האישי</button>
        </div>
      </NavLink>
    </div>
  );
}

export default Register;
