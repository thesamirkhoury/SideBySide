import React from "react";
import "./CancelLecturePopup.css";

function CancelLecturePopup() {
  return (
    <div className="cancelLecture-popup">
      <h1>ביטל הרשמה לסדנא</h1>

      <hr className="horizontal-rowCan" />
            <h3>
            האם אתה רוצה לבטל את הרישום? 
            </h3>

      <div className="cancel-confirm-btns">
        <button className="cancel">ביטול</button>
        <button className="confirm">אישור</button>
      </div>
    </div>
  );
}

export default CancelLecturePopup;
