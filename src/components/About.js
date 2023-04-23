import { Link } from "react-router-dom";
import p3 from "../Assets/p3.png";

const About = () => {
  return (
    <div className="mt-14 md:my-20 scroll-mt-20 box-border " id="About">
      <div className="flex flex-col md:flex-row font-semibold justify-center ">
        <button className="px-4 py-2 border border-black ">
          Web Developer
        </button>
        <button className="px-4 py-2 border border-black ">
          Front-End Developer
        </button>
        <button className="px-4 py-2 border border-black ">
          Software Developer
        </button>
        <button className="px-4 py-2 border border-black ">
          ReactJs Developer
        </button>
      </div>
      <div className="flex flex-col items-center md:flex-row-reverse md:items-center md:justify-around mt-8 md:mt-20 ">
        <div className="md:w-[400px] w-96">
          <h1 className="text-5xl font-bold">Web App Development</h1>
          <p className="mt-10">
            I believe in constantly learning and staying up-to-date with the
            latest trends and technologies in the field of web development. This
            allows me to provide the best solutions for my clients and create
            innovative web experiences.
          </p>
          <Link to="/projects">
            <button className="px-3 py-2 bg-[#282629] text-white mt-10 rounded-md flex items-center font-semibold">
              See My Projects
            </button>
          </Link>
        </div>
        <div>
          <div className=" p-1  rounded-3xl   shadow-[0px_0px_21px_rgba(0,0,0,0.10)] shadow-amber-400  ">
            <img src={p3} className=" h-[480px] rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
