import Logo from "/images/logo.png";
import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { MainContext } from "../lib/global-context";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import apiRequest from "../helpers/api-connection";
import { FaTrash } from "react-icons/fa6";
import useAxios from "../helpers/axios-interceptors";

const Sidebar = () => {
  const api = useAxios();
  const { create } = useContext(MainContext);
  const navigate = useNavigate();
  const [apiResponse, setApiResponse] = useState<any[]>([]);

  useEffect(() => {
    const result = async () => {
      const response = await apiRequest({
        params: "/Home/Dashboard",
        request: {
          method: "GET",
        },
      });
      setApiResponse(response);
    };
    result();
  }, []);

  const handleNavigate = (params: string) => {
    console.log(params);
    navigate(`/Home/${params}`);
  };

  const handleLibraryNavigate = (id: number) => {
    // setCreate(false);
    navigate(`/Home/Create/${id}`);
  };

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  const handleTrash = async (id: string) => {
    try {
      const response = await api.patch("/Home", { pageId: id });
      if (response?.data?.success) {
        const result = async () => {
          const response = await apiRequest({
            params: "/Home/Dashboard",
            request: {
              method: "GET",
            },
          });
          setApiResponse(response);
        };
        result();
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className="h-full flex">
      <div className="w-64 h-full p-2">
        <div className=" flex flex-1 justify-between px-4 items-center mb-12">
          <div className="w-10 h-10">
            <img src={Logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div
            onClick={() => handleLogout()}
            className="h-5 w-5 flex items-center justify-center hover:cursor-pointer hover:scale-105"
          >
            <TbLogout2 className="object-cover w-full h-full text-default" />
          </div>
        </div>
        <div className="h-80 px-4">
          <div
            onClick={() => handleNavigate("Dashboard")}
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
              onClick={() => handleNavigate("Create")}
              className="text-default hover:cursor-pointer hover:scale-110"
            />
          </div>
          {Array.isArray(apiResponse) &&
            apiResponse.map((item, index) => {
              const name = item?.properties?.Name?.title[0]?.plain_text;
              return (
                <div
                  key={item?.id}
                  onClick={() => handleLibraryNavigate(index)}
                  className={`flex justify-between items-center border-default rounded-md py-2 hover:cursor-pointer hover:scale-105 `}
                >
                  <div className="flex items-center space-x-2">
                    <IoDocumentText className="text-default" />
                    <p className="text-default">{name}</p>
                  </div>
                  <FaTrash
                    onClick={() => handleTrash(item?.id)}
                    className="text-default hover:scale-110"
                  />
                </div>
              );
            })}
        </div>
      </div>
      <hr className="border border-background h-full" />
    </div>
  );
};

export default Sidebar;
