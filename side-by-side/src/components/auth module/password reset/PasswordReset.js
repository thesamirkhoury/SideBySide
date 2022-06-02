import React from "react";
import { UserContext } from "../../context/UseContext";
import "./Password.css";

import { useUserContext } from "../../context/UseContext";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function PasswordReset() {
  const [email, setEmail] = React.useState("");
  const [notify, setNotify] = React.useState(false)

  const handleSubmit = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
         setNotify(true)
         console.log("link has been sent")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  console.log(email);
  return (
    <div className="passwordReset-component">
      <h1>בוא נאפס את הסיסמה</h1>
      <div className="input-reset">
        <label for="pass">:מייל</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          dir="rtl"
          className="input-pass"
        />
      </div>

      <button onSubmit={handleSubmit} className="reset-btn">
        אפסו לי את הסיסמה{" "}
      </button>
      {notify? <p>reset password link has been sent to your email!</p> :''}
    </div>
  );
}

export default PasswordReset;
