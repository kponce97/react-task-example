/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

// eslint-disable-next-line no-unused-vars
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    ); /* Filtra los elementos diferente de taskId */
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <>
      <TaskContext.Provider
        value={{
          tasks: tasks,
          deleteTask: deleteTask,
          createTask: createTask,
        }}
      >
        {/* Componente naranja */}
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
