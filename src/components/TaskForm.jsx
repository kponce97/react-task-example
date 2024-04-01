import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// eslint-disable-next-line react/prop-types
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); /* Llamo solo el creaTask */

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title, description);

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="bg-black p-3 text-xl font-bold text-white mb-3 text-center">
          Crea tu tarea
        </h1>
        <input
          required
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)} //e.target.value: Devuelve el valor de los datos en las posiciones actuales del cursor.
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          required
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
