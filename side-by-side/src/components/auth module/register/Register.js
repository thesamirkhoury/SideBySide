import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/Firebase.config";

import { storage } from "../../../firebase/Firebase.config";
import { doc, setDoc, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import { v4 } from "uuid";

function Register() {
  const [details, setDetails] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    city: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    maritalStatus: "",
    password: "",
    numberOfChildren: 0,
    isApproved: false,
    isAdmin: false,
  });
  const onChange1 = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [regConfirm, setRegConfirm] = useState(false);


  const[cCity, setCcity] = useState('city1')
  const[cMarried, setCmarried] = useState('single')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
     
      const docRef = await addDoc(collection(db, "admin"), {
        firstName: user.firstName,
        lastName: user.lastName,
        city: cCity,
        dateOfBirth: user.dateOfBirth,
        email: user.email,
        phoneNumber: user.phoneNumber,
        maritalStatus: cMarried,
        password: user.password,
        numberOfChildren: user.numberOfChildren,
        isApproved: false,
        isAdmin: false,
        photoURL: { imageUrl },
      });
      console.log("Document written with ID: ", docRef.id);

      setRegConfirm(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [trig, setTrig] = useState(true);

  const [disabl, setDisable] = useState(false);

  const imagesListRef = ref(storage, "images/");
  const [loader, setLoader] = useState(true);

  React.useEffect(() => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${user.email}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        setLoader(false);
        setDisable(false);
      });
    });
  }, [setImageUpload, imageUpload, loader, disabl]);

  // console.log("current image url: ", imageUrl);
  return (
    <form onSubmit={handleSubmit}>
      <div className="register-container">
        <h1 className="title-txtR">
          רוצים להצטרף לכל הטוב הזה? <br></br>מלאו את הפרטים וניצור אתכם קשר
          בהקדם
        </h1>
        <div className="dataInput">
          <div className="singleLine-inputs">
            <div className="input-boxR">
              <input
                onChange={onChange1}
                id="lastName"
                name="lastName"
                dir="rtl"
                type="text"
                required
              />
              <label for="firstName">:שם משפחה</label>
            </div>
            <div className="input-boxR">
              <input
                onChange={onChange1}
                id="firstName"
                type="text"
                name="firstName"
                dir="rtl"
                required
              />
              <label for="lastName">שם פרטי</label>
            </div>
          </div>

          <div className="singleLine-inputs">
            <div className="input-boxR">
              <select
                onChange={(e)=>setCcity(e.target.value)}
                dir="rtl"
                name="city"
                id="city"
                required
                
              >
                <option  value="city1">city1</option>
                <option value="city2">city2</option>
                <option value="city3">city3</option>
              </select>
              <label for="city">: עיר מגורים </label>
            </div>

            <div className="input-boxR">
              <input
                onChange={onChange1}
                name="dateOfBirth"
                id="dateOfBirth"
                type="date"
                dir="rtl"
                required
              />
              <label for="dateOfBirth">:תאריך לידה</label>
            </div>
          </div>

          <div className="singleLine-inputs">
            <div className="input-boxR">
              <input
                onChange={onChange1}
                name="phoneNumber"
                id="phoneNumber"
                type="number"
                dir="rtl"
                required
              />
              <label for="email">:מספר טלפון</label>
            </div>
            <div className="input-boxR">
              <input
                onChange={onChange1}
                name="email"
                id="email"
                type="email"
                dir="rtl"
                required
              />

              <label for="phoneNumber">:מייל</label>
            </div>
          </div>
          <div className="singleLine-inputs">
            <div className="input-boxR">
              <input
                onChange={onChange1}
                id="children"
                name="numberOfChildren"
                dir="rtl"
                type="number"
                required
              />
              <label for="children">:מספר ילדים</label>
            </div>

            <div className="input-boxR">
              <select
                onChange={(e)=>setCmarried(e.target.value)}

                dir="rtl"
                name="maritalStatus"
                id="maritalStatus"
                required
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>

              <label for="maritalStatus">:סיסמה</label>
            </div>
          </div>
          <div className="singleLine-inputs">
            <div className="input-boxR">
              <input
                onChange={onChange1}
                id="confirmPassword"
                type="password"
                dir="rtl"
                required
              />
              <label for="confirmPassword">:סיסמה בשינית:</label>
            </div>

            <div className="input-boxR">
              <input
                onChange={onChange1}
                name="password"
                id="password"
                type="password"
                dir="rtl"
                required
              />
              <label for="password">:סיסמה </label>
            </div>
          </div>
        </div>

        <div className="inpurapper">
          <p>העלה תמונה</p>
          <input
            type="file"
            onChange={(e) => {
              setDisable(true);
              setImageUpload(e.target.files[0]);
            }}
          />
        </div>

        <div className="btnsR">
          <button
            // type="submit"
            // onClick={(e)=>handleSubmit(e)}
            className={`${!disabl ? "btn-1R" : "disableBtn"}`}
          >
            כניסה לאזור האישי
          </button>
        </div>

        {regConfirm ? (
          <p>
            Registered successfully!{" "}
            <b>
              <a href="/">go to home</a>
            </b>
          </p>
        ) : null}
      </div>
    </form>
  );
}

export default Register;
