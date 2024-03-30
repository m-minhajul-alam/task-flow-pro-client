import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("Success with google!");
        navigate("/taskdashbord");
      });
    });
  };

  return (
    <div className="mb-8">
      <div className="divider">or</div>
      <div className="max-w-xs mx-auto px-3 lg:px-0">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline border-primary text-primary text-lg rounded-full w-full hover:scale-105 hover:text-white hover:bg-primary hover:border-primary transition-transform"
        >
          <span className="flex items-center gap-2">
            <FaGoogle></FaGoogle>
            Continue With Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
