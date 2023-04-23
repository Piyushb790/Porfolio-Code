const ProjectCard = ({ imgUrl, git, deploy, title }) => {
  return (
    <div className=" w-[450px] px-2 py-3 bg-[#fcd306] rounded-md hover:shadow-[0px_0px_21px_rgba(0,0,0,0.25)] shadow-[0px_0px_9px_rgba(0,0,0,0.25)] shadow-white hover:shadow-white  hover:-translate-y-2  ">
      <img src={imgUrl} className="rounded-md" />
      <h1 className="text-lg font-semibold text-center">{title}</h1>
      <div className="mt-2 flex justify-center gap-4">
        <a href={git} target="_blank">
          <button className="px-3 py-2 bg-[#282629] text-white  rounded-md flex items-center font-semibold shadow-md">
            Github
            <div className="bg-[#FAD208] rounded-xl ml-2 px-2 ">
              <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-right.png" />
            </div>
          </button>
        </a>
        <a href={deploy} target="_blank">
          <button className="px-3 py-2 bg-[#282629] text-white rounded-md flex items-center font-semibold shadow-md">
            Deploy
            <div className="bg-[#FAD208] rounded-xl ml-2 px-2 ">
              <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-right.png" />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
