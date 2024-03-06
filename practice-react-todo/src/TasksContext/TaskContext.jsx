import { createContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const {
    saveLocalStorage: setTasksList,
    state,
    synchronizeStorage,
  } = useLocalStorage("TASKER_V1", []);
  const { loading, error, itemsList: tasksList } = state;

  //Each task must to have an id

  tasksList.map((task) => (task.id = uuidv4()));

  console.log(tasksList);

  const completedTasks = tasksList.filter((task) => task.done === true).length;
  const totalTasks = tasksList.length;
  const [searchValue, setSearchValue] = useState("");

  const searchedTasks = tasksList.filter((task) => {
    let taskTitle = task.title.toLowerCase();
    let searchedValue = searchValue.toLowerCase();

    return taskTitle.includes(searchedValue);
  });

  const isAllCompleted = tasksList.every((task) => !!task.done);
  const isAllEmpty = tasksList.length === 0 ? true : false;

  const toggleDone = (id) => {
    const copyCurrentTaskList = [...tasksList];
    const indexTask = copyCurrentTaskList.findIndex((task) => task.id === id);
    copyCurrentTaskList[indexTask].done
      ? (copyCurrentTaskList[indexTask].done = false)
      : (copyCurrentTaskList[indexTask].done = true);
    setTasksList(copyCurrentTaskList);
  };

  const removeTask = (id) => {
    const copyCurrentTaskList = [...tasksList];

    const actualizedTaskList = copyCurrentTaskList.filter(
      (task) => task.id !== id
    );
    setTasksList(actualizedTaskList);
  };

  const editTask = (update, id) => {
    const copy = [...tasksList];
    const currentIndex = tasksList.findIndex((task) => task.id == id);
    copy[currentIndex].title = update;
    console.log(copy);
    setTasksList(copy);
    synchronizeStorage();
    // console.log(update);
  };

  const addTask = (userImput) => {
    const newTask = createTask(userImput, false);
    setTasksList([...tasksList, newTask]);
    synchronizeStorage();
  };

  const createTask = (title, done) => {
    return {
      title,
      done,
    };
  };

  return (
    <TaskContext.Provider
      value={{
        loading,
        error,
        tasksList,
        synchronizeStorage,
        setTasksList,
        isAllEmpty,
        isAllCompleted,
        completedTasks,
        totalTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        toggleDone,
        removeTask,
        addTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
