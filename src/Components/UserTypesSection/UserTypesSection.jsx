const UserTypesSection = () => {
  const items = [
    {
      id: 1,
      icon: "https://i.ibb.co/PwzPSx4/code.png",
      title: " Developers",
      description:
        "Manage your coding tasks efficiently and stay organized with TaskFlow Pro.",
    },
    {
      id: 2,
      icon: "https://i.ibb.co/LP0Zxgv/employee.png",
      title: "Corporate Professionals",
      description:
        "Streamline your work tasks, collaborate seamlessly, and increase productivity.",
    },
    {
      id: 3,
      icon: "https://i.ibb.co/zPFV8zM/banker-64.png",
      title: "Bankers",
      description:
        " Manage your financial tasks and deadlines with TaskFlow Pro's powerful features.",
    },
    {
      id: 4,
      icon: "https://i.ibb.co/XjBZhTR/laptop.png",
      title: "Freelancers",
      description:
        "TaskFlow Pro provides a seamless workflow for freelancers to manage tasks and deliver high-quality work.",
    },
    {
      id: 5,
      icon: "https://i.ibb.co/wrLvZdr/project-manager-66.png",
      title: "Project Managers",
      description:
        "TaskFlow Pro's collaborative features make it easy for project managers to assign tasks, track progress, and ensure project success.",
    },
    {
      id: 6,
      icon: "https://i.ibb.co/KKp5Yr6/graduation-hat-60.png",
      title: "Students",
      description:
        "TaskFlow Pro is perfect for students to organize assignments, projects, and deadlines, helping you succeed in your studies.",
    },
  ];

  return (
    <div className="p-8 my-8">
      <h2 className="text-3xl text-primary text-center font-bold mb-4">
        Who Can Benefit?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items?.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow space-y-3 hover:scale-105 transition-all duration-300 cursor-default"
          >
            <div className="flex justify-start items-center">
              <div>
                <img className="w-8 mr-3" src={item.icon} alt="" />
              </div>
              <h3 className="text-xl text-primary font-semibold mb-2 ">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTypesSection;
