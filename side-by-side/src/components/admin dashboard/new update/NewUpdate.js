import React from "react";
import { Link } from "react-router-dom";
import "./NewUpdate.css";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";

function NewUpdate() {
  const [update, setUpdate] = React.useState({
    updateTopic: "",
    updateDescription: "",
  });

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "adminUpdates"), {
        updateTopic: update.updateTopic,
        updateDescription: update.updateDescription,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
      />

      <p>תוכן</p>
      <textarea
        dir="rtl"
        cols="70"
        onChange={onChange2}
        rows="10"
        id="updateDescription"
        name="updateDescription"
      />

      <div className="btns-newP">
        <Link to="/admindashboard/updates">
          <button className="newP-btn-cancel">ביטול</button>
        </Link>
        <Link to="/admindashboard/updates">
          <button onClick={handleSubmit} className="newP-btn">
            פרסם
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NewUpdate;
