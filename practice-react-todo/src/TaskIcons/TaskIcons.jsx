import "./TaskIcons.css";
import { FaCheck, FaPen } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const iconTypes = {
  check: (color) => <FaCheck className="Icon-svg" fill={color} />,
  delete: (color) => <FaTimes className="Icon-svg" fill={color} />,
  edit: (color) => <FaPen className="Icon-svg" fill={color} />,
  close: (color) => <FaTimes className="Icon-svg" fill={color} />,
};
function TaskIcons({ type, color, onClick }) {
  return (
    <span onClick={onClick} className={`Icon Icon-${type}`}>
      {iconTypes[type](color)}
    </span>
  );
}

export default TaskIcons;
