import Create from "./Create";
import Dashboard from "./Dashboard";
import { useContext } from "react";
import { MainContext } from "../lib/global-context";

import Sidebar from "./Sidebar";

const Home = () => {
  const { create } = useContext(MainContext);

  return (
    <div className="bg-background flex-1 h-screen p-8 pb-0 ">
      <div className="bg-primary flex flex-1 h-full rounded-tr-xl rounded-tl-xl overflow-hidden">
        <Sidebar />
        <div className="flex items-center justify-center flex-1 h-full">
          {create ? <Create /> : <Dashboard />}
        </div>
      </div>
    </div>
  );
};

export default Home;
