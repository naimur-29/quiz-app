import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = ({
  setQuestions,
  setQuizName,
  setIsQuestionSubmitted,
  setIsQuizSubmitted,
}) => {
  useEffect(() => {
    setQuestions([]);
    setQuizName("");
    setIsQuestionSubmitted(false);
    setIsQuizSubmitted(false);
  }, [setQuestions, setQuizName, setIsQuestionSubmitted, setIsQuizSubmitted]);

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
