import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useHackathons } from "../../../context/HackathonContext";
import HackathonItem from "../../../components/HackathonItems";

const Explore = ({ detailFunction }) => {
  const { hackathons, deleteHackathon } = useHackathons();
  const [sortOrder, setSortOrder] = useState("newest");
  const [filterLevel, setFilterLevel] = useState("");
  const navigate = useNavigate();

  const sortedHackathons = [...hackathons].sort((a, b) => {
    return sortOrder === "newest"
      ? new Date(b.startDate) - new Date(a.startDate)
      : new Date(a.startDate) - new Date(b.startDate);
  });

  const filteredHackathons = sortedHackathons.filter((hackathon) => {
    return filterLevel ? hackathon.level === filterLevel : true;
  });

  const handleRoute = () => {
    navigate(`/detail`);
  }
  return (
    <section className="explore-container">
      <div className="functionality-div">
        <h3 className="explore-h3">Explore Challenges</h3>
        <div className="input-div space-x-6">
          <CiSearch className="text-xl absolute left-12" />
          <input type="text" className="input-field" placeholder="Search" />
          <button className="filter-btn">
            Filter <IoIosArrowDown className="ml-2" />
          </button>
        </div>
      </div>

      <div className="hackathon-card-mapping">
        {/* <div>
          <label>Sort By:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          <label>Filter by Level:</label>
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div> */}

        <div>
          {filteredHackathons.map((hackathon) => (
            <div key={hackathon.id} onClick={()=>{detailFunction(hackathon); handleRoute()}}>
              <HackathonItem
                title={hackathon.name}
                imageUrl={hackathon.image}
                startTime={hackathon.startDate}
                endTime={hackathon.endDate}
              />
              {/* <Link to={`/edit/${hackathon.id}`}>Edit</Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
