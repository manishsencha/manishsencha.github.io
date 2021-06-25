import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
