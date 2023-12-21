import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Login = () => {
  //   const [disabled, setDisabled] = useState(true);
  //   const { signIn } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const from = location.state?.from?.pathname || "/";
  //   console.log("state in the location login page", location.state);

  //   useEffect(() => {
  //     loadCaptchaEnginge(6);
  //   }, []);

  const handleLogin = (event) => {
    // event.preventDefault();
    // const form = event.target;
    // const email = form.email.value;
    // const password = form.password.value;
    // console.log(email, password);
    // signIn(email, password).then((result) => {
    //   const user = result.user;
    //   console.log(user);
    //   Swal.fire({
    //     title: "User Login Successful.",
    //     showClass: {
    //       popup: "animate__animated animate__fadeInDown",
    //     },
    //     hideClass: {
    //       popup: "animate__animated animate__fadeOutUp",
    //     },
    //   });
    //   navigate(from, { replace: true });
    // });
  };

  const handleValidateCaptcha = (e) => {
    // const user_captcha_value = e.target.value;
    // if (validateCaptcha(user_captcha_value)) {
    //   setDisabled(false);
    // } else {
    //   setDisabled(true);
    // }
  };

  return (
    <div className="max-w-4xl w-[90%] mx-auto my5">
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

          <p className="mx-auto mb-3">
            <small>
              New Here? Please <Link className="hover:underline" to="/signup">Create an account</Link>
            </small>
          </p>
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
