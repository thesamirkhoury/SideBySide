import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogsSection.css";
import SingleBlog from "./single blog/SingleBlog";
import { db } from "../../../firebase/Firebase.config";
import {
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  collection,
} from "firebase/firestore";


function BlogsSection() {
  const [trigger, setTrigger] = useState(false);

  const [blogs, setBlogs] = React.useState([]);
  
  const userData = async () => {
    const q = query(collection(db, "Blogs"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setBlogs(data);
  };
  // console("blogs: ", blogs);

  React.useEffect(() => {
    userData();
  }, [trigger]);

  return (
    <div className="blog-section">
      <div className="blogSection-header">
        <Link to="/admindashboard/newblogpost">
          <button className="newPost-button">פוסט חדש</button>
        </Link>
        <h1>פוסטים אחרונים</h1>
      </div>

      <div className="blogs-section">
        {blogs.map((blog) => {
          return (
            <div className="blog-card">
              <div className="single-blog-detail">
                <h1 className="headingBlog" style={{ marginBottom: "-20px" }}>
                  נושא
                </h1>
                <p>{blog.blogTopic}</p>
              </div>

              <div className="singleB-detail">
                <h1 className="headingBlog">תוכן</h1>
                <p>{blog.blogDescription}</p>
              </div>

              <div className="buttonsB-div">
                <button
                  onClick={() => {
                    let dataToupdate = doc(db, "Blogs", blog.id);
                    deleteDoc(dataToupdate)
                      .then((res) => {
                        setTrigger(true);
                      })
                      .catch((err) => {
                        console.log("ERROR", err);
                      });
                  }}
                  className="delB-btn"
                >
                  מחק
                </button>
                <Link to="/admindashboard/editblog" state={blog}>
                  <button className="editB-btn">עדכן</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsSection;