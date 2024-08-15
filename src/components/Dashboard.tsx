import { useContext, useEffect } from "react";
import { MainContext } from "../lib/global-context";
import { fetchData } from "../auth/jwt-token";

const Dashboard = () => {
  const { setApiData, apiData } = useContext(MainContext);

  useEffect(() => {
    const response = async () => {
      setApiData(await fetchData("Home"));
    };
    response();
  }, []);
  return (
    <div className="flex gap-4 flex-wrap w-full h-full p-10 overflow-y-scroll overflow-x-hidden">
      {apiData?.map((item) => {
        const name = item?.properties?.Name?.title[0]?.plain_text;
        const context = item?.properties?.Context?.rich_text[0]?.plain_text;
        return (
          <div
            key={item?.id}
            className="w-[250px] h-[350px] rounded-2xl overflow-hidden bg-background shadow-xl hover:scale-105 hover:cursor-pointer"
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
