/* eslint-disable react/prop-types */
import { useState } from "react";
import Nav from "./Nav";
import "./Question.css";

function Question({ context, send, number }) {
  const { questions } = context;
  const questionIndex = number - 1;
  const currentQuestion = questions[questionIndex];

  const lastQuestion = number === questions.length;
  const action = lastQuestion ? "FINISH" : "CONTINUE";
  const [currentValue, setCurrentValue] = useState("*");

  return (
    <>
      <h3>Question #{number}</h3>
      <div className="question__container">
        <h4>{currentQuestion.question}</h4>
        {currentQuestion.alternatives.map((option, index) => (
          <div key={index}>
            <input
              onChange={(e) => setCurrentValue(parseInt(e.target.id))}
              type="radio"
              id={index}
              name="drone"
            />
            <label htmlFor={index}>{option}</label>
          </div>
        ))}
      </div>

      <Nav send={send} action={action} currentValue={currentValue} />
    </>
  );
}

export default Question;
