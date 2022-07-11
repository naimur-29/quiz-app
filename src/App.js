import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

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

  console.log(quizName);

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add+questions"
            element={
              <AddQuestions
                questions={questions}
                setQuestions={setQuestions}
                setQuizName={setQuizName}
              />
            }
          />
          <Route path="/quiz+page" element={<QuizPage />} />
          <Route path="/quiz+result" element={<QuizResult />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
