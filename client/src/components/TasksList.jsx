import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function loadTasks() {
      const response = await getAllTasks();
      // console.log(response);
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
