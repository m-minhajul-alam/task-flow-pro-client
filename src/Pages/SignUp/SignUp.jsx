import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  //   const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  //   const { createUser, updateUserProfile } = useContext(AuthContext);
  //   const navigate = useNavigate();

  const onSubmit = (data) => {
    // createUser(data.email, data.password).then((result) => {
    //   const loggedUser = result.user;
    //   console.log(loggedUser);
    //   updateUserProfile(data.name, data.photoURL)
    //     .then(() => {
    //       // create user entry in the database
    //       const userInfo = {
    //         name: data.name,
    //         email: data.email,
    //       };
    //       axiosPublic.post("/users", userInfo).then((res) => {
    //         if (res.data.insertedId) {
    //           console.log("user added to the database");
    //           reset();
    //           Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "User created successfully.",
    //             showConfirmButton: false,
    //             timer: 1500,
    //           });
    //           navigate("/");
    //         }
    //       });
    //     })
    //     .catch((error) => console.log(error));
    // });
  };

  return (
    <div className="max-w-4xl w-[90%] mx-auto my5">
      <Helmet>
        <title>Sign Up | TaskFlowPro</title>
      </Helmet>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-3xl font-bold text-center text-primary mb-3">
              Sign up now!
            </h1>
            <img
              className="hidden md:block"
              src="https://i.ibb.co/VQBK85h/Sign-up.png"
              alt=""
            />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered rounded-full focus:outline-none"
                />
                {errors.name && (
                  <span className="text-red-600 text-xs font-semibold ml-5 mt-1">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photo URL"
                  className="input input-bordered rounded-full focus:outline-none"
                />
                {errors.photoURL && (
                  <span className="text-red-600 text-xs font-semibold ml-5 mt-1">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered rounded-full focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-600 text-xs font-semibold ml-5 mt-1">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered rounded-full focus:outline-none"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 text-xs font-semibold ml-5 mt-1">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 text-xs font-semibold ml-5 mt-1">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 text-xs font-semibold ml-5 mt-1">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 text-xs font-semibold ml-5 mt-1">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary rounded-full text-white text-lg transition-transform hover:scale-105"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="mx-auto mb-3">
              <small>
                Already have an account? Please <Link className="hover:underline" to="/login">Login</Link>
              </small>
            </p>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
