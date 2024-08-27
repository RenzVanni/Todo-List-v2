import { useContext, useState } from "react";
import { MainContext } from "../lib/global-context";
import { useNavigate } from "react-router-dom";
import { UserProp } from "../constants/types";
import useAxios from "../helpers/axios-interceptors";
import { DASHBOARD, INDEX, REGISTER } from "../constants/url";

const Form = () => {
  const api = useAxios();
  const { form, setForm, setApiData } = useContext(MainContext);
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProp>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (form) {
        await api
          .post(INDEX, {
            email: user.email,
            password: user.password,
          })
          .then((res) => {
            setApiData(res?.data?.user);
            localStorage.setItem("data", JSON.stringify(res?.data));
            navigate(DASHBOARD);
          })
          .catch((err) => {
            console.log("error", err.message);
          });
      } else {
        await api
          .post(REGISTER, {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
          })
          .then((res) => {
            setForm(true);
            if (res.data) {
              navigate(INDEX);
            }
          })
          .catch((err) => {
            console.log("error", err.message);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeForm = (value: boolean) => {
    console.log("click ", form);
    setForm(value);

    if (value) {
      console.log("true", form);
      navigate(INDEX);
      setUser({ firstname: "", lastname: "", email: "", password: "" });
    } else {
      console.log("false", form);
      navigate(REGISTER);
      setUser({ firstname: "", lastname: "", email: "", password: "" });
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
            onClick={() => handleChangeForm(false)}
            className="text-text font-semibold underline mb-8 cursor-pointer"
          >
            Create an account
          </span>
        </p>
      ) : (
        <p className="flex gap-x-2">
          Already have an account?
          <span
            onClick={() => handleChangeForm(true)}
            className="text-text font-semibold underline mb-8 cursor-pointer"
          >
            Login
          </span>
        </p>
      )}

      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        {!form ? (
          <div className="flex flex-1 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="bg-background text-text flex-1 px-4 py-2 rounded-md outline-none border-none placeholder:text-text"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, firstname: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-background text-text flex-1 px-4 py-2 rounded-md outline-none border-none placeholder:text-text"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, lastname: e.target.value }))
              }
            />
          </div>
        ) : null}
        <input
          type="text"
          placeholder="Email"
          className="bg-background text-text flex-1 px-4 py-2 rounded-md outline-none border-none placeholder:text-text"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-background text-text flex-1 px-4 py-2 rounded-md outline-none border-none placeholder:text-text"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <button
          type="submit"
          className="bg-button text-text px-4 py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
