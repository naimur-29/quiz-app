import React, { useState } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import AddQuestions from "./components/pages/AddQuestions/AddQuestions";
import QuizPage from "./components/pages/QuizPage/QuizPage";
import QuizResult from "./components/pages/QuizResult/QuizResult";
// import Settings from "./components/pages/Settings/Settings";
import Error from "./components/Error/Error";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [quizName, setQuizName] = useState("");
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

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
              setIsQuestionSubmitted={setIsQuestionSubmitted}
              setIsQuizSubmitted={setIsQuizSubmitted}
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
              setIsQuestionSubmitted={setIsQuestionSubmitted}
            />
          }
        />

        <Route
          path="/quiz+page"
          element={
            isQuestionSubmitted ? (
              <QuizPage
                quizName={quizName}
                questions={questions}
                setIsQuizSubmitted={setIsQuizSubmitted}
                setQuestions={setQuestions}
              />
            ) : (
              <Navigate to="*" />
            )
          }
        />

        <Route
          path="/quiz+result"
          element={
            isQuizSubmitted ? (
              <QuizResult
                questions={questions}
                score={score}
                setScore={setScore}
              />
            ) : (
              <Navigate to="*" />
            )
          }
        />

        <Route path="/settings" element={<Error />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
