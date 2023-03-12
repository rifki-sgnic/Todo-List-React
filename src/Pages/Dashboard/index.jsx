import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useOutletContext } from "react-router-dom";
import api from "../../utils/api";

const Dashboard = () => {
  const user = useOutletContext();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const headers = { Authorization: user.token };
      const res = await api.get(`/todos?userId=${user.id}`, { headers });
      const { data } = res.data;

      setTodos(data);
    };
    getTodos();
  }, []);

  const convertDate = (date) => {
    const d = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const day = d.toLocaleDateString("id-ID", options);
    const time = d.toLocaleTimeString("id-ID");

    return `${day} ${time}`;
  };

  const handleComplete = async (event) => {
    try {
      const headers = { Authorization: user.token };
      const id = event.currentTarget.getAttribute("data-index");
      const todo = todos[id];
      console.log(!todo.isFinished);
      const data = {
        isFinished: !todo.isFinished,
      };
      const response = await api.put(`/todos/${todo.id}`, data, { headers });
      console.log(response);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleComplete();
  };

  return (
    <div className="bg-white p-4 rounded-xl border-slate-300">
      <h1 className="text-center font-bold">Welcome, {user.name}!</h1>
      <div className="p-4 mt-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Your Todo List
        </h5>
        <div className="flex py-4">
          <Button href="/new" size="xs" color="success">
            Create new Task
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {todos.map((todo, index) => {
            return (
              <div
                className="border-slate-200 border shadow-md rounded-xl"
                key={todo.id}
              >
                <div className="flex flex-col gap-y-2 p-4">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {todo.task}
                  </h5>
                  <span>{convertDate(todo.updatedAt)}</span>
                  <div className="flex justify-between">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {todo.description}
                    </p>
                    <span className="font-normal">
                      {todo.isFinished ? "✔" : "❌"}
                    </span>
                  </div>
                  <div className="flex justify-end items-center gap-x-2">
                    <Button color="warning" size="xs" href={`task/${todo.id}`}>
                      Edit
                    </Button>
                    <form onSubmit={handleSubmit}>
                      <Button
                        data-id={todo.id}
                        data-index={index}
                        size="xs"
                        color={todo.isFinished ? "failure" : "success"}
                        onClick={handleComplete}
                      >
                        Mark as {todo.isFinished ? "Incomplete" : "Complete"}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
