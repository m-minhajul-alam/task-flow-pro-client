import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SingUp/SingUp";

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
        path: "/dashbord",
        element: <Dashbord />,
      },
    ],
  },
  {
    path: "/singup",
    element: <SignUp />,
    errorElement: <Error />,
  },
]);

export default router;
