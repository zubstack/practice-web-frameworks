import { useEffect, useReducer } from "react";

const defaultTasks = [
  {
    title: "Chua",
    done: false,
  },
  {
    title: "Chuo",
    done: false,
  },
  {
    title: "Chua",
    done: false,
  },
  {
    title: "Chua",
    done: false,
  },
];

function initializeLocalStorage() {
  const storage = JSON.parse(localStorage.getItem("TASKER_V1"));
  if (!storage || storage.length === 0)
    localStorage.setItem("TASKER_V1", JSON.stringify(defaultTasks));
}

const actionTypes = () => ({
  update: "UPDATE",
  get: "GET",
  error: "ERROR",
  sync: "SYNC",
});
const reducerObject = (state, update, item) => ({
  UPDATE: {
    ...state,
    itemsList: update,
  },
  GET: {
    ...state,
    loading: false,
    error: false,
    itemsList: item,
  },
  ERROR: {
    ...state,
    loading: false,
    error: true,
  },
  SYNC: {
    ...state,
    loading: true,
    reloadStorage: (value) => !value,
  },
});

function reducer(state, action) {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.update, action.item)[action.type];
  }
  return state;
}

function useLocalStorage(itemName, initialValue) {
  initializeLocalStorage();
  const [state, dispatch] = useReducer(reducer, {
    reloadStorage: true,
    loading: true,
    error: false,
    itemsList: initialValue,
  });

  const onUpdate = (update) => dispatch({ type: "UPDATE", update: update });
  const onGet = () =>
    dispatch({
      type: "GET",
      item: [...JSON.parse(localStorage.getItem(itemName))],
    });
  const onError = () => dispatch({ type: "ERROR" });
  const onSync = () => dispatch({ type: "SYNC" });

  useEffect(() => {
    setTimeout(() => {
      try {
        onGet();
      } catch (error) {
        console.log(error);
        onError();
      }
    }, 1000);
  }, [state.reloadStorage]);

  const saveLocalStorage = (actualizedList) => {
    onUpdate(actualizedList);
    let tasksListString = JSON.stringify(actualizedList);
    localStorage.setItem(itemName, tasksListString);
  };

  const synchronizeStorage = () => {
    onSync();
  };

  return {
    state,
    saveLocalStorage,
    synchronizeStorage,
  };
}

export { useLocalStorage };
