import React from "react";
import "./NewLecture.css";
function NewLecture() {
  return (
    <div className="newLectur-component">
      <div className="content-newLect">
        <h1>הוספת סדנא חדשה</h1>

        <p>שם ההטבה</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
        />

        <p>שם עסק</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
        />

        <p>עיר</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
        />

        <p>תוקף</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
        />

        <p>קוד קופון</p>
        <input
          type="text"
          className="input-newLectur"
          dir="rtl"
          lang="Hebrew"
        />

        <div className="btns-newLec">
          <button className="newLec-btn-cancel">ביטול</button>
          <button className="newLec-btn">פרסם</button>
        </div>
      </div>
    </div>
  );
}

export default NewLecture;
