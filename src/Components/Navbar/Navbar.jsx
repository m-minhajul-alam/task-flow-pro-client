import { Link, NavLink } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary"
              : "text-gray-300 text-xs"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/dashbord"}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary"
              : "text-gray-300 text-xs"
          }
        >
          Dashbord
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary border-b-2 border-primary"
              : "text-gray-300 text-xs"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mt-2">
      {/* Navbar for md and lg screen */}
      <div className="navbar hidden bg-neutral rounded-full lg:flex">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="navbar-start ml-4 gap-5"
        >
          <div>
            <Link to={"/"} className="text-primary text-2xl font-bold ">
              <span>
                TaskFlow<span className="text-red-600">Pro</span>
              </span>
            </Link>
          </div>
          <div>
            <ul className="menu-horizontal gap-5">{navLinks}</ul>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="navbar-end mr-4"
        >
          <div className="flex justify-center items-center">
            <Link to={"/login"}>
              <button className="btn btn-ghost btn-sm rounded-full text-primary text-lg font-bold mr-1">
                Login
              </button>
            </Link>
            <Link to={"/singup"}>
              <button className="btn btn-primary btn-sm rounded-full text-md font-bold text-black">
                Sing Up
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar for sm screen */}
      <div className="navbar lg:hidden bg-neutral rounded-full">
        <div className="flex-1 ml-3">
          <Link to={"/"} className="text-primary text-xl font-bold ">
            <span>
              TaskFlow<span className="text-red-600">Pro</span>
            </span>
          </Link>
        </div>

        <div className="flex justify-end flex-1">
          <div className="flex items-center">
            <div className="dropdown text-gray-400 dropdown-end">
              <label tabIndex={0} className="\">
                <button className="text-white text-2xl mr-2">
                  <TbMenuDeep />
                </button>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] p-2 text-center text-xs space-y-2 shadow bg-base-100 rounded-xl w-40 mt-3"
              >
                {navLinks}
                <li>
                  <Link to={"/login"}>
                    <button className="btn btn-ghost btn-sm rounded-full text-primary text-md font-bold mr-1">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/singup"}>
                    <button className="btn btn-primary btn-sm rounded-full text-sm font-bold text-black">
                      Sing Up
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;