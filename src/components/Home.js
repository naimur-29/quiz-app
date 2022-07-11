import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <h1 className="home-title">
        <Link to="/add+questions">Start</Link>
      </h1>
      <p className="description">Quiz Made Simple</p>
    </div>
  );
};

export default Home;
