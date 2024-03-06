/* eslint-disable react/prop-types */
import Nav from "./Nav";

function Welcome({ send }) {
  return (
    <>
      <h1>Welcome to the Javascript Quiz</h1>
      <p>
        {`Whether you're a seasoned JavaScript developer or just getting started, this quiz is designed to challenge your understanding of the language and help you learn along the way. `}
      </p>

      <Nav send={send} action={"START"} />
    </>
  );
}

export default Welcome;
