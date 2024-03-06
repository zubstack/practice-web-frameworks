// import { useContext } from "react";
// import { TaskContext } from "../TasksContext/TaskContext";
import { useNavigate } from "react-router-dom";
import "./ButtonAddTask.css";
import { FaPlus } from "react-icons/fa";

function ButtonAddTask() {
  const navigate = useNavigate();
  return (
    <button>
      <span
        className="ButtonAddTask"
        type="button"
        onClick={() => {
          navigate("/new", {
            state: {
              prev: "foo",
            },
          });
        }}
      >
        <FaPlus />
      </span>
    </button>
  );
}

export default ButtonAddTask;
