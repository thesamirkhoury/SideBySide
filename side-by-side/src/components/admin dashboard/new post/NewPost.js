import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./NewPost.css";
import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";
import {
  addDoc,
  collection,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/firestore";


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
  };
  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "Blogs"), {
        blogTopic: blog.blogTopic,
        blogDescription: blog.blogDescription,
      });

      console.log("blog written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);

  // const imagesListRef = ref(storage, "images/");
  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);
  //     });
  //   });
  // };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //         console.log(imageUrls);
  //       });
  //     });
  //   });
  // }, []);

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
      />

      <p>תוכן</p>

      <textarea
        dir="rtl"
        cols="70"
        onChange={onChange2}
        rows="10"
        id="updateDescription"
        name="blogDescription"
      />

   
      <div className="inpurapper">
        <p>העלאת קבצים</p>
        <input
          type="file"
          onChange={(event) => {
            // setImageUpload(event.target.files[0]);
          }}
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

export default NewPost;
