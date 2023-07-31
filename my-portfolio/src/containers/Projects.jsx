import React from "react";
import { projects } from "../constants/projects";
import "../styles/projects.css";
import { HiOutlineExternalLink } from "react-icons/hi";
function Projects() {
  const ProjectCard = ({ project }) => {
    return (
      <div className="project-box relative overflow-hidden cursor-pointer flex">
        <img
          src={project.icon}
          alt={project.alt}
          className="w-full h-auto transition-transform duration-300 ease-in-out"
        />
        <div className="project-layer">
          <h4 className="text-3xl">{project.title}</h4>
          <p className="text-base my-1 mx-0.3">{project.description}</p>
          <a href={project.github}>
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
