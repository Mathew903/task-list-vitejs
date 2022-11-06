import { useTaskContext } from "../context/TaskContext.jsx";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTaskContext();
  return (
    <>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </>
  );
};

export default TaskCard;
