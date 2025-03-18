import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl rounded-3xl overflow-hidden p-8 border-4 border-yellow-400 transform hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border-4 border-gray-300">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-xl"
        />
        <h2 className="mt-5 text-2xl font-extrabold text-gray-900">{name}</h2>
        <p className="text-gray-700 font-semibold mt-2">{email}</p>
        <p className="text-gray-700 font-semibold mt-1">{phone}</p>
        <p className="text-gray-800 font-bold text-center mt-3 px-4 py-2 bg-yellow-200 rounded-lg shadow-md">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;