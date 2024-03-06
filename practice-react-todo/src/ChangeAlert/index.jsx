import { FaRedo } from "react-icons/fa";
import "./ChangeAlert.css";
import { withStorageListenner } from "./withStorageListenner";

function ChangeAlert({ show, toggleShow, synchronizeStorage }) {
  if (show) {
    return (
      <div
        className="ChangeAlert"
        onClick={() => {
          toggleShow(false);
          synchronizeStorage();
        }}
      >
        Please reaload{" "}
        <span>
          <FaRedo />
        </span>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListenner = withStorageListenner(ChangeAlert);

export { ChangeAlertWithStorageListenner };
