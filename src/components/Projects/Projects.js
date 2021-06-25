import React, { useState } from "react";
import "./Projects.css";
import useWindowWidth from "../../utils/windowWidth";
import {
  ArrowBackIos,
  ArrowForwardIos,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@material-ui/icons";
import projectDetails from "./projectDetails";

function Projects() {
  const width = useWindowWidth() - useWindowWidth() / 20;
  const height = (3 * width) / 4;
  const [slide, setSlide] = useState(0);
  const [projectsCount] = useState(5);

  function handlePrevious() {
    if (slide === 0) {
      return setSlide(projectsCount - 1);
    }
    return setSlide((slide) => slide - 1);
  }
  function handleNext() {
    if (slide === projectsCount - 1) {
      return setSlide(0);
    }
    return setSlide((slide) => slide + 1);
  }

  return (
    <div id="projects">
      <div className="projects-heading">Projects</div>
      <div className="projects-carousel-container">
        <img
          src={require("../../Images/" + projectDetails[slide].image).default}
          style={{
            width: width,
            height: height,
            maxWidth: "1100px",
            maxHeight: "800px",
            position: "relative",
          }}
          alt={projectDetails[slide]}
          className="projects-carousel-image"
        />
        <div
          className="projects-carousel-control-container"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
          }}
        >
          <div
            className="projects-carousel-navigation-button projects-carousel-control-left"
            onClick={handlePrevious}
          >
            <ArrowBackIos fontSize="large" />
          </div>
          <div
            className="projects-carousel-navigation-button projects-carousel-control-right"
            onClick={handleNext}
          >
            <ArrowForwardIos fontSize="large" />
          </div>
        </div>
      </div>

      <div className="projects-carousel-track-slide">
        {slide === 0 ? (
          <RadioButtonChecked />
        ) : (
          <RadioButtonUnchecked
            style={{ cursor: "pointer" }}
            onClick={() => setSlide(0)}
          />
        )}
        {slide === 1 ? (
          <RadioButtonChecked />
        ) : (
          <RadioButtonUnchecked
            style={{ cursor: "pointer" }}
            onClick={() => setSlide(1)}
          />
        )}
        {slide === 2 ? (
          <RadioButtonChecked />
        ) : (
          <RadioButtonUnchecked
            style={{ cursor: "pointer" }}
            onClick={() => setSlide(2)}
          />
        )}
        {slide === 3 ? (
          <RadioButtonChecked />
        ) : (
          <RadioButtonUnchecked
            style={{ cursor: "pointer" }}
            onClick={() => setSlide(3)}
          />
        )}
        {slide === 4 ? (
          <RadioButtonChecked />
        ) : (
          <RadioButtonUnchecked
            style={{ cursor: "pointer" }}
            onClick={() => setSlide(4)}
          />
        )}
      </div>
      <div className="projects-details">
        <div className="project-heading">{projectDetails[slide].title}</div>
        <div className="project-description">
          {projectDetails[slide].description}
        </div>
        <div className="project-target-links">
          <a
            href={projectDetails[slide].github}
            target="_blank"
            className="project-target-link"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            href={projectDetails[slide].project}
            className="project-target-link"
            target="_blank"
            rel="noreferrer"
          >
            DEMO
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
