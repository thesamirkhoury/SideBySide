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

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
                <Popup
                  trigger={<button className="delB-btn">מחק</button>}
                  modal
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <h1 style={{textAlign: "center"}}>אישור מחיקה</h1>
                      <div className="header"></div>
                      <div className="content">
                      <h2> ?האם אתה בטוח שתרצה למחוק את הפוסט</h2>
                        <br />

                        <div className="cancel-confirm-btns">
                          <button
                            className="cancel"
                            onClick={() => {
                              close();
                            }}
                          >
                              ביטול
                          </button>
                          <button
                            onClick={() => {
                              let dataToupdate = doc(db, "Blogs", blog.id);
                              deleteDoc(dataToupdate)
                                .then((res) => {
                                  setTrigger(true);
                                  close();
                                })
                                .catch((err) => {
                                  console.log("ERROR", err);
                                });
                            }}
                            className="confirm"
                          >
                            אישור
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>

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
