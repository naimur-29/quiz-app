import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddQuestions = ({ questions, setQuestions, quizName, setQuizName }) => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const newQuestion = {
    question: question,
    options: [option1, option2, option3, option4],
    correctAnswer: correctAnswer,
    userAnswer: null,
  };

  const handleAddQuestions = () => {
    setQuestions([...questions, newQuestion]);
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
          <label htmlFor="QuizName">Quiz Name: </label>
          <textarea
            name="QuizName"
            cols="20"
            rows="3"
            value={quizName}
            onChange={(event) => setQuizName(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label htmlFor="Question">Question: </label>
          <textarea
            name="Question"
            cols="20"
            rows="3"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label htmlFor="Option1">Option 1: </label>
          <textarea
            name="Option1"
            cols="20"
            rows="2"
            value={option1}
            onChange={(event) => setOption1(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label htmlFor="Option2">Option 2: </label>
          <textarea
            name="Option2"
            cols="20"
            rows="2"
            value={option2}
            onChange={(event) => setOption2(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label htmlFor="Option3">Option 3: </label>
          <textarea
            name="Option3"
            cols="20"
            rows="2"
            value={option3}
            onChange={(event) => setOption3(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label htmlFor="Option4">Option 4: </label>
          <textarea
            name="Option4"
            cols="20"
            rows="2"
            value={option4}
            onChange={(event) => setOption4(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label htmlFor="CorrectAnswer">Correct Answer No: </label>
          <input
            type="text"
            value={correctAnswer}
            onChange={(event) => setCorrectAnswer(event.target.value)}
          />
        </div>

        <div className="proceed-buttons">
          {questions.length !== 0 && quizName && (
            <button
              className="start"
              onClick={() => {
                questions && console.log(questions);
              }}
            >
              <Link to="/quiz+page">Start Quiz</Link>
            </button>
          )}

          <button
            className="add-another"
            onClick={() => {
              newQuestion?.question &&
              newQuestion?.options &&
              newQuestion?.correctAnswer
                ? handleAddQuestions()
                : alert("hello");
            }}
          >
            Add Question
          </button>
        </div>
        <h3 className="questions-info">
          Number of questions: {questions.length}
        </h3>
      </div>
    </div>
  );
};

export default AddQuestions;
