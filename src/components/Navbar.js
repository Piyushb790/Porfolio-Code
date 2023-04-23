import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center  md:flex-row md:justify-around md:items-center bg-white shadow-lg md:fixed md:w-full md:top-0 z-50">
      <div className="logo ml-3 md:ml-0 ">
        <img src={logo} alt="logo" className="h-16" />
      </div>
      <div className="navLink">
        <ul className="nav-items flex flex-col md:flex-row gap-y-4 md:gap-x-9 font-semibold items-center">
          <Link to="/">
            <li>Home</li>
          </Link>
          <a href="#About">
            <li>About</li>
          </a>

          <a href="#Skills">
            <li>Skills</li>
          </a>
          <a href="#PersonalInfo">
            <li>Personal Info</li>
          </a>
          <a href="#Contact">
            <li>Contact</li>
          </a>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1pb1vazUSL-HKcWlynpzyyvDsdFUI7L_b/view?usp=sharing"
          target="_blank"
        >
          <button className="bg-[#FAD208] px-3 py-1 shadow-md rounded font-semibold my-5 md:my-0">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
