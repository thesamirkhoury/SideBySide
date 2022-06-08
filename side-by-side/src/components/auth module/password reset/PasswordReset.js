import React from "react";
import { UserContext } from "../../context/UseContext";
import "./Password.css";

import { useUserContext } from "../../context/UseContext";

function PasswordReset() {
  const { forgotPassword, setResetPass, resetPass } = useUserContext();

  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    console.log(email);
    e.preventDefault();
    forgotPassword(email)
      .then(() => {
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="passwordReset-component">
      <h1>בוא נאפס את הסיסמה</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-reset">
          <label>:מייל</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            dir="rtl"
            className="input-pass"
          />
        </div>

        <button
          type="submit"
          className="reset-btn"
        >
          אפסו לי את הסיסמה{" "}
        </button>
      </form>

      {resetPass}
      
    </div>
  );
}

export default PasswordReset;
