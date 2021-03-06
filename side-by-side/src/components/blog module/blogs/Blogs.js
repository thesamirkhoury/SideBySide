import React, { useState, useEffect } from "react";
import SingleBlog from "./SignleBlog";
import { BsSearch } from "react-icons/bs";
import "./Blogs.css";
import { db } from "../../../firebase/Firebase.config";
import {
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  collection,
} from "firebase/firestore";

function Blogs() {
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

  function standardTime(unixtime) {
    var u = new Date(unixtime * 1000);
    return (
      u.getUTCFullYear() +
      "-" +
      ("0" + u.getUTCMonth()).slice(-2) +
      "-" +
      ("0" + u.getUTCDate()).slice(-2) +
      " " +
      ("0" + u.getUTCHours()).slice(-2) +
      ":" +
      ("0" + u.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + u.getUTCSeconds()).slice(-2) +
      "." +
      (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5)
    );
  }

  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="Blog-container">
      <div className="upper-portionB">
        <div className="input-parentB">
          <input
            className="input-boxB"
            dir="rtl"
            placeholder="הזין ערך לחיפוש"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <BsSearch />
        </div>
      </div>

      <div className="grid-containerB">
        {blogs
          .filter((value) => {
            if (searchWord == "") {
              return value;
            } else if (
              value.blogTopic
                .toLowerCase()
                .includes(searchWord.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .map((blog) => {
            return (
              <SingleBlog
                blogTopic={blog.blogTopic}
                blogDescription={blog.blogDescription}
                blogTime={(blog.blogTime.time)}
                blogPhoto={blog?.blogPhoto?.imageUrl}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Blogs;
