import React from "react";
import useWindowWidth from "../../utils/windowWidth";
import "./Resume.css";
function Resume() {
  const width = useWindowWidth();
  return (
    <div id="resume">
      <div className="resume-heading">Resume</div>
      <div>
        <embed
          src={require("../../assets/0801CS191048_BT_CS_Resume.pdf").default}
          type="application/pdf"
          width={width - width / 10}
          style={{ maxWidth: "800px", maxHeight: "1000px", height:"100vh" }}

        />
      </div>
    </div>
  );
}

export default Resume;
