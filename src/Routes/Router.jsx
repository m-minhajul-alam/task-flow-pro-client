import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import TaskDashboard from "../Pages/TaskDashboard/TaskDashboard";
import TaskForm from "../Components/TaskForm/TaskForm";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/taskdashbord",
        element: (
          <PrivateRoute>
            <TaskDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/taskform",
        element: <TaskForm />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

export default router;
