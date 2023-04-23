import { HTMLCSS, Tailwind, javascript } from "../constant";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Projects = () => {
  const [javascriptIsLoading, setJavascriptIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setJavascriptIsLoading(false);
    }, 1000);
  });

  return javascriptIsLoading ? (
    <Shimmer />
  ) : (
    <div className="font-Roboto">
      <Navbar />
      <div className="bg-black mt-20 py-10">
        <h1 className="text-6xl font-extrabold text-center bg-[#FAD208]  mb-10  p-2">
          JavaScript, CSS & HTML
        </h1>
        <div className="flex flex-wrap mx-10 gap-10">
          {javascript.map((card, index) => {
            return (
              <div key={index}>
                <ProjectCard {...card} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-black mt-20 py-10">
        <h1 className="text-6xl font-extrabold text-center bg-[#FAD208]  mb-10  p-2">
          Tailwind CSS & HTML
        </h1>
        <div className="flex flex-wrap mx-10 gap-10">
          {Tailwind.map((card, index) => {
            return (
              <div key={index}>
                <ProjectCard {...card} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-black mt-20 py-10">
        <h1 className="text-6xl font-extrabold text-center bg-[#FAD208]  mb-10  p-2">
          HTML & CSS
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {HTMLCSS.map((card, index) => {
            return (
              <div key={index}>
                <ProjectCard {...card} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
