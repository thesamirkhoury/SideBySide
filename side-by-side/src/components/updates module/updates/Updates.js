import React, { useState, useEffect } from "react";
import UpdateCard from "./UpdateCard";
import { BsSearch } from "react-icons/bs";
import "./updates.css";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/Firebase.config";

import {
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  collection,
} from "firebase/firestore";

function Updates() {
  const [trigger, setTrigger] = useState(false);

  const [updates, setUpdates] = React.useState([]);
  const userData = async () => {
    const q = query(collection(db, "adminUpdates"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      // doc.data() is never undefined for query doc snapshots
      ...doc.data(),
      id: doc.id,
    }));
    setUpdates(data);
  };
  // console.log("tedslfklsdkf: ", updates);

  const [searchWord, setSearchWord] = useState("");

  React.useEffect(() => {
    userData();
  }, [trigger, searchWord]);

  console.log(updates);
  console.log(searchWord);

  function standardTime(unixtime) {
    var u = new Date(unixtime);
    return (
      u.getUTCFullYear() +
      "-" +
      ("0" + u.getUTCMonth()).slice(-2) +
      "-" +
      ("0" + u.getUTCDate()).slice(-2) +
      (u.getUTCMilliseconds() / 1000).toFixed(0).slice(2, 5)
    );
  }

  return (
    <div className="update-container">
      <div className="upper-portion">
        <div className="info">
          {/* <button id="btn-2">הצג הכל</button> */}
          {/* <div id="str-top">עדכונים אחרונים</div> */}
        </div>
        <div className="input-parent">
          <input
            lang="Hebrew"
            className="input-box"
            dir="rtl"
            placeholder="הזין ערך לחיפוש"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <BsSearch />
        </div>
      </div>

      <div className="grid-container">
        {updates
          .filter((value) => {
            if (searchWord == "") {
              return value;
            } else if (
              value.updateTopic
                .toLowerCase()
                .includes(searchWord.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .map((update) => {
            return (
              <UpdateCard
                updateTopic={update.updateTopic}
                updateDescription={update.updateDescription}
                updateTime={standardTime(update.updateTime)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Updates;
