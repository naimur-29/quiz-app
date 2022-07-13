import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./AddQuestions.css";

const AddQuestions = ({
  questions,
  setQuestions,
  quizName,
  setQuizName,
  setQuestionSubmit,
}) => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const newQuestion = {
    question: question,
    options: [option1, option2, option3, option4],
    correctAnswer: Number(correctAnswer),
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
    <div className="add-questions-container">
      <h1 className="title">Add Your Questions For The Quiz</h1>
      <h2 className="questions-info">
        Questions:{" "}
        {questions.length < 10 ? "0" + questions.length : questions.length}
      </h2>
      <div className="input-container">
        <div className="input">
          <label name="QuizName" htmlFor="QuizName">
            Quiz Name
          </label>
          <textarea
            name="QuizName"
            cols="20"
            rows="3"
            value={quizName}
            onChange={(event) => setQuizName(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label name="Question" htmlFor="Question">
            Question
          </label>
          <textarea
            name="Question"
            cols="20"
            rows="3"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label name="Option1" htmlFor="Option1">
            Option 1
          </label>
          <textarea
            name="Option1"
            cols="20"
            rows="2"
            value={option1}
            onChange={(event) => setOption1(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label name="Option2" htmlFor="Option2">
            Option 2
          </label>
          <textarea
            name="Option2"
            cols="20"
            rows="2"
            value={option2}
            onChange={(event) => setOption2(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label name="Option3" htmlFor="Option3">
            Option 3
          </label>
          <textarea
            name="Option3"
            cols="20"
            rows="2"
            value={option3}
            onChange={(event) => setOption3(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label name="Option4" htmlFor="Option4">
            Option 4
          </label>
          <textarea
            name="Option4"
            cols="20"
            rows="2"
            value={option4}
            onChange={(event) => setOption4(event.target.value)}
          ></textarea>
        </div>

        <div className="input">
          <label name="CorrectAnswer" htmlFor="CorrectAnswer">
            Correct Answer No
          </label>
          <textarea
            name="CorrectAnswer"
            cols="20"
            rows="2"
            value={correctAnswer}
            onChange={(event) => setCorrectAnswer(event.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="proceed-buttons">
        {questions.length !== 0 && quizName && (
          <button
            className="start-quiz"
            onClick={() => setQuestionSubmit(true)}
          >
            <Link to="/quiz+page">Start Quiz</Link>
          </button>
        )}

        <button
          className="add-question"
          onClick={() => {
            newQuestion?.question &&
            newQuestion?.options &&
            newQuestion?.correctAnswer > 0 &&
            newQuestion?.correctAnswer < 5
              ? handleAddQuestions()
              : alert("Please fill out all the information properly!!");
            window.scrollTo(0, 0);
          }}
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default AddQuestions;
