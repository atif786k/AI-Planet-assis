import React from "react";
import Countdown from "react-countdown";
import "./style/Cards.css";
import { FiCheckCircle } from "react-icons/fi";

const HackathonItem = ({ imageUrl, title, status, startTime, endTime }) => {
  // Determine if the hackathon is upcoming, active, or past
  const isUpcoming = new Date(startTime) > new Date();
  const isActive =
    new Date(startTime) <= new Date() && new Date(endTime) >= new Date();
  const isPast = new Date(endTime) < new Date();

  // Render the countdown timer
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="timer">
        <div className="timer-item">
          <span>{days} </span>Days
        </div>
        <span> : </span>
        <div className="timer-item">
          <span>{hours} </span>Hours
        </div>
        <span> : </span>
        <div className="timer-item">
          <span>{minutes} </span>Mins
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
      <div className="main-card-content">
        <div className="card-content">
          <h5
            className={`status-badge ${
              isUpcoming ? "upcoming" : isActive ? "active" : "past"
            }`}
          >
            {isUpcoming ? "Upcoming" : isActive ? "Active" : "Past"}
          </h5>
          <h3 className="card-title">{title}</h3>
          <div className="timer-wrapper">
            {isUpcoming && <p>Starts in</p>}
            {isActive && <p>Ends in</p>}
            <Countdown
              date={isActive ? endTime : startTime}
              renderer={renderer}
            />
          </div>
          <button className="participate-button">
            <FiCheckCircle className="mr-2" />
            Participate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonItem;
