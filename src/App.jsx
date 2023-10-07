import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function CreateTask(taskTitle, desc) {
    //creo un nuevo array y le agrega la task
    setTasks([
      ...tasks,
      { title: taskTitle, id: tasks.length, descripcion: desc },
    ]);
  }
  function deleteTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }
  return (
    <>
      <TaskForm createTask={CreateTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
