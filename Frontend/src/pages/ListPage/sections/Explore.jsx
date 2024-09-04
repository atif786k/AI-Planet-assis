import React, { useState } from "react";
import { useHackathons } from "../../../context/HackathonContext";
import HackathonItem from "../../../components/HackathonItems";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Explore = () => {
  const { hackathons } = useHackathons();
  const [sortOrder, setSortOrder] = useState("");
  const [filterLevel, setFilterLevel] = useState("");

  const sortedHackathons = [...hackathons].sort((a, b) => {
    return sortOrder === "newest"
      ? new Date(b.startDate) - new Date(a.startDate)
      : new Date(a.startDate) - new Date(b.startDate);
  });

  const filteredHackathons = sortedHackathons.filter((hackathon) => {
    return filterLevel ? hackathon.level === filterLevel : true;
  });
  return (
    <section className="explore-container">
      <div className="functionality-div">
        <h3 className="explore-h3">Explore Challenges</h3>
        <div className="input-div space-x-6">
          <CiSearch className="text-xl absolute left-12" />
          <input type="text" className="input-field" placeholder="Search" />
        </div>
      </div>

      <div className="hackathon-card-mapping space-y-16">
        <div className="space-x-6">
          <select
            value={sortOrder}
            className="filter-style"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option defaultValue="Status">Status</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <select
            value={filterLevel}
            className="filter-style"
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-20 justify-items-center content-center">
          {filteredHackathons.map((hackathon) => (
            <Link
              to="/detail"
              key={hackathon.id}
              state={{ hackathonDetail: hackathon }}
            >
              <HackathonItem
                title={hackathon.name}
                imageUrl={hackathon.image}
                startTime={hackathon.startDate}
                endTime={hackathon.endDate}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
