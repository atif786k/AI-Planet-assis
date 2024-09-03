import React from "react";
import "./DetailPage.css";
import { BsBarChartFill } from "react-icons/bs";
import { SlClock } from "react-icons/sl";

const DetailPage = ({ hackathonDetail }) => {
  console.log(hackathonDetail)
  return (
    <div className="detail-page-container">
      <div className="upper-div">
        <div className="upper-inner-div">
          <h5 className="detail-h5">
            <SlClock />
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </h5>
          <h1 className="detail-h1">
            {hackathonDetail.name}
          </h1>
          <h4 className="detail-h4">
            {hackathonDetail.description}
          </h4>
          <button className="easy-btn">
            <BsBarChartFill />
            {hackathonDetail.level}
          </button>
        </div>
      </div>
      <div className="lower-div">
        <nav className="detail-nav-bar">
          <h2 className="detail-h2">Overview</h2>
          <div className="space-x-4">
            <button className="btns edit-btn">Edit</button>
            <button className="btns delete-btn">Delete</button>
          </div>
        </nav>
        <main className="hackathon-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          consequatur voluptatibus quo. Velit facilis, quo iusto est ex cum,
          omnis doloremque amet temporibus asperiores quis magnam, distinctio
          eius ad nihil!
        </main>
      </div>
    </div>
  );
};

export default DetailPage;
