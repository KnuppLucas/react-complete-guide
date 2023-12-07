import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remaingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout;
    }, timeout);

    return () => {
      clearInterval(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remaingTime} />;
}

export default QuestionTimer;
