import React from "react";
import { UserContext } from "../../context/UseContext";
import "./Password.css";

import { useUserContext } from "../../context/UseContext";

function PasswordReset() {
  const { forgotPassword, setResetPass, resetPass } = useUserContext();

  const [email, setEmail] = React.useState("");
  // const [notify, setNotify] = useState(false);

  const handleSubmit = (e) => {
    console.log(email);
    e.preventDefault();
    forgotPassword(email)
      .then(() => {
        // setNotify(true);
        // setResetPass("password reset link has been sent to your email!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setResetPass( "Sorry. Wrong email!");
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
          // onClick={ handleSubmit}
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
