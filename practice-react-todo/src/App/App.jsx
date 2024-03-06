import { HashRouter, Route, Routes } from "react-router-dom";
import TaskForm from "../TaskForm/TaskForm";
import Header from "../components/Header/Header";
import { TaskProvider } from "../TasksContext/TaskContext";
import Home from "../pages/Home";
import Edit from "../pages/Edit";

function App() {
  return (
    <HashRouter>
      <Header />
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<TaskForm />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </TaskProvider>
    </HashRouter>
  );
}

export default App;
