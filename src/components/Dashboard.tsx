import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../helpers/api-connection";
import { CREATE, DASHBOARD } from "../constants/url";

const Dashboard = () => {
  const [apiResponse, setApiResponse] = useState<any[]>([]);
  const navigate = useNavigate();

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

  const handleNavigate = (id: number) => {
    navigate(`${CREATE}/${id}`);
  };

  return (
    <div className="flex gap-4 flex-wrap w-full h-full p-10 overflow-y-scroll overflow-x-hidden">
      {Array.isArray(apiResponse) &&
        apiResponse?.map((item, index) => {
          const name = item?.properties?.Name?.title[0]?.plain_text;
          const context = item?.properties?.Context?.rich_text[0]?.plain_text;
          return (
            <div
              onClick={() => handleNavigate(index)}
              key={item?.id}
              className="flex-1 min-w-[250px] h-[350px] rounded-2xl overflow-hidden bg-background shadow-xl hover:scale-105 hover:cursor-pointer"
            >
              <div className="w-full h-[200px]">
                <img
                  src="/images/card-default.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <article className="h-full text-wrap p-2 overflow-hidden">
                <p className="font-semibold text-xl">{name}</p>
                <p className="break-all">{context}</p>
              </article>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;
