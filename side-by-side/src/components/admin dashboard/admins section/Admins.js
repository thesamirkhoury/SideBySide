import React from "react";
import "./Admins.css";
function Admins() {
  return (
    <div className="admins-section">
      <h1>ניהול מנהלים קיימים</h1>
      <div className="admins-table">
        <table border="1" rules="rows">
          <tr>
            <th className="repBtn"></th>
            <th>מייל</th>
            <th>מספר טלפון</th>
            <th>שם משפחה</th>
            <th>שם ושם משפחה</th>
          </tr>
          <tr>
            <td className="repBtn">
              <button className="blockButton">אישור</button>
            </td>
            <td>israelisraeli@gmail.com</td>
            <td>0521234567</td>
            <td>ישראלי</td>
            <td>ישראל</td>
          </tr>
          <tr>
            <td className="repBtn">
              <button className="blockButton">אישור</button>
            </td>
            <td>israelisraeli@gmail.com</td>
            <td>0521234567</td>
            <td>ישראלי</td>
            <td>ישראל</td>
          </tr>
          <tr>
            <td className="repBtn">
              <button className="blockButton">אישור</button>
            </td>
            <td>israelisraeli@gmail.com</td>
            <td>0521234567</td>
            <td>ישראלי</td>
            <td>ישראל</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Admins;
