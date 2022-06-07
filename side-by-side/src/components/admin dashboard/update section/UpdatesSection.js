import React, { useState } from "react";
import "./UpdatesSection.css";
import SingleUpdate from "./single update/SingleUpdate";
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
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function UpdatesSection() {
  const [trigger, setTrigger] = useState(false);

  const [updates, setUpdates] = React.useState([]);
  const userData = async () => {
    const q = query(collection(db, "adminUpdates"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUpdates(data);
  };

  React.useEffect(() => {
    userData();
  }, [trigger, setTrigger]);

  return (
    <div className="update-sec">
      <div className="updateSection-header">
        <Link to="/admindashboard/newupdate">
          <button className="newUpdate-button">עדכון חדש</button>
        </Link>
        <h1>עדכונים אחרונים{trigger}</h1>
      </div>
      <div className="updatessection-section">
        {updates.map((update) => {
          return (
            <div className="updateComponent">
              <div className="update-card">
                <div className="single-update-detail">
                  <h1 style={{ marginBottom: "-13px" }}>נושא</h1>
                  <p>{update.updateTopic}</p>
                </div>

                <div className="single-detail">
                  <h1>תוכן</h1>
                  <p>{update.updateDescription}</p>
                </div>

                <div className="buttons-div">
                  <Popup
                    trigger={<button className="del-btn">מחק</button>}
                    modal
                  >
                    {(close) => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"></div>
                        <div className="content">
                          <h3>are your sure to delete?</h3>
                          <br />
                          {trigger}

                          <div className="cancel-confirm-btns">
                            <button
                              className="cancel"
                              onClick={() => {
                                console.log("modal closed ");
                                close();
                              }}
                            >
                              cancel
                            </button>
                            <button
                              onClick={() => {
                                let dataToupdate = doc(
                                  db,
                                  "adminUpdates",
                                  update.id
                                );
                                deleteDoc(dataToupdate)
                                  .then((res) => {
                                    setTrigger(true);
                                    close()
                                  })
                                  .catch((err) => {
                                    console.log("ERROR", err);
                                  });
                              }}
                              className="confirm"
                            >
                              confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>

                  <Link to="/admindashboard/updateupdate" state={update}>
                    <button className="edit-btn">עדכן</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default UpdatesSection;
