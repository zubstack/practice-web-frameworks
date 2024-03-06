import { FaGithub } from "react-icons/fa";
import "./Nav.css";
function Nav() {
  return (
    <nav className="Nav-Container">
      <h1>TASKER</h1>
      <ul>
        <li>
          <a href="https://github.com/mt-alejo/react-todo-practice">
            <FaGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
