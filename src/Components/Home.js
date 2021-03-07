import { Tooltip } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import "../CSS/Home.css";
import Cube from "./Cube";

export default function Home() {
  return (
    <>
      <div id="home" className="home">
        <Cube />
        <h1>Manish Sencha</h1>
        <h2>I am a Student, Learner and a React Developer.</h2>
        <h3>Enthusiasm drives me :)</h3>
        <ul>
          <li>
            <Tooltip title="GitHub" placement="top" arrow>
              <a
                href="https://github.com/manishsencha"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Facebook" placement="top" arrow>
              <a
                href="https://www.facebook.com/manish.sencha.0304/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Instagram" placement="top" arrow>
              <a
                href="https://www.instagram.com/__maniaxiom__/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Twitter" placement="top" arrow>
              <a
                href="https://twitter.com/maniaxiom"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </Tooltip>
          </li>
        </ul>
      </div>
    </>
  );
}
