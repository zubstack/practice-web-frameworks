// import { useContext } from "react";
// import { TaskContext } from "../TasksContext/TaskContext";
import { useContext } from "react";
import "./TaskCounter.css";
import { TaskContext } from "../TasksContext/TaskContext";
// eslint-disable-next-line react/prop-types
function TaskCounter({ loading }) {
  const { isAllEmpty, isAllCompleted, completedTasks, totalTasks } =
    useContext(TaskContext);
  let mesagge = (
    <>
      You have completed{" "}
      <span className="TaskCounter-span">{completedTasks} </span>
      of <span className="TaskCounter-span">{totalTasks} </span> tasks
    </>
  );
  if (isAllCompleted) {
    mesagge = <span className="TaskCounter-span">All tasks completed!</span>;
  }

  if (isAllEmpty) {
    mesagge = <span className="TaskCounter">NOTHING HERE!</span>;
  }

  return (
    <>
      <h1 className={`TaskCounter ${loading ? "TaskCounter--loading" : ""}`}>
        {mesagge}
      </h1>
    </>
  );
}

export default TaskCounter;
