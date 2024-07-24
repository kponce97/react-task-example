/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { RiDeleteBin6Fill } from "react-icons/ri";

function TaskCard({ task }) {
	const { deleteTask } = useContext(TaskContext);
	return (
		<div className="bg-gray-800 text-white p-4 rounded-md hover:scale-125 hover:shadow-lg">
			<h1 className="text-xl font-bold capitalize">{task.title}</h1>{" "}
			{/* Muestra el titulo */}
			<p className="text-gray-500 text-sm">{task.description}</p>{" "}
			{/* Muestra la descripcion */}
			<button
				className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
				onClick={() => deleteTask(task.id)}
			>
				<RiDeleteBin6Fill />
			</button>
			{/* Devuelve el ID */}
		</div>
	);
}

export default TaskCard;
