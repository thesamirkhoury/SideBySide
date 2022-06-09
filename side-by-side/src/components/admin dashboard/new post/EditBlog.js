import React from "react";
import { Link } from "react-router-dom";
import "./NewPost.css";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";
import { useLocation } from "react-router-dom";

function Editblog() {
  const location = useLocation();
  const [blog, setBlog] = React.useState({
    blogTopic: location.state.blogTopic,
    blogDescription: location.state.blogDescription,
  });

  const handleSubmit = async () => {
    let dataToupdate = doc(db, "Blogs", location.state.id);
    updateDoc(dataToupdate, {
      blogTopic: blog.blogTopic,
      blogDescription: blog.blogDescription,
    })
      .then((res) => {
      })
      .catch((err) => {
        console.log("ERROR ", err);
      });
  };

  const onChange2 = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  return (
    <div className="newpost-component">
      <h1>הוספת פוסט חדש</h1>

      <p>כותרת</p>
      <input
        type="text"
        name="blogTopic"
        onChange={onChange2}
        dir="rtl"
        className="input-newT"
        value={blog.blogTopic}
      />

      <p>תוכן</p>

      <textarea
        dir="rtl"
        cols="70"
        onChange={onChange2}
        value={blog.blogDescription}
        rows="10"
        id="updateDescription"
        name="blogDescription"
      />

      <div className="inputWrappekr">
        העלאת קבצים
        <input
          className="fileInlput"
          onChange={() => onChange2}
          name="blogDescription"
          type="file"
        />
      </div>

      <div className="btns-newCop">
        <Link to="/admindashboard/blogssection">
          <button className="newCop-btn-cancel">ביטול</button>
        </Link>
        <Link to="/admindashboard/blogssection">
          <button onClick={() => handleSubmit()} className="newCop-btn">
            פרסם
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Editblog;
