export const fetchQuestions = () =>
  fetch("http://localhost:3001/questions").then((response) => response.json());
// fetch("http://localhost:3001/questions");
