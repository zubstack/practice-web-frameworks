import { useContext } from "react";
import "./TasksContainer.css";
import { TaskContext } from "../TasksContext/TaskContext";
function TasksContainer({
  onLoading,
  onEmpty,
  onError,
  render,
  onEmptyResults,
}) {
  const { error, loading, searchedTasks, searchValue } =
    useContext(TaskContext);
  console.log(searchedTasks);
  return (
    //Applying render functions:
    <section className="TasksContainer">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTasks.length && searchValue == "" && onEmpty()}
      {!searchedTasks.length &&
        searchValue != "" &&
        onEmptyResults(searchValue)}
      {loading && ""}
      {!loading && !error && <ul>{searchedTasks?.map(render)}</ul>}
    </section>
  );
}

export default TasksContainer;
