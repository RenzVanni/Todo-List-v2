import Logo from "/images/logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Create from "./Create";
import Dashboard from "./Dashboard";
import { useContext } from "react";
import { MainContext } from "../lib/global-context";

const Home = () => {
  const { create, setCreate } = useContext(MainContext);
  return (
    <div className="bg-background flex-1 h-screen p-8 pb-0 ">
      <div className="bg-primary flex flex-1 h-full rounded-tr-xl rounded-tl-xl overflow-hidden">
        <div className="w-64 h-full p-2">
          <div className=" flex flex-1 justify-start items-center mb-12">
            <div className="w-10 h-10">
              <img
                src={Logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="h-80 px-4">
            <div
              onClick={() => setCreate(false)}
              className={`flex justify-start items-center ${
                !create && "border"
              } border-default rounded-md px-2 py-2 space-x-2 hover:cursor-pointer`}
            >
              <MdSpaceDashboard className="text-default" />
              <p className="text-default">Dashboard</p>
            </div>
          </div>
          <div className="h-80 px-4">
            <div className="flex justify-between items-center">
              <p className="">My Library</p>
              <FaPlus
                onClick={() => setCreate(true)}
                className="text-default hover:cursor-pointer hover:scale-110"
              />
            </div>
          </div>
        </div>
        <hr className="border border-background h-full" />
        <div className="flex items-center justify-center flex-1 h-full">
          {create ? <Create /> : <Dashboard />}
        </div>
      </div>
    </div>
  );
};

export default Home;
