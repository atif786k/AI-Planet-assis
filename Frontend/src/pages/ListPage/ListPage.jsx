import React from "react";
import "./ListPage.css";
import Home from "./sections/Home";
import Statistics from "./sections/Statistics";
import Why from "./sections/Why";
import Explore from "./sections/Explore";

const ListPage = ({ detailFunction }) => {
  return (
    <div className="list-page-container">
      <Home />
      <Statistics />
      <Why />
      <Explore detailFunction={detailFunction}/>
    </div>
  );
};

export default ListPage;
