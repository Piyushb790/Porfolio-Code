import { Link } from "react-router-dom";
import p4 from "../Assets/p4.png";

const Personalinfo = () => {
  return (
    <div className="mt-14 md:my-20 scroll-m-20 box-border" id="PersonalInfo">
      <div className="flex flex-col items-center md:flex-row-reverse md:items-center md:justify-around mt-8 md:mt-0 ">
        <div>
          <div className=" p-1  rounded-3xl   shadow-[0px_0px_21px_rgba(0,0,0,0.10)] shadow-amber-400  ">
            <img src={p4} className=" h-[480px] rounded-3xl" />
          </div>
        </div>
        <div className="md:w-[400px] w-96">
          <h1 className="text-5xl font-bold">Personal Info</h1>
          <p className="mt-10">
            Outside of work, I have a passion for adventure and technology. I
            enjoy going on trekking trips to explore new places and challenge
            myself physically. In my free time, I also enjoy gaming,
            particularly strategy games and first-person shooters. Additionally,
            am always exploring new technologies and tools that can help me
            become a better developer
          </p>
          <Link to="/projects">
            <button className="px-3 py-2 bg-[#282629] text-white mt-10 rounded-md flex items-center font-semibold">
              See My Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Personalinfo;
