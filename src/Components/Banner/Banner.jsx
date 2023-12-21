import { TbArrowUpRight } from "react-icons/tb";

const Banner = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center">
        <div className="hidden md:block flex-1">
          <img src="https://i.ibb.co/wwdx1w0/Complete-task.png" alt="" />
        </div>
        <div className="md:flex-1">
          <h1 className="text-5xl text-start md:text-5xl font-bold mb-5">
            Organize <br />
            Work & Life, <br />
            Boost Your <br />
            Productivity
          </h1>
          <button className="btn btn-primary btn-md rounded-full text-lg font-bold text-black">
            Let’s Explore <TbArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
