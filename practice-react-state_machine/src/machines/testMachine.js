import { createMachine, assign } from "xstate";
import { fetchQuestions } from "../utils/api";

const fillQuestions = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getQuestions",
        src: () => fetchQuestions,
        onDone: {
          target: "success",
          actions: assign({
            questions: (context, event) => event.data,
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: "Failure while fetching request",
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const testMachine = createMachine({
  predictableActionArguments: true,

  id: "test_machine",
  initial: "start",
  context: {
    userAnswers: [],
    questions: [],
    error: "",
  },
  states: {
    start: {
      entry: assign((context) => {
        context.userAnswers = [];
      }),

      on: {
        START: "question_one",
      },
      ...fillQuestions,
    },
    question_one: {
      on: {
        CONTINUE: {
          target: "question_two",
          actions: assign((context, event) =>
            context.userAnswers.push(event.newAnswer)
          ),
        },
        EXIT: "start",
      },
    },
    question_two: {
      on: {
        CONTINUE: {
          target: "question_three",
          actions: assign((context, event) =>
            context.userAnswers.push(event.newAnswer)
          ),
        },
        EXIT: "start",
      },
    },
    question_three: {
      on: {
        FINISH: {
          target: "results",
          actions: assign((context, event) =>
            context.userAnswers.push(event.newAnswer)
          ),
        },
        EXIT: "start",
      },
    },
    results: {
      on: {
        RETRY: "start",
      },
    },
  },
});

export { testMachine };
