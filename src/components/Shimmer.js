const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-2">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            className=" w-[450px] px-2 py-3 bg-gray-200 rounded-md h-72 "
            key={index}
          >
            <div className="h-44  bg-slate-50 m-1"></div>
            <div className="flex justify-center mt-5 gap-4 bottom-0">
              <button className="px-3 py-2 bg-slate-100 h-10 text-white  rounded-md flex items-center font-semibold shadow-md w-28"></button>

              <button className="px-3 py-2 bg-slate-100 text-white rounded-md flex items-center font-semibold shadow-md w-28"></button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
