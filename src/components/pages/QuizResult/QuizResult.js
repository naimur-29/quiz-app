import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./QuizResult.css";

const QuizResult = ({ questions, score, setScore }) => {
  useEffect(() => {
    let tempScore = 0;
    questions.forEach((element) => {
      tempScore += element.userAnswer === element.correctAnswer ? 1 : 0;
    });
    setScore(tempScore);
  }, [questions, setScore]);

  return (
    <div className="quiz-result-container">
      <h1 className="title">Score: {score < 10 ? `0${score}` : score}</h1>
      <div className="proceed-buttons">
        <Link to="/quiz+page" className="quiz-page">
          <button>Quiz Page</button>
        </Link>
        <Link to="/" className="home">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizResult;
