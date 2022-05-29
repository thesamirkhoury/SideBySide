import React from "react";
import "./Password.css";

function PasswordReset() {
  return (
    <div className="passwordReset-component">
      <h1>בוא נאפס את הסיסמה</h1>
      <div className="input-reset">
        <label for="pass">:מייל</label>
        <input type="password" id="pass" dir="rtl" className="input-pass" />
      </div>

      <button className="reset-btn">אפסו לי את הסיסמה </button>
    </div>
  );
}

export default PasswordReset;
