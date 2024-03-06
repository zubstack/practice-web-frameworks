import TaskIcons from "./TaskIcons";

export default function CheckIcon({ done, onToggle }) {
  return (
    <TaskIcons
      type="check"
      color={done ? "greenyellow" : "gray"}
      onClick={onToggle}
    />
  );
}
