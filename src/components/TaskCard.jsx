import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <TaskContext.Consumer>
      {() => (
        <div>
          <h1>{task.title}</h1>
          <h2>{task.descripcion}</h2>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </TaskContext.Consumer>
  );
}
TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};
