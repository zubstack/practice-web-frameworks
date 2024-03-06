import { Children, cloneElement, useContext } from "react";
import { TaskContext } from "../TasksContext/TaskContext";

function TasksHeader({ children }) {
  const { loading } = useContext(TaskContext);
  //Portal to each child of <TasksHeader>:
  return (
    <>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </>
  );
}

export default TasksHeader;
