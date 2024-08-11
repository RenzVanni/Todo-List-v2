import React, { useContext, useState } from "react";
import { MainContext } from "../lib/global-context";
import { redirect, useNavigate } from "react-router-dom";

const Form = () => {
  const { form, setForm } = useContext(MainContext);
  const [Login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form) {
      navigate("/Home");
    }
  };
  return (
    <div className=" w-full p-16">
      <h1 className="font-bold text-3xl mb-4">
        {form ? "Login" : "Create an account"}
      </h1>
      {form ? (
        <p className="flex gap-x-2">
          Create an account?
          <span
            onClick={() => setForm((prev) => !prev)}
            className="text-text font-semibold underline mb-8"
          >
            Create an account
          </span>
        </p>
      ) : (
        <p className="flex gap-x-2">
          Already have an account?
          <span
            onClick={() => setForm((prev) => !prev)}
            className="text-text font-semibold underline mb-8"
          >
            Login
          </span>
        </p>
      )}

      <form action="" className="flex flex-col gap-4">
        {!form ? (
          <div className="flex flex-1 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="bg-background flex-1 px-4 py-2 rounded-md outline-none border-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-background flex-1 px-4 py-2 rounded-md outline-none border-none"
            />
          </div>
        ) : null}
        <input
          type="text"
          placeholder="Email"
          className="bg-background flex-1 px-4 py-2 rounded-md outline-none border-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-background flex-1 px-4 py-2 rounded-md outline-none border-none"
        />

        <button
          type="button"
          className="bg-button text-text px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
