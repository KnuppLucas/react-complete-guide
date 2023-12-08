import React from "react";
import quizIsCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

function Summary({ userAnswers }) {
  const skippeds = userAnswers.filter((answer) => answer === null);
  const corrects = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedsShare = Math.round(
    (skippeds.length / userAnswers.length) * 100
  );

  const correctsShare = Math.round(
    (corrects.length / userAnswers.length) * 100
  );

  const wrongsShare = 100 - skippedsShare - correctsShare;

  return (
    <div id="summary">
      <img src={quizIsCompleteImg} alt="Quiz is complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedsShare}%</span>
          <span className="text">Skippeds</span>
        </p>
        <p>
          <span className="number">{correctsShare}%</span>
          <span className="text">Corrects</span>
        </p>
        <p>
          <span className="number">{wrongsShare}%</span>
          <span className="text">Wrongs</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answers, index) => {
          let cssClasses = "user-answer";
          if (answers === null) {
            cssClasses += " skipped";
          } else if (answers === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answers ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
