import React from "react";
import { CloudDownloadOutlined, ArrowForwardIos } from "@material-ui/icons";
import { Preload } from "react-preload";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./About.css";
import details from "./details";
import useWindowWidth from "../../utils/windowWidth";
import resumePdf from "../../assets/0801CS191048_BT_CS_Resume.pdf";
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
  const width = useWindowWidth() - useWindowWidth() / 20;
  return (
    <div id="about">
      <div className="about-heading">About</div>
      <div className="about-image-container">
        <Preload
          loadingIndicator={
            <Loader type="Puff" color="rgb(var(--primary-color))" />
          }
          images={[require("../../Images/myimagewhite.jpg").default]}
          autoResolveDelay={3000}
          resolveOnError={true}
          mountChildren={true}
        >
          <img
            src={require("../../Images/myimagewhite.jpg").default}
            alt="myimage"
            style={{ width: width - width / 20, maxWidth: "400px" }}
          />
        </Preload>
      </div>
      <h1 className="about-description-heading">MERN Stack Developer</h1>
      <p className="about-description-text">
        I am a tech enthusiast who loves to solve problems and learn new
        technologies and also understand their working rather than just using
        it. I use different coding platforms{" "}
        <strong>(CodeChef, Codeforces, Leetcode, etc.)</strong> to enhance my
        coding skills.
      </p>
      <div className="about-details-container">
        {details.map((data) => {
          return (
            <AboutDataObj key={data.id} head={data.head} data={data.data} />
          );
        })}
        <div className="download-resume-card">
          <div className="download-resume-text">Download Resume:&nbsp;</div>
          <a className="download-resume-link" href={resumePdf} rel="noreferrer">
            <CloudDownloadOutlined />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
