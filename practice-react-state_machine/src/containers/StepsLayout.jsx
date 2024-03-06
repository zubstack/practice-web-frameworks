/* eslint-disable react/prop-types */
import Question from "../components/Question";
import Results from "../components/Results";
import Welcome from "../components/Welcome";

function StepsLayout({ state, send }) {
  // console.log("state.context", state.context);
  const render = () => {
    if (state.matches("start")) return <Welcome send={send} />;
    if (state.matches("question_one"))
      return <Question number={1} context={state.context} send={send} />;
    if (state.matches("question_two"))
      return <Question number={2} context={state.context} send={send} />;
    if (state.matches("question_three"))
      return <Question number={3} context={state.context} send={send} />;
    if (state.matches("results"))
      return <Results context={state.context} send={send} />;
  };
  return <>{render()}</>;
}

export default StepsLayout;
