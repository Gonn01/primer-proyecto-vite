import { TaskCard } from "./TaskCard";
import PropTypes from "prop-types";

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <div>no hay tareas</div>;
  }
  return (
    <>
      <div>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} deleteTask={deleteTask} />
        ))}
      </div>
    </>
  );
}
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default TaskList;
