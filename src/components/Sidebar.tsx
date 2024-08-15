import Logo from "/images/logo.png";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { MainContext } from "../lib/global-context";

const Sidebar = () => {
  const { create, setCreate } = useContext(MainContext);
  return (
    <div className="h-full flex">
      <div className="w-64 h-full p-2">
        <div className=" flex flex-1 justify-start items-center mb-12">
          <div className="w-10 h-10">
            <img src={Logo} alt="logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="h-80 px-4">
          <div
            onClick={() => setCreate(false)}
            className={`flex justify-start items-center ${
              !create && "border-b"
            } border-default rounded-md px-2 py-2 space-x-2 hover:cursor-pointer hover:scale-105`}
          >
            <MdSpaceDashboard className="text-default" />
            <p className="text-default">Dashboard</p>
          </div>
        </div>
        <div className="h-80 px-4">
          <div className="flex justify-between items-center mb-4">
            <p className="">My Library</p>
            <FaPlus
              onClick={() => setCreate(true)}
              className="text-default hover:cursor-pointer hover:scale-110"
            />
          </div>
          <div
            onClick={() => setCreate(false)}
            className={`flex justify-start items-center border-default rounded-md px-2 py-2 space-x-2 hover:cursor-pointer`}
          >
            <IoDocumentText className="text-default" />
            <p className="text-default">Untitled</p>
          </div>
        </div>
      </div>
      <hr className="border border-background h-full" />
    </div>
  );
};

export default Sidebar;
