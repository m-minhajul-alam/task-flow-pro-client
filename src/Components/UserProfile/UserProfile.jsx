// eslint-disable-next-line react/prop-types
const UserProfile = ({ user }) => {
  return (
    <div className="p-4">
      <div className="flex items-center">
        {/* User Profile Picture */}
        <img
          src={"https://i.ibb.co/3mz2BvY/Login-Ilas.png"}
          alt="User Profile"
          className="rounded-full h-12 w-12 mr-4"
        />

        {/* Welcome Title */}
        <div>
          <h2 className="text-xl font-semibold">{`Welcome, skib!`}</h2>
          <p className="text-gray-600">{`(sakib@gmail.com)`}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
