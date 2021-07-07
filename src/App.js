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

function App() {
  const [loading, setLoading] = useState(true);
  const width = useWindowWidth() - useWindowWidth() / 10;
  const height = useWindowHeight() - useWindowHeight() / 10;
  useEffect(() => {
    window.onload = function () {
      setLoading(false);
    }
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
