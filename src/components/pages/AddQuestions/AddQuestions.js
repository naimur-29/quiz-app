import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./AddQuestions.css";

const AddQuestions = ({
  questions,
  setQuestions,
  quizName,
  setQuizName,
  setIsQuestionSubmitted,
}) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    options: Array(4).fill(""),
    correctAnswer: "",
    userAnswer: null,
  });

  const handleAddQuestions = () => {
    if (
      newQuestion?.question &&
      newQuestion?.options[0] &&
      newQuestion?.options[1] &&
      newQuestion?.options[2] &&
      newQuestion?.options[3] &&
      newQuestion?.correctAnswer > 0 &&
      newQuestion?.correctAnswer < 5
    ) {
      setQuestions(
        questions.length ? [...questions, newQuestion] : [newQuestion]
      );
      setNewQuestion({
        question: "",
        options: Array(4).fill(""),
        correctAnswer: "",
        userAnswer: null,
      });
    } else {
      alert("Please fill out all the information properly!!");
    }
    window.scrollTo(0, 0);
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
            value={newQuestion.question}
            onChange={(event) =>
              setNewQuestion({ ...newQuestion, question: event.target.value })
            }
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
            value={newQuestion.options[0]}
            onChange={(event) =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  event.target.value,
                  newQuestion.options[1],
                  newQuestion.options[2],
                  newQuestion.options[3],
                ],
              })
            }
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
            value={newQuestion.options[1]}
            onChange={(event) =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  newQuestion.options[0],
                  event.target.value,
                  newQuestion.options[2],
                  newQuestion.options[3],
                ],
              })
            }
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
            value={newQuestion.options[2]}
            onChange={(event) =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  newQuestion.options[0],
                  newQuestion.options[1],
                  event.target.value,
                  newQuestion.options[3],
                ],
              })
            }
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
            value={newQuestion.options[3]}
            onChange={(event) =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  newQuestion.options[0],
                  newQuestion.options[1],
                  newQuestion.options[2],
                  event.target.value,
                ],
              })
            }
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
            value={newQuestion.correctAnswer}
            onChange={(event) =>
              setNewQuestion({
                ...newQuestion,
                correctAnswer: event.target.value,
              })
            }
          ></textarea>
        </div>
      </div>

      <div className="proceed-buttons">
        {questions.length !== 0 && quizName && (
          <Link
            to="/quiz+page"
            className="start-quiz"
            onClick={() => setIsQuestionSubmitted(true)}
          >
            <button>Start Quiz</button>
          </Link>
        )}

        <button className="add-question" onClick={handleAddQuestions}>
          Add Question
        </button>
      </div>
    </div>
  );
};

export default AddQuestions;
