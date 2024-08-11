import Lottie from "react-lottie-player";
import lottieImage from "../assets/login.json";
import Form from "./Form";
import TodoImage from "/images/todo-02.jpeg";
const LoginAndRegister = () => {
  return (
    <div>
      <div className="bg-background flex flex-1 justify-center items-center h-screen">
        <div className="bg-primary flex p-3 w-3/4 h-4/5 gap-2 rounded-xl shadow-2xl">
          <div className="flex items-center justify-center w-full rounded-xl overflow-hidden">
            <img
              src={TodoImage}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegister;
