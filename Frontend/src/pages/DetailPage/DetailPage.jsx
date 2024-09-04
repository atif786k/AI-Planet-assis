import React from "react";
import "./DetailPage.css";
import { BsBarChartFill } from "react-icons/bs";
import { SlClock } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import { useHackathons } from "../../context/HackathonContext";

const DetailPage = () => {
  const location = useLocation();
  const { deleteHackathon } = useHackathons();
  const { hackathonDetail } = location.state || {};

  if (!hackathonDetail) {
    return <p className="not-found">Hackathon detail not found</p>;
  }
  return (
    <div className="detail-page-container">
      <div className="upper-div">
        <div className="upper-inner-div">
          <h5 className="detail-h5">
            <SlClock className="mx-4" />
            Starts on {new Date(
              hackathonDetail.startDate
            ).toLocaleString()}{" "}
            (Indian Standard Time)
          </h5>
          <h1 className="detail-h1">{hackathonDetail.name}</h1>
          <h4 className="detail-h4">{hackathonDetail.description}</h4>
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
            <button className="btns edit-btn">
              <Link to={`/edit/${hackathonDetail.id}`}>Edit</Link>
            </button>
            <button
              onClick={() => deleteHackathon(hackathonDetail.id)}
              className="btns delete-btn"
            >
              Delete
            </button>
          </div>
        </nav>
        <main className="hackathon-description">
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows. An agency of the Governmental Wildlife
          Conservation is planning to implement an automated system based on
          computer vision so that it can identify butterflies based on captured
          images. As a consultant for this project, you are responsible for
          developing an efficient model. Your Task is to build an Image
          Classification Model using CNN that classifies to which class of
          weather each image belongs to.
        </main>
      </div>
    </div>
  );
};

export default DetailPage;
