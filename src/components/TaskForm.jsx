import { useState } from "react";
import { useTaskContext } from "../context/TaskContext.jsx";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="titulo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="descripccion"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default TaskForm;
