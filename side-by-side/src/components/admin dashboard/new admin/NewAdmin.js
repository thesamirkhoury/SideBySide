import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import line from "./line.svg";
import "./NewAdmin.css";

import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";
import { storage } from "../../../firebase/Firebase.config";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import { addDoc, collection } from "firebase/firestore";
import { useUserContext } from "../../context/UseContext";

function NewAdmin() {
  const { registerUser } = useUserContext();
  const [admins, setAdmins] = useState({
    firstName: "",
    lastName: "",
    city: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    password: "",
    isApproved: true,
    isAdmin: true,
    confirmPassword: "",
  });

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setAdmins({ ...admins, [e.target.name]: e.target.value });
  };

  const [newAdmin, setNewAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "admin"), {
        firstName: admins.firstName,
        lastName: admins.lastName,
        phoneNumber: admins.phoneNumber,
        email: admins.email,
        dateOfBirth: admins.dateOfBirth,
        isAdmin: true,
        isApproved: true,
        city: admins.city,
        password: admins.password,
        confirmPassword: admins.confirmPassword,
        photoURL: { imageUrl },
      });
      console.log("new admin added with ID: ", docRef.id);
      setNewAdmin(true);
      registerUser(admins.email, admins.password);
      console.log();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [trig, setTrig] = useState(true);

  const [disabl, setDisable] = useState(false);

  const imagesListRef = ref(storage, "images/");
  const [loader, setLoader] = useState(true);

  React.useEffect(() => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${admins.email}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        setLoader(false);
        setDisable(false);
      });
    });
  }, [setImageUpload, imageUpload, loader, disabl]);

  return (
    <div className="newAdmin-component">
      <h1>הוספת מנהל חדש</h1>
      <hr className="line"></hr>

      <div className="newAdmin-information">
        <form onSubmit={handleSubmit}>
          <div className="single-line-input">
            <div className="single-inpt">
              <label>שם פרטי </label>
              <input
                name="firstName"
                onChange={onChange2}
                type="text"
                dir="rtl"
                required
              />
            </div>
            <div className="single-inpt">
              <label>שם משפחה </label>
              <input
                name="lastName"
                onChange={onChange2}
                type="text"
                dir="rtl"
                required
              />
            </div>
          </div>

          <div className="single-line-input">
            <div className="single-inpt">
              <label>תאריך לידה </label>
              <input
                name="dateOfbirth"
                onChange={onChange2}
                type="date"
                dir="rtl"
                required
              />
            </div>
            <div className="single-inpt">
              <label>עיר</label>
              <select
                required
                name="city"
                onChange={onChange2}
                dir="rtl"
                id="city"
              >
                <option value="city1">Islamabad</option>
                <option value="city2">Lahore</option>
                <option value="city3">Quetta</option>
              </select>
            </div>
          </div>
          <div className="single-line-input">
            <div className="single-inpt">
              <label>מייל </label>
              <input name="email" onChange={onChange2} type="email" dir="rtl" />
            </div>
            <div className="single-inpt">
              <label>מספר טלפון </label>
              <input
                name="phoneNumber"
                onChange={onChange2}
                type="number"
                dir="rtl"
                required
              />
            </div>
          </div>

          <div className="single-line-input">
            <div className="single-inpt">
              <label>סיסמה</label>
              <input
                name="password"
                onChange={onChange2}
                type="password"
                dir="rtl"
                required
              />
            </div>
            <div className="single-inpt">
              <label>סיסמה בשינית</label>
              <input
                name="confirmPassword"
                onChange={onChange2}
                type="password"
                dir="rtl"
                required
              />
            </div>
          </div>
          <div className="inpurapper newAD">
            <p>העלאת קבצים</p>
            <input
              type="file"
              onChange={(e) => {
                setDisable(true);
                setImageUpload(e.target.files[0]);
              }}
            />
          </div>

          <div className="newAdmin-btns">
            <NavLink to="/admindashboard/adminssection">
              <button className="cancel-btn">ביטול</button>
            </NavLink>
            <button className={`${!disabl ? "add-btn" : "disableBtn"}`}>הוסיף</button>
          </div>
          {newAdmin && !disabl ? (
            <p>
              New admin added successfully!
              <NavLink to="/admindashboard/adminssection">
                <b>go to admin section</b>
              </NavLink>
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default NewAdmin;
