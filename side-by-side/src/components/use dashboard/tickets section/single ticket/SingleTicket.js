import React from "react";
import "./SingleTicket.css";
import expand from "../../assests/expand.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { IoIosTime } from "react-icons/io";

function SingleTicket({
  ticketNumber,
  ticketStatus,
  ticketSubject,
  ticketTime,
  ticketReferral,
  ticketAnswer,
}) {
  return (
    <div className="newticket-card">
      <div className="singleticket-detail">
        <h2>מספר פניה</h2>
        <p>{ticketNumber} </p>
      </div>

      <div className="singleticket-detail">
        <h2>נושא הפניה</h2>
        <p>{ticketSubject}</p>
      </div>

      <div className="singleticket-detail">
        <h2>סטטוס </h2>
        <p className={`${ticketStatus === "open" ? "statusopen" : "status"}`}>
          <span>{ticketStatus}</span>
        </p>
      </div>

      <Popup
        trigger={
          <div className="expand-ticket">
            <p>הציג פרטים</p> <img src={expand} />
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal expandModel">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header ">
              <div className="expand-header hdr">
                <div className="single-line">
                  <h2>: מספר פניה</h2>
                  <p>{ticketNumber}</p>
                </div>
                <div className="single-line">
                  <h2>: נושא הפניה </h2>
                  <p>{ticketSubject}</p>
                </div>
                <div className="single-line">
                  <h2>: סטטוס</h2>
                  <p
                    className={`${
                      ticketStatus === "closed" ? "status-exp" : "status-exp2"
                    }`}
                  >
                    {ticketStatus}
                  </p>
                </div>
                <div className="single-line">
                  <div className="timeExp expandTime">
                    <p>{ticketTime}</p>{" "}
                    <span>
                      <IoIosTime />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              <div className="description-expand">
                <div className="sng-desc">
                  <h2>: מלל הפניה</h2>
                  <p>{ticketReferral}</p>
                </div>
                <div className="sng-desc">
                  <h2>: תשובה</h2>
                  <p>{ticketAnswer}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  close();
                }}
                className="closeExp-btn closeEx"
              >
                סגור
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default SingleTicket;
