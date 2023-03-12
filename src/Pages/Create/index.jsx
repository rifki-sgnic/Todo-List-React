import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import api from "../../utils/api";

const Create = () => {
  const user = useOutletContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    task: "",
    description: "",
    isFinished: 0,
    UserId: user.id,
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const create = async () => {
    try {
      const headers = { Authorization: user.token };
      const response = await api.post("/todos/create", form, { headers });
      console.log(response);

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    create();
  };

  const handleResetForm = (event) => {
    event.preventDefault();
    setForm({
      task: "",
      description: "",
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl border-slate-300">
      <h5>Create New Task</h5>
      <Card className="mt-4">
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="task" value="Your new Task" />
            </div>
            <TextInput
              id="task"
              name="task"
              type="text"
              placeholder="Beli persediaan kopi"
              required={true}
              value={form.task}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="description" value="Task Description" />
            </div>
            <Textarea
              id="description"
              name="description"
              placeholder="Beli Nescafe Classic 100g dan Susu Ultra Milk 1L"
              required={true}
              rows={4}
              value={form.description}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="pt-4 flex justify-end gap-x-2">
            <Button type="button" color="warning" onClick={handleResetForm}>
              Reset
            </Button>
            <Button type="submit" color="success">
              Create!
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Create;
