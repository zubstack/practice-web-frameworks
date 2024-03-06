import "./TaskForm.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../TasksContext/TaskContext";
import Edit from "../pages/Edit";
function TaskForm({ task }) {
  const { addTask, editTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState(task?.title || "");
  console.log(userInput);
  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    if (task?.id) {
      editTask(userInput, task.id);
    } else {
      addTask(userInput);
    }
  };

  const onCancel = () => {
    navigate("/");
  };

  const onChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="Form-Container">
      <form className="TaskForm" onSubmit={onSubmit}>
        <label htmlFor="">Insert task:</label>
        <textarea
          name=""
          id=""
          placeholder="Write a task"
          onChange={onChange}
          value={userInput}
          autoFocus="autoFocus"
        ></textarea>
        <div className="TaskForm-button-container">
          <button
            className="TaskForm-button TaskForm-button--cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="TaskForm-button TaskForm-button--add"
            type="submit"
          >
            {task?.id ? "Edit task" : "Add task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
