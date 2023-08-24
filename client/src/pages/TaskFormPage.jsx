import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (id) {
      await updateTask(id, data);
      toast.success("Tarea actualizada", { position: "bottom-right" });
    } else {
      await createTask(data);
      toast.success("Tarea creada", { position: "bottom-right" });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (id) {
        const { data } = await getTask(id);
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>this field is required</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>this field is required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>
      {id && (
        <button
          className="bg-red-500 p-3 rounded-lg block w-full mt-3"
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteTask(id);
              toast.success("Tarea eliminada", { position: "bottom-right" });
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};
