import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import useWindowWidth from "./utils/windowWidth";
import useWindowHeight from "./utils/windowHeight";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
//  "Audio"
//  |"BallTriangle"
//  |"Bars"
//  |"Circles"
//  |"Grid"
//  |"Hearts"
//  |"Oval"
//  |"Puff"
//  |"Rings"
//  |"TailSpin"
//  |"ThreeDots"
//  |"Watch"
//  |"RevolvingDot"
//  |"Triangle"
//  |"Plane"
//  |"MutatingDots"
//  |"CradleLoader";
function App() {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const width = useWindowWidth() - useWindowWidth() / 10;
  const height = useWindowHeight() - useWindowHeight() / 10;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 5500);
  });
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".my-app").style.display = "block";
    }, 5400);
  });
  return loading ? (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="Grid" color="rgb(var(--primary-color))" />
    </div>
  ) : (
    <div
      className="my-app"
      style={{
        display: "none",
        opacity: opacity,
        transition: "opacity 1s ease",
      }}
    >
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <ScrollToTop />
    </div>
  );
}

export default App;
