import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddQuestions = ({ questions, setQuestions, setQuizName }) => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestions = () => {
    setQuestions([
      {
        question: question,
        correctAnswer: correctAnswer,
        options: [option1, option2, option3, option4],
      },
    ]);
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectAnswer("");
  };

  return (
    <div>
      <div className="input-container">
        <div className="input">
          <label htmlFor="QuizName">Quiz Name:</label>
          <input
            type="text"
            onChange={(event) => setQuizName(event.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="QuizName">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="QuizName">Option 1: </label>
          <input
            type="text"
            value={option1}
            onChange={(event) => setOption1(event.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="QuizName">Option 2: </label>
          <input
            type="text"
            value={option2}
            onChange={(event) => setOption2(event.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="QuizName">Option 3: </label>
          <input
            type="text"
            value={option3}
            onChange={(event) => setOption3(event.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="QuizName">Option 4: </label>
          <input
            type="text"
            value={option4}
            onChange={(event) => setOption4(event.target.value)}
          />
        </div>

        <div className="input">
          <label htmlFor="QuizName">Correct Answer:</label>
          <input
            type="text"
            value={correctAnswer}
            onChange={(event) => setCorrectAnswer(event.target.value)}
          />
        </div>

        <div className="proceed-buttons">
          <button
            className="start"
            onClick={() => questions && console.log(questions)}
          >
            <Link to="/quiz-page">Start Quiz</Link>
          </button>
          <button className="add-another" onClick={handleAddQuestions}>
            Add Another Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
