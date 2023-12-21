import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full">
      <img
        className="mx-auto w-[70%] md:w-[45%]"
        src="https://i.ibb.co/xHwv894/Warning.png"
        alt=""
      />
      <p className="text-center text-red-600 text-xs font-bold my-3">Opps! 404 Error. Page not found.</p>
      <div className="w-fit mx-auto">
        <Link to={"/"}>
          <button className="btn btn-sm btn-primary rounded-full text-white text-md font-bold">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
