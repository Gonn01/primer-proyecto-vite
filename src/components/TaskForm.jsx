import { useState } from "react";
import PropTypes from "prop-types";
function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div>
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
    </div>
  );
}
TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
};

export default TaskForm;
