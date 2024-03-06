import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../TasksContext/TaskContext";
import TaskForm from "../TaskForm/TaskForm";

function Edit() {
  const { tasksList } = useContext(TaskContext);
  const params = useParams();
  const currentTask = tasksList?.find((task) => task.id === params.id);
  return (
    <>
      <TaskForm task={currentTask} />
    </>
  );
}

export default Edit;
