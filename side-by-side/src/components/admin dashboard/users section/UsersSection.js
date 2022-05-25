import React from 'react'
import './UsersSection.css'
function UsersSection() {
  return (
    <div className="user-sectin">
    <h1>ניהול משתמשים חדשים</h1>
    <div className="Newuser-table">
      <table border="1" rules="rows">
        <tr>
          <th className="reptn"></th>
          <th>עיר מגורים</th>
          <th>מספר ילדים</th>
          <th>מצב משפחתי</th>
          <th>שם ושם משפחה </th>
        </tr>
        
        <tr>
          <td  className="repBn">
            <button className="adminButton">אישור</button>
          </td>
          <td>ירושלים</td>
          <td>2</td>
          <td>נשוי</td>
          <td>ישראל ישראלי</td>
        </tr>
       
        <tr>
          <td  className="reptn">
            <button className="adminButton">אישור</button>
          </td>
          <td>ירושלים</td>
          <td>1</td>
          <td>נשוי</td>
          <td>ישראל ישראלי</td>
        </tr>
       
        <tr>
          <td  className="reptn">
            <button className="adminButton">אישור</button>
          </td>
          <td>ירושלים</td>
          <td>4</td>
          <td>נשוי</td>
          <td>ישראל ישראלי</td>
        </tr>
       
      </table>
    </div>

    <h1>ניהול משתמשים חדשים</h1>
    <div className="olduser-table">
      <table border="1" rules="rows">
        <tr>
          <th className="repBn"></th>
          <th>עיר מגורים</th>
          <th>מספר ילדים</th>
          <th>מצב משפחתי</th>
          <th>שם ושם משפחה </th>
        </tr>
        
        <tr>
          <td  className="reptn">
            <button className="blockButton">אישור</button>
          </td>
          <td>ירושלים</td>
          <td>2</td>
          <td>נשוי</td>
          <td>ישראל ישראלי</td>
        </tr>
       
        <tr>
          <td  className="repBn">
            <button className="blockButton">אישור</button>
          </td>
          <td>ירושלים</td>
          <td>1</td>
          <td>נשוי</td>
          <td>ישראל ישראלי</td>
        </tr>
       
        <tr>
          <td  className="repBn">
            <button className="blockButton">אישור</button>
          </td>
          <td>ירושלים</td>
          <td>4</td>
          <td>נשוי</td>
          <td>ישראל ישראלי</td>
        </tr>
       
      </table>
    </div>
  </div>    
  )
}

export default UsersSection