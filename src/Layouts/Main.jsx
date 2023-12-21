import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="max-w-7xl w-[90%] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
