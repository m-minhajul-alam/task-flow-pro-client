import UserProfile from "../../Components/UserProfile/UserProfile";
import { Link } from "react-router-dom";

const TaskDashboard = () => {

  return (
    <div className="my-5">
      <UserProfile
      // user={user}
      />


      <Link to={"/taskform"}><button>add</button></Link>
    </div>
  );
};

export default TaskDashboard;
