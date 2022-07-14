import React from "react";
import { Link } from "react-router-dom";

import "./QuizPage.css";

const QuizPage = ({ quizName, questions, setIsQuizSubmitted }) => {
  questions.forEach((item) => (item.userAnswer = 0));

  return (
    <div className="quiz-page-container">
      <h1 className="title">{quizName}</h1>
      <div className="questions-container">
        {questions.map((item, index) => (
          <div className="question-container" key={index}>
            <h3 className="question">
              {index + 1}. {item.question}
            </h3>

            <ul className="options-container">
              {item.options.map((option, i) => (
                <li key={i} className="option">
                  <input
                    type="radio"
                    name={item.question + index}
                    id={option + i + index}
                    onClick={() => {
                      item.userAnswer = i + 1;
                    }}
                  />{" "}
                  <label htmlFor={option + i + index}>{option}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        className="submit-answers"
        to="/quiz+result"
        onClick={() => {
          setIsQuizSubmitted(true);
        }}
      >
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default QuizPage;
