import React from "react";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const user = useOutletContext();

  return (
    <div className="bg-white p-4 rounded-xl border-slate-300">
      <h3 className="text-center font-bold">Profile page</h3>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-md">
          <h5 className="font-medium">your stored data:</h5>
          <div className="w-48 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              {user.name}
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              {user.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
