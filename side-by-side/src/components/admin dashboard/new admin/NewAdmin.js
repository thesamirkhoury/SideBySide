import React from "react";
import line from "./line.svg";
import "./NewAdmin.css";

function NewAdmin() {
  return (
    <div className="newAdmin-component">
      <h1>הוספת מנהל חדש</h1>
      <hr className="line"></hr>

      <div className="newAdmin-information">
        <div className="single-line-input">
          <div className="single-inpt">
            <label>שם פרטי</label>
            <input type="text" dir="rtl" />
          </div>
          <div className="single-inpt">
            <label>שם משפחה</label>
            <input type="text" dir="rtl" />
          </div>
        </div>

        <div className="single-line-input">
          <div className="single-inpt">
            <label>תאריך לידה</label>
            <input type="text" dir="rtl" />
          </div>
          <div className="single-inpt">
            <label>עיר </label>
            <input type="text" dir="rtl" />
          </div>
        </div>
        <div className="single-line-input">
          <div className="single-inpt">
            <label>מספר טלפון</label>
            <input type="text" dir="rtl" />
          </div>
          <div className="single-inpt">
            <label>מייל</label>
            <input type="text" dir="rtl" />
          </div>
        </div>
        <div className="single-line-input">
          <div className="single-inpt">
            <label>סיסמה</label>
            <input type="text" dir="rtl" />
          </div>
          <div className="single-inpt">
            <label>סיסמה בשינית</label>
            <input type="text" dir="rtl" />
          </div>
        </div>

        <div className="newAdmin-btns">
          <button className="cancel-btn">הוסיף</button>
          <button className="add-btn">ביטול</button>
        </div>
      </div>
    </div>
  );
}

export default NewAdmin;
