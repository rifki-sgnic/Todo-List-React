import React from "react";

const About = () => {
  return (
    <div className="bg-white p-4 rounded-xl border-slate-300">
      <h3 className="text-center font-bold">
        This web is created for learning purposes
      </h3>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-md">
          <h5 className="font-medium">Created with:</h5>
          <div className="w-48 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a
              href="https://vitejs.dev/"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              React JS + Vite
            </a>
            <a
              href="https://expressjs.com/"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Express JS
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              MySql
            </a>
            <a
              href="https://flowbite.com/"
              className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Tailwind css + Flowbite
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <a
          href="http://github.com/rifki-sgnic/Todo-List-React"
          className="font-medium underline hover:text-blue-500 transition-colors duration-200"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default About;
