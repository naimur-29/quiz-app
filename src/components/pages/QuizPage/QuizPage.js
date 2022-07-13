import React from "react";
import { Link } from "react-router-dom";

const QuizPage = ({ quizName, questions, setQuizSubmitted }) => {
  return (
    <div>
      <h1>{quizName}</h1>
      {questions.map((item, index) => (
        <div className="question-container" key={index}>
          <h3 className="question">{item.question}</h3>

          <ul className="option-container">
            {item.options.map((option, i) => (
              <li key={i} className="options">
                <input
                  type="radio"
                  name={item.question + index}
                  id={option + i + index}
                  onClick={() => {
                    item.userAnswer = i + 1;
                  }}
                />
                <label htmlFor={option + i + index}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {questions.map((item) => item.userAnswer !== null) && (
        <button className="submit-answers">
          <Link to="/quiz+result" onClick={() => setQuizSubmitted(true)}>
            Submit
          </Link>
        </button>
      )}
    </div>
  );
};

export default QuizPage;
