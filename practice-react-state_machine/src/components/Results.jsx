/* eslint-disable react/prop-types */
import Nav from "./Nav";
import "./Results.css";

function Results({ context, send }) {
  const { userAnswers, questions } = context;
  const correctAnswers = questions.map((question) => question.answerIndex);
  const check = userAnswers.map((answer, index) => {
    if (answer === "*") {
      return answer;
    }
    return answer === correctAnswers[index];
  });
  let counterTrue = 0;
  let counterFalse = 0;
  let counterNotAnswer = 0;

  for (const value of check) {
    if (value) {
      if (value === "*") {
        counterNotAnswer++;
      } else {
        counterTrue++;
      }
    } else {
      counterFalse++;
    }
  }
  return (
    <>
      <h2>Results:</h2>
      <div className="results__container">
        <p>
          Goods:
          <span>{counterTrue}</span>
        </p>
        <p>
          Bads:
          <span>{counterFalse}</span>
        </p>
        <p>
          Not awsered:
          <span>{counterNotAnswer}</span>
        </p>
      </div>
      <Nav send={send} action={"RETRY"} />
    </>
  );
}

export default Results;
