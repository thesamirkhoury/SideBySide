import React from "react";
import { Link } from "react-router-dom";
import "./NewUpdate.css";
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

function UpdateUpdate() {
  const location = useLocation();
  const [update, setUpdate] = React.useState({
    updateTopic: location.state.updateTopic,
    updateDescription: location.state.updateDescription,
  });

  const onChange2 = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let dataToupdate = doc(db, "adminUpdates", location.state.id);
    updateDoc(dataToupdate, {
      updateTopic: update.updateTopic,
      updateDescription: update.updateDescription,
    })
      .then((res) => {
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <div className="newUpdate-component">
      <h1>הוספת עדכון חדש</h1>

      <p>כותרת</p>
      <input
        type="text"
        onChange={onChange2}
        dir="rtl"
        id="updateTopic"
        className="input-newT"
        name="updateTopic"
        value={update.updateTopic}
      />

      <p>תוכן</p>
      <textarea
        dir="rtl"
        cols="70"
        onChange={onChange2}
        rows="10"
        id="updateDescription"
        name="updateDescription"
        value={update.updateDescription}
      />

      <div className="btns-newP">
        <Link to="/admindashboard/updates">
          <button className="newP-btn-cancel">ביטול</button>
        </Link>
        <Link to="/admindashboard/updates">
          <button onClick={() => handleSubmit()} className="newP-btn">
            פרסם
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UpdateUpdate;
