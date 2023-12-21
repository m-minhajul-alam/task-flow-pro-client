const UserTypesSection = () => {
  return (
    <div className="p-8 my-8">
      <h2 className="text-3xl text-primary text-center font-bold mb-4">
        Who Can Benefit?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Developers User Type Card  */}
        <div className="bg-white p-4 rounded shadow space-y-3 hover:scale-105">
          <div className="flex justify-start items-center">
            <div>
              <img
                className="w-8 mr-3"
                src="https://i.ibb.co/PwzPSx4/code.png"
                alt=""
              />
            </div>
            <h3 className="text-xl text-primary font-semibold mb-2 ">
              Developers
            </h3>
          </div>
          <p className="text-gray-600">
            Manage your coding tasks efficiently and stay organized with
            TaskFlow Pro.
          </p>
        </div>

        {/* Corporate Professional User Type Card  */}
        <div className="bg-white p-4 rounded shadow space-y-3 hover:scale-105">
          <div className="flex justify-start items-center">
            <img
              className="w-8 mr-3"
              src="https://i.ibb.co/LP0Zxgv/employee.png"
              alt=""
            />
            <h3 className="text-xl text-primary font-semibold mb-2 ">
              Corporate Professionals
            </h3>
          </div>
          <p className="text-gray-600">
            Streamline your work tasks, collaborate seamlessly, and increase
            productivity.
          </p>
        </div>

        {/* Banker User Type Card  */}
        <div className="bg-white p-4 rounded shadow space-y-3 hover:scale-105">
          <div className="flex justify-start items-center">
            <img
              className="w-8 mr-3"
              src="https://i.ibb.co/zPFV8zM/banker-64.png"
              alt=""
            />
            <h3 className="text-xl text-primary font-semibold mb-2 ">
              Bankers
            </h3>
          </div>
          <p className="text-gray-600">
            Manage your financial tasks and deadlines with TaskFlow Pro's
            powerful features.
          </p>
        </div>

        {/* Freelancers User Type Card  */}
        <div className="bg-white p-4 rounded shadow space-y-3 hover:scale-105">
          <div className="flex justify-start items-center">
            <img
              className="w-8 mr-3"
              src="https://i.ibb.co/XjBZhTR/laptop.png"
              alt=""
            />
            <h3 className="text-xl text-primary font-semibold mb-2 ">
              Freelancers
            </h3>
          </div>
          <p className="text-gray-600">
            Stay organized and meet project deadlines effortlessly. TaskFlow Pro
            provides a seamless workflow for freelancers to manage tasks and
            deliver high-quality work.
          </p>
        </div>

        {/* Project Managers User Type Card  */}
        <div className="bg-white p-4 rounded shadow space-y-3 hover:scale-105">
          <div className="flex justify-start items-center">
            <img
              className="w-8 mr-3"
              src="https://i.ibb.co/wrLvZdr/project-manager-66.png"
              alt=""
            />
            <h3 className="text-xl text-primary font-semibold mb-2 ">
              Project Managers
            </h3>
          </div>
          <p className="text-gray-600">
            Effortlessly coordinate and oversee project tasks. TaskFlow Pro's
            collaborative features make it easy for project managers to assign
            tasks, track progress, and ensure project success.
          </p>
        </div>

        {/* Students User Type Card  */}
        <div className="bg-white p-4 rounded shadow space-y-3 hover:scale-105">
          <div className="flex justify-start items-center">
            <img
              className="w-8 mr-3"
              src="https://i.ibb.co/KKp5Yr6/graduation-hat-60.png"
              alt=""
            />
            <h3 className="text-xl text-primary font-semibold mb-2 ">
              Students
            </h3>
          </div>
          <p className="text-gray-600">
            Enhance your academic journey with efficient task management.
            TaskFlow Pro is perfect for students to organize assignments,
            projects, and deadlines, helping you succeed in your studies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTypesSection;
