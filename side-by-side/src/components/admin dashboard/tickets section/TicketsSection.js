import React from "react";
import "./TicketsSection.css";
function TicketsSection() {
  return (
    <div className="ticket-sectin">
      <h1>פניות אחרונות</h1>
      <div className="ticket-table">
        <table border="1" rules="rows">
          <tr>
            <th ></th>
            <th>תאריך פנייה</th>
            <th>נושא הפנייה</th>
            <th>שם מלא</th>
            <th>מספר פנייה</th>
          </tr>
          <tr>
            <td  >
              <button className="replyButton">השב</button>
            </td>
            <td>01/01/2022</td>
            <td>לורם אפסם</td>
            <td>ישראל ישראלי</td>
            <td>1234</td>
          </tr>
          <tr>
            <td  >
              <button className="replyButton">השב</button>
            </td>
            <td>01/01/2022</td>
            <td>לורם אפסם</td>
            <td>ישראל ישראלי</td>
            <td>1234</td>
          </tr>
          <tr>
            <td >
              <button className="replyButton">השב</button>
            </td>
            <td>01/01/2022</td>
            <td>לורם אפסם</td>
            <td>ישראל ישראלי</td>
            <td>1234</td>
          </tr>
          <tr>
            <td >
              <button className="replyButton">השב</button>
            </td>
            <td>01/01/2022</td>
            <td>לורם אפסם</td>
            <td>ישראל ישראלי</td>
            <td>1234</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default TicketsSection;
