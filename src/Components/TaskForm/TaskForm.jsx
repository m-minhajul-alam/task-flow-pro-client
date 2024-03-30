import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const TaskForm = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newTask = {
      title: data?.title,
      description: data?.description,
      deadline: data?.deadline,
      priority: data?.priority,
      ownerEmail: user?.email,
    };

    axiosPublic.post("/tasks", newTask).then((res) => {
      if (res.data.insertedId) {
        toast.success("Task added!");
        reset();
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center my-8">
      <Helmet>
        <title>Task Form | TaskFlowPro</title>
      </Helmet>

      <div className="flex-1">
        <h2 className="text-3xl text-center text-primary font-bold mb-3">
          Add New Task
        </h2>
        <img
          className="hidden md:block"
          src="https://i.ibb.co/6JKFGYs/tasks.png"
          alt=""
        />
      </div>

      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
          {/* Task Title */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              {...register("title", { required: true })}
              className="shadow appearance-none border rounded-full w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none"
            />
          </div>

          {/* Task Description */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              {...register("description")}
              className="shadow appearance-none border rounded-3xl w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none"
            />
          </div>

          {/* Task Deadline */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deadline"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              {...register("deadline")}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </div>

          {/* Task Priority */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="priority"
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              {...register("priority")}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full rounded-full text-lg text-white font-bold transition-transform hover:scale-105"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
