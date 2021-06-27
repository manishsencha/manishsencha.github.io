import React, { useEffect, useState } from "react";
import { Preload } from "react-preload";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
  const [projectsCount] = useState(projectDetails.length);

  const [imageArray] = useState(
    projectDetails.map((data) => "../../Images" + data.image)
  );
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
  useEffect(() => {
    const x = setInterval(() => {
      setSlide((slide) => (slide + 1) % projectsCount);
    }, 5000);
    return () => clearInterval(x);
  }, [projectsCount]);

  return (
    <div id="projects">
      <div className="projects-heading">Projects</div>
      <div
        className="projects-carousel-container"
        style={{
          height: height,
          width: width,
          maxWidth: "1100px",
          maxHeight: "800px",
        }}
      >
        <Preload
          loadingIndicator={
            <Loader type="Bars" color="rgb(var(--primary-color))" />
          }
          images={imageArray}
          autoResolveDelay={3000}
          resolveOnError={true}
          mountChildren={true}
        >
          {projectDetails.map((data) => (
            <img
              key={data.title}
              src={require("../../Images/" + data.image).default}
              style={{
                width: width,
                height: height,
                maxWidth: "1100px",
                maxHeight: "800px",
                opacity: data.id - slide - 1 === 0 ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
              alt={data.title}
              className="projects-carousel-image"
            />
          ))}
        </Preload>
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
        {projectDetails.map((data) =>
          data.id - 1 - slide === 0 ? (
            <RadioButtonChecked key={data.id} />
          ) : (
            <RadioButtonUnchecked
              key={data.id}
              onClick={() => setSlide(data.id - 1)}
              style={{ cursor: "pointer" }}
            />
          )
        )}
      </div>
      <div
        className="projects-details-container"
        style={{
          width: "100%",
          display: "block",
        }}
      >
        {projectDetails.map((data) => (
          <div
            className="projects-details"
            style={{
              display: data.id - slide - 1 === 0 ? "block" : "none",
              transition: "display 0.5s ease-in-out",
            }}
            key={data.id}
          >
            <div className="project-heading">{data.title}</div>
            <div className="project-description">{data.description}</div>
            <div className="project-target-links">
              <a
                href={data.github}
                target="_blank"
                className="project-target-link"
                rel="noreferrer"
              >
                GITHUB
              </a>
              <a
                href={data.project}
                className="project-target-link"
                target="_blank"
                rel="noreferrer"
              >
                DEMO
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
