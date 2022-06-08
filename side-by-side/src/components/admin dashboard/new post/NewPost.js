import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NewPost.css";
import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";
import { collection, query, getDocs } from "firebase/firestore";
import { doc, setDoc, addDoc } from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../firebase/Firebase.config";
import { v4 } from "uuid";

function NewPost() {
  const [blog, setBlog] = React.useState({
    blogTopic: "",
    blogDescription: "",
  });

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setBlog({ ...blog, [e.target.name]: e.target.value });
    setTrig(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const time = new Date().toLocaleString();

    setTrig(false);
    try {
      const docRef = await addDoc(collection(db, "Blogs"), {
        blogTopic: blog.blogTopic,
        blogDescription: blog.blogDescription,
        blogPhoto: { imageUrl },
        blogTime: { time },
      });

      console.log("blog written with ID: ", docRef.id);
      setNewPost(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  

  const [imgUrl, setImgUrl] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://firebasestorage.googleapis.com/v0/b/sbsnewproject.appspot.com/o/images%2Fundefinedaf8ba17e-f7fd-4839-bded-c4703a736e60?alt=media&token=28550341-3d8f-4fae-a6e4-b391d109e4bf");
  const [trig, setTrig] = useState(true);

  const imagesListRef = ref(storage, "images/");
  const [disabl, setDisable] = useState(false);



  React.useEffect(() => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${blog.topic + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        setTrig(false);
        
        setDisable(false);
      });
    });
  }, [setImageUpload, imageUpload, disabl]);
  console.log("image url: ", imageUrl);

  const [newPost, setNewPost] = useState(false);
  return (
    <form onSubmit={handleSubmit}>
      <div className="newpost-component">
        <h1>הוספת פוסט חדש</h1>
        {/* {setTrig(true)} */}

        <p>כותרת</p>
        <input
          type="text"
          name="blogTopic"
          onChange={onChange2}
          dir="rtl"
          className="input-newT"
          required
        />


        <p>תוכן</p>

        <textarea
          dir="rtl"
          cols="70"
          onChange={onChange2}
          rows="10"
          id="updateDescription"
          name="blogDescription"
          required
        />

        <div className="inpurapper">
          <p>העלאת קבצים</p>
          <input
            type="file"
            onChange={(e) => {
              setDisable(true);
              setImageUpload(e.target.files[0]);
            }}
          />
        </div>

        <div className="btns-newCop">
          <Link to="/admindashboard/blogssection">
            <button className="newCop-btn-cancel">ביטול</button>
          </Link>
          <button className={`${!disabl ? "newCop-btn" : "disableBtn"}`}>
            {" "}
            פרסם{" "}
          </button>
        </div>
        {newPost && !disabl ? (
          <span>
            עדכון חדש  התפרסם בהצלחה
            <br/>
            <Link to="/admindashboard/blogssection">
            <b><u style={{marginLeft:'8px'}}>חזור לדף הפוסטים</u></b>
            </Link>
          </span>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default NewPost;
