import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/taskdashbord";
  console.log("state in the location login page", location.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("User Login Successful.");
      navigate(from, { replace: true });
    });
  };

  return (
    <div
      className="max-w-4xl w-[90%] mx-auto my5"
      style={{ fontFamily: "Josefin Slab" }}
    >
      <Helmet>
        <title>Login | TaskFlowPro</title>
      </Helmet>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl font-bold text-center text-primary mb-3">
            Login now!
          </h1>
          <img
            className="hidden md:block"
            src="https://i.ibb.co/3mz2BvY/Login-Ilas.png"
            alt=""
          />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered rounded-full focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered rounded-full focus:outline-none"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-white text-lg rounded-full transition-transform hover:scale-105"
                type="submit"
                value="Login"
              />
            </div>
          </form>

          <p className="mx-auto text-center mb-3">
            <small>
              New Here? Please{" "}
              <Link className="hover:underline" to="/signup">
                SignUp
              </Link>
            </small>
            <br />
            <small>
              Do it later? Please{" "}
              <Link className="hover:underline" to="/">
                Go to home
              </Link>
            </small>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
