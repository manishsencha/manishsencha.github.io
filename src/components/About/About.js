import React from "react";
import { ArrowForwardIos } from "@material-ui/icons";
import "./About.css";
import details from "./details";
import useWindowWidth from "../../utils/windowWidth";

function AboutDataObj(props) {
  return (
    <div className="about-details-card">
      <ArrowForwardIos />
      <div className="about-details-head">{props.head}:&nbsp;</div>
      <div className="about-details-data">{props.data}</div>
    </div>
  );
}

function About() {
  const width = useWindowWidth();
  return (
    <div id="about">
      <div className="about-heading">About</div>
      <div className="about-image-container">
        <img
          src={require("../../Images/myimagewhite.jpg").default}
          alt="myimage"
          style={{ width: width - width / 20, maxWidth: "400px" }}
        />
      </div>
      <p className="about-text">React Developer &amp;</p>
      <div className="about-details-container">
        {details.map((data) => {
          return (
            <AboutDataObj key={data.id} head={data.head} data={data.data} />
          );
        })}
      </div>
    </div>
  );
}

export default About;
