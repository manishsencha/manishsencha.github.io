import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import useWindowWidth from "./utils/windowWidth";
import useWindowHeight from "./utils/windowHeight";
function App() {
  const [loading, setLoading] = useState(true);
  const height = useWindowHeight();
  const width = useWindowWidth();
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  });

  return loading ? (
    <div
      style={{
        height: height,
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Loading
    </div>
  ) : (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
