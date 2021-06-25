import React, { useState } from "react";
import "./Projects.css";
import useWindowWidth from "../../utils/windowWidth";
import {
  ArrowBackIos,
  ArrowForwardIos,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@material-ui/icons";

const list = [
  {
    title: "CPP Compiler",
    description:
      "This is an online C++ compiler. Frontend for the project is developed using React and the editor used in the project is monaco editor which is same editor that powers VS Code Editor. Backend for the project is developed using Express framework. The API used in the project for compiling the code is used from https://godbolt.org/",
    github: "https://github.com/manishsencha/cpp-compiler",
    project: "https://cpp-compiler.herokuapp.com/",
    image: "cppcompiler.png",
  },
  {
    title: "Movies Search",
    description:
      "This is movie search webpage. The program is developed using React. The api used in the project is OmdbApi for fetching the movies.",
    github: "https://github.com/manishsencha/movies-search",
    project: "https://manishsencha.github.io/movies-search",
    image: "moviessearch.png",
  },
  {
    title: "Todo App",
    description:
      "The project is a basic todo app. It is simple static webpage to manage your tasks. The project is based on ReactJS with Redux state management. The components used in the project are from Material-UI: A popular React UI framework.",
    github: "https://github.com/manishsencha/todo-app",
    project: "https://github.com/manishsencha/Todo-app",
    image: "todoapp.png",
  },
  {
    title: "Typing Test",
    description:
      "This is a typing test program. The project is built using HTML, CSS, JavaScript and Bootstrap. The time to take test is 60 seconds and after completing it shows result with incorrect words, correct words and accuracy.",
    github: "https://github.com/manishsencha/typing-test",
    project: "https://github.com/manishsencha/typing-test",
    image: "typingtest.png",
  },
  {
    title: "URL-Shortener",
    description:
      'This project is developed to shorten long URLs. It generates a short URL based on input long URL. The project is based on ExpressJS framework for web and mobile applications. It is also connected to mongodb database to store the URLs. An NPM package called "shortid" was used to generate short URLs.',
    github: "https://github.com/manishsencha/URL-Shortener",
    project: "https://m-urlshortener.herokuapp.com/",
    image: "urlshortener.png",
  },
];


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
          src={require("../../Images/" + list[slide].image).default}
          style={{
            width: width,
            height: height,
            maxWidth: "1100px",
            maxHeight: "800px",
            position: "relative",
          }}
          alt={list[slide]}
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
        <div className="project-heading">{list[slide].title}</div>
        <div className="project-description">{list[slide].description}</div>
        <div className="project-target-links">
          <a
            href={list[slide].github}
            target="_blank"
            className="project-target-link"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            href={list[slide].project}
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
