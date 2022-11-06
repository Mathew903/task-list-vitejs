import { useTaskContext } from "../context/TaskContext.jsx";
import TaskCard from "./TaskCard.jsx";

const TaskList = () => {
  const { tasks } = useTaskContext();
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
