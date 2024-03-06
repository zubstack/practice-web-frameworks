import { useContext } from "react";
import "./TaskSearch.css";
import { TaskContext } from "../TasksContext/TaskContext";

// eslint-disable-next-line react/prop-types
function TaskSearch({ loading }) {
  const { searchValue, setSearchValue } = useContext(TaskContext);
  return (
    <>
      <input
        className="TaskSearch"
        type="text"
        placeholder="Write task here.."
        value={searchValue}
        disabled={loading}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </>
  );
}

export default TaskSearch;
