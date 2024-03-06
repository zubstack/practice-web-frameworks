import { useMachine } from "@xstate/react";
import { testMachine } from "../machines/testMachine";
import StepsLayout from "./StepsLayout";

function QuizLayout() {
  const [state, send] = useMachine(testMachine);

  return (
    <>
      <StepsLayout state={state} send={send} />
    </>
  );
}

export default QuizLayout;
