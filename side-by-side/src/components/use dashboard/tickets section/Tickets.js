import React, { useState, useEffect } from "react";
import SingleTicket from "./single ticket/SingleTicket";
import "./Tickets.css";
import searchicon from "../assests/search-icon.svg";
import plus from "../assests/newticket.svg";
import { NavLink } from "react-router-dom";
import expand from "../assests/expand.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {useUserContext }from '../../context/UseContext'
import { IoIosTime } from "react-icons/io";
import {
  collection,
  query,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/Firebase.config";
import { async } from "@firebase/util";

function Tickets() {
 
  const [ticketdata, setTicketData] = useState([]);
const {ticketTrigger, setTicketTrigger,tickets,setTickets} = useUserContext();
  const loggedUser = JSON.parse(localStorage.getItem("currentUser"));
  const loggedUserEmail1 = loggedUser.email;

  const regUsrz = [{}];

  
  // setTickets(()=>[regUsrz])

  useEffect(() => {
    // console.log("Triggered")
    const Alltickets = async () => {
 
      const q = query(collection(db, "tickets"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // console.log("All tickets", data);
     const arr = [];
      data.map((dat) => {
        if (dat.userCreated.loggedUserEmail == loggedUserEmail1 && dat.userCreated.loggedUserEmail != null) {
          // console.log("data to be added",dat)
        
        arr.push(dat);
          //  setTicketData([dat])
  
          // regUsrz.push(dat);
        }
      }
      
      );
    
      console.log("ARR",arr)
      setTickets([...arr])
    


  
      
      // setTickets(regUsrz);
     
    };
    Alltickets();
    console.log("Ticket data",tickets)
 
 
  }, [setTickets]);

  function unixTime(unixtime) {
    var theDate = new Date(unixtime * 1000);
    return theDate.toLocaleDateString();
  }

  return (
    <div className="tickets-section">
      <div className="searchBox">
        <input type="text" dir="rtl" placeholder="הזין ערך לחיפוש" />
        <img src={searchicon} />
      </div>
      <div className="title-button">
        <NavLink to="/userdashboard/tickets/newticket">
          <div className="new-ticket-btn">
            <button>פניה חדשה</button>
            <img src={plus} alt="plus" className="plus" />
          </div>
        </NavLink>
        <h1>פניות אחרונות</h1>
      </div>
      <div className="singletickets-section">
        {tickets?.map((ticket) => {
          // console.log("TICKETS",tickets)

          return (
            <SingleTicket
              ticketStatus={ticket.ticketStatus}
              ticketSubject={ticket.ticketSubject}
              ticketReferral={ticket.ticketReferral}
              ticketAnswer={ticket.ticketAnswer}
              ticketTime={unixTime(ticket.ticketTime.date.seconds)}
              ticketNumber={ticket.ticketNumber}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tickets;
