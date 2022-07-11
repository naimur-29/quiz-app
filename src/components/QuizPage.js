import React from "react";
import { Link } from "react-router-dom";

const QuizPage = ({ quizName, questions }) => {
  return (
    <div>
      <h1>{quizName}</h1>
      {questions.map((item, index) => (
        <div className="question-container" key={index}>
          <h3 className="question">{item.question}</h3>

          <ul className="option-container">
            {item.options.map((option, index) => (
              <li key={index} className="options">
                <input
                  type="radio"
                  name={item.question}
                  id={index}
                  onClick={() => {
                    item.userAnswer = index + 1;
                    console.log(item.userAnswer);
                  }}
                />
                <label htmlFor={index}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {questions.map((item) => item.userAnswer) && (
        <button className="submit-answers">
          <Link to="/quiz+result">Submit</Link>
        </button>
      )}
    </div>
  );
};

export default QuizPage;
