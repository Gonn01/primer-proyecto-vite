import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // del context solo quiero el createTask
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <input
        placeholder="Escribe la desc"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      ></input>
      <button>Añadir</button>
    </form>
  );
}

export default TaskForm;
