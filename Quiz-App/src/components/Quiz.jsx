import React, { useRef } from "react";
import { useState } from "react";

import QUESTIONS from "../questions";

import quizIsCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import { useCallback } from "react";
import Answers from "./Answers";
import Question from "./Question";

function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(userAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, userAnswer];
      });

      setTimeout(() => {
        if (userAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizIsCompleteImg} alt="Quiz is complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question key={activeQuestionIndex} questionText={QUESTIONS[activeQuestionIndex].text} answers={QUESTIONS[activeQuestionIndex].answers} onSelectAnswer={handleSelectAnswer} answerState={answerState} selectedAnswer={userAnswers[userAnswers.length - 1]} onSkipAnswer={handleSkipAnswer}/>
    </div>
  );
}

export default Quiz;
