import React, { useState, useEffect } from "react";

const QuizResult = ({ questions }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let tempScore = 0;
    questions.forEach((element) => {
      tempScore += element.userAnswer === element.correctAnswer ? 1 : 0;
    });
    setScore(tempScore);
  }, [questions]);

  return (
    <div>
      <h1>Score: {score < 10 ? `0${score}` : score}</h1>
    </div>
  );
};

export default QuizResult;
