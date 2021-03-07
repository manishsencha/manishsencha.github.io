import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloudDownloadOutlined from "@material-ui/icons/CloudDownloadOutlined";
import React from "react";
import "../CSS/About.css";
import pdf from '../assets/0801CS191048_BT_CS_Resume.pdf'
export default function About() {
  return (
    <>
      <section id="about">
        <div className="about">
          <div className="heading">
            <span> ABOUT</span>
            <span className="bar ">
              <span className="bar-second"></span>
            </span>
          </div>
          <div className="description">
            <p>
              I am a tech enthusiast who likes to learn how things work and
              actually this helps me to learn new things faster, that's why my
              early learning is faster. <br />I also like to solve problems
              doesn't matter I successfully solve the problem but It satisfies
              me.
            </p>
          </div>
          <div className="my-details">
            <img
              src={require("../Images/myimage.jpg").default}
              className="myimage"
              alt="myimage"
            />
            <p className="image-head-text">
              Front-end Developer and Competitive Programmer
            </p>
            <p className="image-sub-text">
              <i>
                I can't say that I am the best because learning never ends, but
                I will try my best to deliver the requirements, achieve the goal
                ie. Learning.
              </i>
            </p>
            <div className="details-list">
              <ul>
                <li className="points">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="arrow-right"
                  />
                  <strong className="points-title">Birthday: </strong>
                  &nbsp; 04 Oct 2001
                </li>
                <li className="points">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="arrow-right"
                  />
                  <strong className="points-title">Website: </strong>
                  &nbsp; www.manishsencha.github.io
                </li>
                <li className="points">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="arrow-right"
                  />
                  <strong className="points-title">Phone: </strong>
                  &nbsp; +91 8435857279
                </li>
                <li className="points">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="arrow-right"
                  />
                  <strong className="points-title">City: </strong>
                  &nbsp; Barwaha, Madhya Pradesh, India
                </li>
                <li className="points">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="arrow-right"
                  />
                  <strong className="points-title">Age: </strong>
                  &nbsp; 19
                </li>
                <li className="points">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="arrow-right"
                  />
                  <strong className="points-title">Degree: </strong>
                  &nbsp; B. Tech. (Computer Science and Engineering)
                </li>

                <li className="points">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="arrow-right"
                  />
                  <strong className="points-title">Email: </strong>
                  &nbsp; er.manish.sencha@gmail.com
                </li>

                <li className="points">
                  <ArrowForwardIosIcon
                    fontSize="small"
                    className="arrow-right"
                  />
                  <strong className="points-title">
                    Looking For Internship:{" "}
                  </strong>
                  &nbsp; Yes
                </li>
              </ul>
            </div>
            <div>
             <strong>Download Resume : </strong>
              <a className="resume-link" href={pdf} target="_blank" rel="noreferrer">
                <Button color="primary" size="large" variant="contained">
                  {" "}
                  <CloudDownloadOutlined />
                  &nbsp; Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
