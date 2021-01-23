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
        <h2>I am a Student,   Learner and a React Developer.</h2>
        <h3>Enthusiasm drives me :)</h3>
        <ul>
          <li>
            <Tooltip title="Facebook" placement="top" arrow>
              <FacebookIcon />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Instagram" placement="top" arrow>
              <InstagramIcon />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="GitHub" placement="top" arrow>
              <GitHubIcon />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Twitter" placement="top" arrow>
              <TwitterIcon />
            </Tooltip>
          </li>
        </ul>
      </div>
    </>
  );
}
