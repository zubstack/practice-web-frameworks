import { ChangeAlertWithStorageListenner } from "../ChangeAlert";
import "./HomePage.css";
import TasksHeader from "../TasksHeader";
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import LoadingError from "../LoadingError";
import LoadingState from "../LoadingState/LoadingState";
import LoadingEmpty from "../LoadingEmpty";
import LoadingNoResults from "../LoadingNoResults";
import TaskItem from "../TaskItem/TaskItem";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
function Home() {
  return (
    <>
      <TasksHeader>
        <TaskCounter />
        <TaskSearch />
      </TasksHeader>
      <TasksContainer
        onError={() => <LoadingError />}
        onLoading={() => <LoadingState />}
        onEmpty={() => <LoadingEmpty />}
        onEmptyResults={(search) => <LoadingNoResults search={search} />}
        render={(task) => <TaskItem key={task.id} item={task} />}
      ></TasksContainer>
      <ButtonAddTask />
      <ChangeAlertWithStorageListenner />
    </>
  );
}

export default Home;
