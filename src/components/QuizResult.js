import React, { useState, useEffect } from "react";

const QuizResult = ({ questions }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(
      questions.map(
        (item) => score + (item.correctAnswer === item.userAnswer ? 1 : 0)
      )
    );
  }, []);

  return (
    <div>
      <h1>Score: {score}</h1>
    </div>
  );
};

export default QuizResult;
