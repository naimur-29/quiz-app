import React, { useState } from "react";
import { Route, Routes, Outlet, Link, Navigate } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddQuestions from "./components/AddQuestions";
import QuizPage from "./components/QuizPage";
import QuizResult from "./components/QuizResult";
import Settings from "./components/Settings";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [quizName, setQuizName] = useState("");
  const [questionSubmit, setQuestionSubmit] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <div className="page-container">
              <Outlet />
            </div>
          </div>
        }
      >
        <Route
          index
          element={
            <Home
              setQuestions={setQuestions}
              setQuizName={setQuizName}
              setQuestionSubmit={setQuestionSubmit}
              setQuizSubmitted={setQuizSubmitted}
            />
          }
        />

        <Route
          path="/add+questions"
          element={
            <AddQuestions
              questions={questions}
              setQuestions={setQuestions}
              quizName={quizName}
              setQuizName={setQuizName}
              setQuestionSubmit={setQuestionSubmit}
            />
          }
        />

        <Route
          path="/quiz+page"
          element={
            questionSubmit ? (
              <QuizPage
                quizName={quizName}
                questions={questions}
                setQuizSubmitted={setQuizSubmitted}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/quiz+result"
          element={
            quizSubmitted ? (
              <QuizResult questions={questions} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route path="/settings" element={<Settings />} />

        <Route
          path="*"
          element={
            <div className="error-container">
              <h1 className="error">404 Not Found</h1>
              <Link to="/" className="return-home">
                Back to home
              </Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
