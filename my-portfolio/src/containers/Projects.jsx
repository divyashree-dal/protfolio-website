import React from "react";
import { projects } from "../constants/projects";
import "../styles/projects.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import UseMediaQuery from "../hooks/UseMediaQuery";

function Projects() {
  const isAboveSmallScreens = UseMediaQuery("(min-width: 768px)");

  const ProjectCard = ({ project }) => {
    return (
      <div className="project-box relative overflow-hidden cursor-pointer flex h-60 w-50 md:h-80 md:w-80 rounded-lg">
        {/* <div className="absolute  bg-black z-10 h-[100%] w-[100%] opacity-70 ">
         
        </div> */}
        {/* <div className="absolute text-xl italic w-[100%] text-white z-20 top-1/2 left-1/2 transform -translate-x-[43%] -translate-y-1/2">{project.title}</div> */}
        <img
          src={project.icon}
          alt={project.alt}
          className="sm:object-cover h-auto transition-transform duration-300 ease-in-out w-full"
        />
        <div className="project-layer">
          <h4 className="text-xl mb-3 italic">{project.title}</h4>
          {isAboveSmallScreens && (
            <p className="text-sm my-1 mx-0.3">{project.description}</p>
          )}
          <a href={project.github} target="_blank" rel="noreferrer">
            <HiOutlineExternalLink className="w-10 h-10" />
          </a>
        </div>
      </div>
    );
  };
  return (
    <section
      id="projects"
      className="relative flex flex-col bg-deep-blue max-w-screen"
    >
      <p className="sm:text-[18px] text-[10px] text-gray-300 uppercase tracking-wide mt-10">
        works implemented so far.
      </p>
      <h2 className="text-white font-black  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Projects.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
