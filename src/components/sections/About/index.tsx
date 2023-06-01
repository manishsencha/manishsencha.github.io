import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mdx-heading text-primary dark:text-primary-dark break-words text-5xl font-display font-bold leading-tight flex justify-between align-center">
        ABOUT
      </h1>
      <div className="mt-3 flex justify-center">
        <StaticImage
          src="../../../images/IMG_MS.jpg"
          alt="Manish Sencha"
          className="w-80 mr-3"
        />
        <div className="max-w-xl">
          <p>
            I'm a passionate tech enthusiast who loves solving problems and
            working on projects that challenge me. <br /> Experienced working
            with Javscript, Typescript, Java, Angular, React, ExpressJS, Spring
            Boot, Linux, Mysql, MongoDB, CI/CD, Docker.
          </p>
          <table className="mt-3 border-spacing-2 border-separate">
            <tbody>
              <tr>
                <td>
                  <MdKeyboardArrowRight className="w-10 h-10" />
                </td>
                <td>
                  <b>Degree</b>
                </td>
                <td>
                  <b> : </b>
                </td>
                <td>
                  <p>Bachelor of Technology in CSE</p>
                </td>
              </tr>
              <tr>
                <td>
                  <MdKeyboardArrowRight className="w-10 h-10" />
                </td>
                <td>
                  <b>City</b>
                </td>
                <td>
                  <b> : </b>
                </td>
                <td>
                  <p>Barwaha, Khargone, MP</p>
                </td>
              </tr>
              <tr>
                <td>
                  <MdKeyboardArrowRight className="w-10 h-10" />
                </td>
                <td>
                  <b>Email</b>
                </td>
                <td>
                  <b> : </b>
                </td>
                <td>
                  <p>manishsencha2001@gmail.com</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
