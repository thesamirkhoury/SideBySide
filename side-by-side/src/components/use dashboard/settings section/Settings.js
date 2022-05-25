import React from "react";
import "./Setting.css";
function Settings() {
  return (
    <div className="user-settings">
      <h1>רוצה לעדכן פרטים? תרגיש חופשי</h1>

      <div className="update-information">
        <div className="updateInfo-container">
          <div className="singleLine-input">
            <div className="input-box">
              <input type="text" dir="rtl" />
              <label>שם משפחה</label>
            </div>
            <div className="input-box">
              <input id="name" type="text" dir="rtl" />
              <label for="name">שם פרטי</label>
            </div>
          </div>
          <div className="singleLine-input">
            <div className="input-box">
              <input type="text" dir="rtl" />
              <label>עיר מגורים</label>
            </div>
            <div className="input-box">
              <input id="name" type="text" dir="rtl" />
              <label for="name">תאריך לידה </label>
            </div>
          </div>
          <div className="singleLine-input">
            <div className="input-box">
              <input type="text" dir="rtl" />
              <label>מספר טלפון</label>
            </div>
            <div className="input-box">
              <input id="name" type="text" dir="rtl" />
              <label for="name">מייל</label>
            </div>
          </div>
          <div className="singleLine-input">
            <div className="input-box">
              <input type="text" dir="rtl" />
              <label>מספר ילדים</label>
            </div>
            <div className="input-box">
              <input id="name" type="text" dir="rtl" />
              <label for="name">מצב משפחתי</label>
            </div>
          </div>

          <div className="saveInfoBtn">
            <button className="saveInfoBtn-1R">שמור</button>
          </div>
        </div>
      </div>

      <div className="update-password">
        <div className="password-container">
          <h1>רוצה לשנות סיסמה? בוא נצא לדרך</h1>

          <div className="singleLine-inputPassword">
            <div className="input-boxPassword">
              <input id="name" type="password" dir="rtl" />
              <label for="name">הסיסמה הישנה</label>
            </div>
          </div>
          <div className="singleLine-inputPassword">
            <div className="input-boxPassword">
              <input id="name" type="password" dir="rtl" />
              <label for="name">הסיסמה החדשה</label>
            </div>
          </div>
          <div className="singleLine-inputPassword">
            <div className="input-boxPassword">
              <input id="name" type="password" dir="rtl" />
              <label for="name">הסיסמה החדשה שוב</label>
            </div>
          </div>

          <div className="passSave">
            <button className="passSaveBtn">שמור</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
