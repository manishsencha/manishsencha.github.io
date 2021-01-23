import React from "react";

// import { Link } from "@material-ui/core";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbarr from "./Components/Navbarr";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Home />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
