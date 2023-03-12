import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
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

  const handleRegister = async () => {
    try {
      const response = await api.post("/register", form);
      console.log(response);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister();
  };

  return (
    <div className="flex justify-center items-center bg-slate-200 min-h-screen w-full">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Register Account
        </h5>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <Label htmlFor="name" value="Full Name" />
            </div>
            <TextInput
              name="name"
              placeholder="Full Name"
              required={true}
              value={form.name}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <Label htmlFor="email" value="Email" />
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
              <Label htmlFor="password" value="Password" />
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
            Already registered?{" "}
            <a
              href="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
