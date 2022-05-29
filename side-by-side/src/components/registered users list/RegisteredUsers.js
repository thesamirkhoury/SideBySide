import React from "react";
import './RegisteredUsers.css'
function RegisteredUsers() {
  return (
    <div className="Reguser-sectin">
      <h1>רשימת נרשמים לסדנא</h1>
      <div className="Reguser-table">
        <table border="1" rules="rows">
          <tr>
            <th>עיר מגורים</th>
            <th>מספר ילדים</th>
            <th>שם משפחה</th>
            <th>שם פרטי</th>
          </tr>
          <tr>
              <td> israelisraeli@gmail.com</td>
              <td>052-1234567</td>
              <td>ישראלי</td>
              <td>ישראל</td>
          </tr>
          <tr>
              <td> israelisraeli@gmail.com</td>
              <td>052-1234567</td>
              <td>ישראלי</td>
              <td>ישראל</td>
          </tr>
          <tr>
              <td> israelisraeli@gmail.com</td>
              <td>052-1234567</td>
              <td>ישראלי</td>
              <td>ישראל</td>
          </tr>
          <tr>
              <td> israelisraeli@gmail.com</td>
              <td>052-1234567</td>
              <td>ישראלי</td>
              <td>ישראל</td>
          </tr>
        </table>
        
        <button className="closeBtn">
        סגור
        </button>
      </div>
    </div>
  );
}

export default RegisteredUsers;
