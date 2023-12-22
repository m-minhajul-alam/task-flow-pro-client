import { useContext } from "react";
import { MdDragIndicator, MdDelete, MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const TaskDashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    isError,
    isFetching,
    error,
    refetch,
    data: tasks,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
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

  const ongoingTasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
  ];
  const completedTasks = [{ id: 3, title: "Task 3" }];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="my-5">
      {/* user profile */}
      <div className="flex flex-col md:flex-row justify-around items-center p-4 gap-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="rounded-full h-24 md:h-12 w-24 md:w-12 mr-4"
          />
          <div className="text-center md:text-start">
            <h2 className="text-xl font-semibold">{`Welcome ${
              user?.displayName || ""
            }!`}</h2>
            <p className="text-gray-600">{`(${
              user?.email || "your@email.com"
            })`}</p>
          </div>
        </div>

        <div>
          <Link to={"/taskform"}>
            <button className="btn btn-sm btn-primary rounded-full text-sm text-white font-bold transition-transform hover:scale-105">
              Add Task
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {/* To-Do List */}
        <div className="task-list w-full">
          <h2 className="text-lg font-semibold mb-4">To-Do</h2>
          {tasks?.map((task) => (
            <>
              {user.email === task.ownerEmail ? (
                <div
                  key={task?._id}
                  className="bg-white p-4 rounded mb-4 shadow"
                >
                  <h4 className="text-lg font-semibold mb-2">{task?.title}</h4>
                  <p className="text-gray-600 text-xs">{task?.deadline}</p>
                  <p className="text-gray-700">{task?.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {task?.priority}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <MdDelete />
                      </button>
                      <Link to={`/tasks/${task._id}`}>
                        <span className="text-green-500 hover:text-green-700">
                          <MdEditSquare />
                        </span>
                      </Link>
                      <button className="text-gray-500 hover:text-gray-700 cursor-grab">
                        <MdDragIndicator />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                "No Task Added"
              )}
            </>
          ))}
        </div>

        {/* Ongoing List */}
        <div className="task-list w-full">
          <h2 className="text-lg font-semibold mb-4">Ongoing</h2>
          {ongoingTasks.map((task) => (
            <div key={task?._id} className="bg-white p-4 rounded mb-4 shadow">
              <h4 className="text-lg font-semibold mb-2">{task?.title}</h4>
              <p className="text-gray-600 text-xs">{task?.deadline}</p>
              <p className="text-gray-700">{task?.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm text-gray-500">{task?.priority}</span>
                <div className="flex space-x-2">
                  <button className="text-red-500 hover:text-red-700">
                    <MdDelete />
                  </button>

                  <button className="text-green-500 hover:text-green-700">
                    <MdEditSquare />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 cursor-grab">
                    <MdDragIndicator />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completed List */}
        <div className="task-list w-full">
          <h2 className="text-lg font-semibold mb-4">Completed</h2>
          {completedTasks.map((task) => (
            <div key={task?._id} className="bg-white p-4 rounded mb-4 shadow">
              <h4 className="text-lg font-semibold mb-2">{task?.title}</h4>
              <p className="text-gray-600 text-xs">{task?.deadline}</p>
              <p className="text-gray-700">{task?.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm text-gray-500">{task?.priority}</span>
                <div className="flex space-x-2">
                  <button className="text-red-500 hover:text-red-700">
                    <MdDelete />
                  </button>

                  <button className="text-green-500 hover:text-green-700">
                    <MdEditSquare />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 cursor-grab">
                    <MdDragIndicator />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;

// deadline: "2023-12-22"
// description: "I need to early slipp."
// priority: "high"
// title: "Early Slip"
