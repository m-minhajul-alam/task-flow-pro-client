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
        toast.success("Success with google!")
        navigate("/taskdashbord");
      });
    });
  };

  return (
    <div className="mb-8">
      <div className="divider">or</div>
      <div className="max-w-xs mx-auto">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-primary text-lg rounded-full w-full hover:scale-105"
        >
          <FaGoogle className="mr-2"></FaGoogle>
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
