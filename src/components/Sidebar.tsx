import Logo from "/images/logo.png";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import apiRequest from "../helpers/api-connection";
import { FaTrash } from "react-icons/fa6";
import useAxios from "../helpers/axios-interceptors";
import { CREATE, DASHBOARD, HOME, INDEX } from "../constants/url";

const Sidebar = () => {
  const api = useAxios();
  //   const { create, apiData } = useContext(MainContext);
  const navigate = useNavigate();
  const [apiResponse, setApiResponse] = useState<any[]>([]);
  const user = JSON.parse(localStorage.getItem("data") || "");
  const firstName = user?.user?.firstname;
  const lastName = user?.user?.lastname;

  useEffect(() => {
    const result = async () => {
      const response = await apiRequest({
        params: DASHBOARD,
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
    navigate(`${HOME}/${params}`);
  };

  const handleLibraryNavigate = (id: number) => {
    // setCreate(false);
    navigate(`${CREATE}/${id}`);
  };

  const handleLogout = () => {
    navigate(INDEX);
    localStorage.clear();
  };

  const handleTrash = async (id: string) => {
    try {
      const response = await api.patch(HOME, { pageId: id });
      if (response?.data?.success) {
        const result = async () => {
          const response = await apiRequest({
            params: DASHBOARD,
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
  console.log(apiResponse);
  return (
    <div className="h-full flex">
      <div className="w-64 h-full p-2">
        <div className=" flex flex-1 justify-between px-4 items-center mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10">
              <img
                src={Logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[12px] font-semibold">
              {lastName}, {firstName}
            </p>
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
            className="flex justify-start items-center rounded-md px-2 py-2 space-x-2 hover:cursor-pointer hover:scale-105"
          >
            <MdSpaceDashboard className="text-default" />
            <p className="text-default">Dashboard</p>
          </div>
        </div>
        <div className="flex flex-col h-80 px-4 space-y-2 overflow-hidden">
          <div className="flex justify-between items-center ">
            <p className="">My Library</p>
            <FaPlus
              onClick={() => handleNavigate("Create")}
              className="text-default hover:cursor-pointer hover:scale-110"
            />
          </div>
          <div className="overflow-y-scroll h-full overflow-x-hidden px-2">
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
      </div>
      <hr className="border border-background h-full" />
    </div>
  );
};

export default Sidebar;
