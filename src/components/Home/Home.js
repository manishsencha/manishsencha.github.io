import React from "react";
import {
  GitHub,
  Instagram,
  Facebook,
  Email,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
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
        <a
          href="https://github.com/manishsencha"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <GitHub fontSize="large" />
        </a>
        <a
          href="https://instagram.com/__maniaxiom__"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <Instagram fontSize="large" />
        </a>
        <a
          href="https://facebook.com/manish.sencha.0304"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <Facebook fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/manish-sencha"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <LinkedIn fontSize="large" />
        </a>
        <a
          href="https://twitter.com/maniaxiom"
          className="social-link"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter fontSize="large" />
        </a>
        <a
          href="mailto:er.manish.sencha@gmail.com"
          className="social-link"
          target="_blank"
          rel="noreferrer"
        >
          <Email fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Home;
