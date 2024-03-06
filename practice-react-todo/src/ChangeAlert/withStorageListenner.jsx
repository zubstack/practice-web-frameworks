import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../TasksContext/TaskContext";

function withStorageListenner(WrappedComponent) {
  return function WrappedComponentWithStorageListener() {
    const { synchronizeStorage } = useContext(TaskContext);

    //When changes come from a tab other than the current one:
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      function onChange(change) {
        if (change.key === "TASKER_V1") {
          setStorageChange(true);
        }
      }

      window.addEventListener("storage", onChange);
      //This is the cleanup function that removes the event listener when the component unmounts.
      return () => window.removeEventListener("storage", onChange);
    }, []);
    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={setStorageChange}
        synchronizeStorage={synchronizeStorage}
      />
    );
  };
}

export { withStorageListenner };
