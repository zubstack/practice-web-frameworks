/* eslint-disable react/prop-types */
import "./TaskItem.css";
import CheckIcon from "../TaskIcons/CheckIcon";
import DeleteIcon from "../TaskIcons/DeleteIcon";
import EditIcon from "../TaskIcons/EditIcon";
import { useContext } from "react";
import { TaskContext } from "../TasksContext/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskItem({ item }) {
  const navigate = useNavigate();
  const { toggleDone, removeTask } = useContext(TaskContext);

  return (
    <li className="TaskItem">
      <CheckIcon onToggle={() => toggleDone(item.id)} done={item?.done} />
      {/* <button onClick={() => toggleDone(item.id)}>DONE</button> */}

      <p
        className={`TaskItem-Task ${
          item.done ? " TaskItem-Task--complete" : ""
        }`}
      >
        {item?.title}{" "}
      </p>
      <div className="flex gap">
        <EditIcon onEdit={() => navigate(`/edit/${item.id}`)} />
        <DeleteIcon onRemove={() => removeTask(item.id)} />
      </div>
    </li>
  );
}

export default TaskItem;
