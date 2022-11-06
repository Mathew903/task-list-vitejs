import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { tareas } from "../tasks.js";

const TaskContext = createContext();
export const useTaskContext = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tareas);
  }, []);

  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
