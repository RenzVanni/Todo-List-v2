const Create = () => {
  console.log(JSON.parse(localStorage.getItem("data") || ""));
  
  return (
    <div className="w-4/5 h-4/5 overflow-y-scroll">
      <form action="" className="flex flex-col h-full">
        <input
          type="text"
          placeholder="Untitled"
          className="bg-transparent w-full outline-none placeholder:text-text text-5xl text-text"
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
