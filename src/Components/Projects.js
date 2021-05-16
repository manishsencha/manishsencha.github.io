import React from "react";
import "../CSS/Projects.css";
import ProjectCard from "./ProjectCard";
import projectDetails from "./ProjectDetails";

export default function Projects() {
  const projectsArr = projectDetails.map((data) => (
    <ProjectCard
      id={data.id}
      link={data.link}
      image={data.image}
      title={data.title}
      description={data.description}
      demo={data.demo}
    />
  ));
  return (
    <>
      <section id="projects" className="projects">
        <div className="heading">
          <span>PROJECTS</span>
          <span className="bar">
            <span className="bar-second"></span>
          </span>
          <div className="project-container">
            {projectsArr}
          </div>
        </div>
      </section>
    </>
  );
}
