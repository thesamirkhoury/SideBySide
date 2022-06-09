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
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "adminUpdates"), {
        updateTopic: update.updateTopic,
        updateDescription: update.updateDescription,
        updateTime: Date.now(),
      });
      setNewUpdate(true);
    } catch (e) {
      console.error("ERROR: ", e);
    }
  };
  function timeNow() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
  }
  const [newUpdate, setNewUpdate] = React.useState(false);
  return (
    <form onSubmit={handleSubmit}>
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
          required
        />

        <p>תוכן</p>
        <textarea
          dir="rtl"
          cols="70"
          onChange={onChange2}
          rows="10"
          id="updateDescription"
          name="updateDescription"
          required
        />

        <div className="btns-newP">
          <Link to="/admindashboard/updates">
            <button className="newP-btn-cancel">ביטול</button>
          </Link>
          <button className="newP-btn">פרסם</button>
        </div>

        {newUpdate ? (
          <span style={{marginRight:'8px'}}>
            עדכון חדש  התפרסם בהצלחה
            <br/>
            <Link to="/admindashboard/updates">
              <b><u style={{marginLeft:'8px'}}>חזור לדף העדכונים</u></b>
            </Link>
          </span>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default NewUpdate;
