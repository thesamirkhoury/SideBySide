import React from "react";
import { NavLink } from "react-router-dom";
import "./Reply.css";
function Reply() {
  return (
    <div className="reply-component">
      <h1>השב לפנייה</h1>
      <hr
        style={{
          width: "100%",
          textAlign: "center",
          border: "1px solid #EBEBF9",
        }}
      />
      <div className="singleLin">
        <h2>:מספר פניה</h2>
        <p>12345</p>
      </div>

      <div className="singleLin">
        <h2>:נושא הפניה</h2>
        <p>לורם איפסום דולור סיט אמט</p>
      </div>
      <div className="singleLin">
        <h2>:תאריך פתיחה</h2>
        <p>16-04-2022</p>
      </div>
      <div className="singleLin col">
        <h2>:מלל הפניה</h2>
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט
          דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ
          בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
          עמחליף לורם איפסום דולור סיט אמט, מוסן מנת.
        </p>
      </div>
      <div className="singleLin col">
        <h2>:תשובה</h2>
        <textarea id="w3review" name="w3review" rows="8" dir="rtl" cols="100" />
      </div>

      <div className="replyBtns">
        <NavLink to="/admindashboard/ticketssectin">
          <button className="cancelB">ביטול</button>
        </NavLink>
        <NavLink to="/admindashboard/ticketssectin">
          <button className="sendB">שלח</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Reply;
