import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-5 max-w-5xl mx-auto">
      <div className="flex justify-center items-center">
        <div className="hidden md:block w-[50%]">
          <img src="https://i.ibb.co/wwdx1w0/Complete-task.png" alt="" />
        </div>
        <div className="md:flex-1">
          <h1 className="text-5xl text-start md:text-5xl font-bold text-gray-600 mb-5">
            Organize <br />
            Work & Life, <br />
            Boost Your <br />
            Productivity
          </h1>
          <Link to={"/signup"}>
            <button className="btn btn-primary btn-md rounded-full text-lg font-bold text-white transition-transform hover:scale-105">
              Let’s Explore <TbArrowUpRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
