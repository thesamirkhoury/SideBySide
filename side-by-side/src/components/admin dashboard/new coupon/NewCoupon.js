import React from 'react'
import './NewCoupon.css'
function NewCoupon() {
  return (
    <div className="newCoupon-component">
    <h1>הוספת הטבה חדשה</h1>

    <p>שם ההטבה</p>
    <input type="text" className="input-newCoupon" dir='rtl' lang="Hebrew" />
 
    <p>שם עסק</p>
    <input type="text" className="input-newCoupon" dir='rtl' lang="Hebrew" />
 
    <p>עיר</p>
    <select className='input-newCoupon drop'>
      <option >Japan </option>
      <option>Germany </option>
      <option>China </option>
    </select>
    {/* <input type="text" className="input-newCoupon" dir='rtl' lang="Hebrew" /> */}
 
    <p>תוקף</p>
    <input type="date" className="input-newCoupon" dir='rtl' lang="Hebrew" />
 
    <p>קוד קופון</p>
    <input type="text" className="input-newCoupon" dir='rtl' lang="Hebrew" />
 
    <div className="btns-newCop">
      <button className="newCop-btn-cancel">ביטול</button>
      <button className="newCop-btn">פרסם</button>
    </div>
  </div>
  )
}

export default NewCoupon