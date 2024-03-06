import TaskIcons from "./TaskIcons";

function EditIcon({ onEdit }) {
  return <TaskIcons onClick={onEdit} type="edit" color="gray" />;
}

export default EditIcon;
