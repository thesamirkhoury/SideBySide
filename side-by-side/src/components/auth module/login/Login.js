import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="about-container">
    <h1 className="title-txt">התחבר לאזור האישי</h1>
    <div>
      <div className="input-box">
        <input />
        <label>מייל</label>
      </div>
      <div className="input-box">
        <input />
        <label>סיסמה</label>
      </div>
    </div>
    <div className="btns">
        <button className="btn-1">כניסה לאזור האישי</button>
        <button className="btn-2">שכחת את הסיסמה</button>
    </div>
  </div>
    
  )
}

export default Login