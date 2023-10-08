import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <TaskContext.Consumer>
      {() => (
        <div className="bg-gray-800 text-white p-3 rounded-md">
          <h1 className="font-bold text-xl capitalize">{task.title}</h1>
          <h2 className="text-gray-400 text-sm">{task.descripcion}</h2>
          <button
            className="bg-red-500 px-2 py-1 rounded mt-4 hover:bg-red-200 "
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      )}
    </TaskContext.Consumer>
  );
}
TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};
