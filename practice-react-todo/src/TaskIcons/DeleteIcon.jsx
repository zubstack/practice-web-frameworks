import TaskIcons from "./TaskIcons";

function DeleteIcon({ onRemove }) {
  return <TaskIcons onClick={onRemove} type="delete" color="gray" />;
}

export default DeleteIcon;
