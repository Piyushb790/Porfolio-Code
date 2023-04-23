import { skillIcons } from "../constant.js";
import { Link } from "react-router-dom";
const Skills = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center box-border md:justify-around  md:items-start my-10  scroll-mt-20"
      id="Skills"
    >
      <div>
        <h1 className="text-6xl font-extrabold text-center bg-[#FAD208] shadow-md p-2">
          Skills
        </h1>
        <div className="my-24">
          <img src={skillIcons} alt="Skills icons" className="md:h-80 h-56" />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start w-96 md:w-auto">
        <h1 className="text-6xl  font-extrabold  bg-[#FAD208] p-2 shadow-md">
          Certification
        </h1>
        <div className="my-14 text-left">
          <p className="text-2xl font-medium  my-10">
            Full Stack Javascript Web Developer -
            <span className="font-extrabold"> Ineuron </span>
          </p>
          <p className="text-2xl font-medium my-10">
            Namaste React Live Course -
            <span className="font-extrabold"> Namaste Dev</span>
          </p>
          <p className="text-2xl font-medium mt-10">
            Git & Github -
            <span className="font-extrabold"> Learn Code Online </span>
          </p>
        </div>
        <Link to="/projects">
          <button className="px-3 py-2 bg-[#282629] text-white mt-10 rounded-md flex items-center font-semibold shadow-md">
            See My Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
