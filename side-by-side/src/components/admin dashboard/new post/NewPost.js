import React from "react";
import { Link } from "react-router-dom";
import "./NewPost.css";
function NewPost() {
  return (
    <div className="newpost-component">
      <h1>הוספת פוסט חדש</h1>

      <p>כותרת</p>
      <input type="text" dir="rtl" className="input-newT" />

      <p>תוכן</p>
      <textarea className="text-area" dir="rtl" cols="100" rows="10" />
      
      <div className="inputWrapper">
      העלאת קבצים
        <input className="fileInput" type="file" name="file1" />
      </div>

      <div className="btns-newCop">
        <Link to="/admindashboard/blogssection">
          <button className="newCop-btn-cancel">ביטול</button>
        </Link>
        <Link to="/admindashboard/blogssection">
          <button className="newCop-btn">פרסם</button>
        </Link>
      </div>
    </div>
  );
}

export default NewPost;
