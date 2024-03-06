const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Define your JavaScript questions in an array of JSON objects
const questions = [
  {
    question: "What is the result of '5' + 3 in JavaScript?",
    alternatives: ["53", "8", "NaN"],
    answerIndex: 0,
  },
  {
    question:
      "Which of the following is a correct way to declare a variable in JavaScript?",
    alternatives: ["var myVar = 10;", "let myVar = 10;", "const myVar = 10;"],
    answerIndex: 1,
  },
  {
    question:
      "What does the 'typeof' operator return for an undefined variable in JavaScript?",
    alternatives: ["'undefined'", "'null'", "'error'", "'object'"],
    answerIndex: 0,
  },
];

// Define a route to serve the questions
app.get("/questions", (req, res) => {
  res.json(questions);
});

// Start the Express server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
