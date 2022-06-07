import React from "react";
import { NavLink } from "react-router-dom";
import "./NewTicket.css";

import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../../firebase/Firebase.config";
import { useUserContext } from "../../context/UseContext";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";

export default function NewTicket() {
  const [tickets, setTicket] = React.useState();
  const { ticketTrigger, setTicketTrigger } = useUserContext();

  const onChange2 = (e) => {
    // e.defaultPrevent();
    setTicket({ ...tickets, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    var val = Math.floor(1000 + Math.random() * 9000);
    var strVal = val.toString();
    var date = new Date();
    try {
      const docRef = await addDoc(collection(db, "tickets"), {
        ticketSubject: tickets.ticketSubject,
        ticketReferral: tickets.ticketReferral,
        ticketStatus: "open",
        ticketNumber: strVal,
        ticketTime: { date },
        userCreated: { loggedUserEmail },
        userFirstName: loggedUserDetails.firstName,
        usreLastName: loggedUserDetails.lastName,
      });
      console.log("New ticket has been generated... ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const loggedUser = JSON.parse(localStorage.getItem("currentUser"));
  const loggedUserEmail = loggedUser.email.toString();
  const [loggedUserDetails, setLoggedUserDetails] = React.useState([]);
  const currentUserDetails = async () => {
    const q = query(collection(db, "admin"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const cUser = JSON.parse(localStorage.getItem("currentUser"));
    for (var i = 0; i <= data?.length; i++) {
      if (data[i]?.email == cUser?.email) {
        console.log("Logged user data: ATA", data[i]);
        setLoggedUserDetails(data[i]);
        break;
      }
    }
  };

  React.useEffect(() => {
    currentUserDetails();
  }, []);

  console.log("dddd: ", loggedUserDetails);

  return (
    <div className="newTicket-component">
      <h1>פנייה חדשה</h1>

      <p>מה נושא הפניה:</p>
      <input
        type="text"
        className="input-newT"
        onChange={onChange2}
        name="ticketSubject"
        dir="rtl"
        style={{
          padding: "5px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      />

      <p>מה תוכן הפניה:</p>
      <textarea
        cols="70"
        rows="8"
        onChange={onChange2}
        name="ticketReferral"
        dir="rtl"
      />

      <NavLink to="/userdashboard/tickets">
        <button
          onClick={() => {
            handleSubmit();
            setTicketTrigger(!ticketTrigger);
          }}
          className="newT-btn"
        >
          שלח פנייה
        </button>
      </NavLink>
    </div>
  );
}
