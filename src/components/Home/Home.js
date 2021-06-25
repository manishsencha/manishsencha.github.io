import React from "react";
import { GitHub, Instagram, Facebook, Email, LinkedIn } from "@material-ui/icons";
import Typewriter from "typewriter-effect";
import "./Home.css";

function Home() {
  return (
    <div id="home">
      <div className="home-heading-name">MANISH SENCHA</div>
      <div className="home-heading-text">
        I am&nbsp;
        <Typewriter
          options={{
            strings: [
              "a Student.",
              "a Learner.",
              "an Explorer.",
              "a React Developer.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="home-social-links">
        <GitHub fontSize="large" />
        <Instagram fontSize="large" />
        <Facebook fontSize="large" />
        <LinkedIn fontSize="large" />
        <Email fontSize="large" />
      </div>
    </div>
  );
}

export default Home;
