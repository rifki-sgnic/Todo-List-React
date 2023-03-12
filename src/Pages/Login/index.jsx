import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import api from "../../utils/api";
import { useAuth } from "../../utils/useAuth";

const Login = () => {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", form);
      const { data } = response.data;
      login(data);
    } catch (err) {
      const message = err.response.data.message;
      console.log(message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div className="flex justify-center items-center bg-slate-200 min-h-screen w-full">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in
        </h5>
        <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              name="email"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
              value={form.email}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              name="password"
              type="password"
              required={true}
              value={form.password}
              onChange={handleOnChange}
            />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
