import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState("flex")
  useEffect(() => {
    window.onload = function () {
      setLoading(false);
      setTimeout(() => { setDisplay("none") }, 100)
    }
  }, [])
  return (<div className="my-app">
    <div style={{ transition: "opacity 1s ease-in-out", position: "absolute", height: "100%", width: "100%", backgroundColor: "white", opacity: loading ? 1 : 0, display: display, justifyContent: "center", alignItems: "center" }}>
      <Loader type="Grid" color="rgb(var(--primary-color))" />
    </div>
    <div style={{ height: loading ? 0 : "", overflow: loading ? "hidden" : "" }}>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <ScrollToTop />
    </div>
  </div >
  )
}

export default App;
