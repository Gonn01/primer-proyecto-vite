import PropTypes from "prop-types";
export function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <h2>{task.descripcion}</h2>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
}
TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
