import React from "react";
import "../CSS/Projects.css";
import Quicksort from "./Quicksort";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <div className="heading">
          <span>PROJECTS</span>
          <span className="bar ">
            <span className="bar-second"></span>
          </span>
        </div>
        <Quicksort />
      </section>
    </>
  );
}
