import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-background flex-1 h-screen p-8 pb-0 ">
      <div className="bg-primary flex flex-1 h-full rounded-tr-xl rounded-tl-xl overflow-hidden">
        <Sidebar />
        <div className="flex items-center justify-center flex-1 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
