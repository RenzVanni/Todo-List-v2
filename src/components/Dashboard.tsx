import React from "react";

const Dashboard = () => {
  return (
    <div className="flex gap-4 flex-wrap w-full h-full p-10 overflow-y-scroll overflow-x-hidden">
      <div className="w-[250px] h-[350px] rounded-2xl overflow-hidden bg-background shadow-xl hover:scale-105 hover:cursor-pointer">
        <div className="w-full h-[200px]">
          <img
            src="/images/card-default.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <article className="h-full text-wrap p-2 overflow-hidden">
          <p className="font-semibold text-xl">Title</p>
          <p className="break-all">
            casddddddddddddddddddddddddddddddasasasdadsaddasdasdaasdascascascascsdasdasdasdadasdasdasdadadasdddddddddddddddddddddddasdadasdontext
          </p>
        </article>
      </div>
    </div>
  );
};

export default Dashboard;
