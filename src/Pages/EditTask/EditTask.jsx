import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const EditTask = () => {
  //   const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { user } = useAuth();
  const navigaet = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    isError,
    error,
    isFetching,
    data: tasks,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${id}`);
      return res.data;
    },
  });

  if (isPending || isFetching) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
    );
  }

  if (!tasks) {
    return (
      <div className="h-screen flex justify-center items-center text-red-600">
        {error.message}
        No Data Found
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex justify-center items-center text-red-600">
        {error.message}
      </div>
    );
  }

  const onSubmit = (data) => {
    const editedTask = {
      title: data?.title,
      description: data?.description,
      deadline: data?.deadline,
      priority: data?.priority,
      ownerEmail: user?.email,
    };
    console.log(editedTask);

    const id = tasks?._id;
    axiosPublic.patch(`/tasks/${id}`, editedTask).then((data) => {
      if (data.data.modifiedCount > 0) {
        toast.success("Task Editing Succes!");
        navigaet("/taskdashbord");
        reset();
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center my-8">
      <Helmet>
        <title> Edit Task | TaskFlowPro</title>
      </Helmet>

      <div className="flex-1">
        <h2 className="text-3xl text-center text-primary font-bold mb-3">
          Edit {tasks?.title} Task
        </h2>
        <img
          className="hidden md:block"
          src="https://i.ibb.co/KKtvfyF/Forms.png"
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
              defaultValue={tasks?.title}
              id="title"
              name="title"
              {...register("title", { required: true })}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
              defaultValue={tasks?.description}
              id="description"
              name="description"
              {...register("description")}
              className="shadow appearance-none border rounded-full w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none"
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
              defaultValue={tasks?.deadline}
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
              defaultValue={tasks.priority}
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
            Edit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
