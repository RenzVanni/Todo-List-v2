import React from "react";

const Create = () => {
  return (
    <div className="w-4/5 h-4/5">
      <form action="" className="flex flex-col flex-1 h-full">
        <input
          type="text"
          placeholder="Untitled"
          className="bg-transparent w-full outline-none text-5xl text-text"
        />
        <textarea
          name=""
          id=""
          className="bg-transparent resize-none text-text outline-none flex-1 h-full"
        ></textarea>
      </form>
    </div>
  );
};

export default Create;
