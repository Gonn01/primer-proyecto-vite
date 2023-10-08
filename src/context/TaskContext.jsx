import PropTypes from "prop-types";
import { tasks as data } from "../tasks";
import { useState, useEffect, createContext } from "react";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  // cuando TaskContextProvider es creado se activa y a tasks le da el
  // valor de data que esta importado arriba
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
  function DeleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }
  return (
    <TaskContext.Provider
      value={{ tasks: tasks, createTask: CreateTask, deleteTask: DeleteTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
export default TaskContextProvider;

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
