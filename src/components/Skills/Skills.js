import React from "react";
import "./Skills.css";
import skillData from './skillsdata'
function SkillContainer(props) {
  return (
    <div className="skill-container-component">
      <div className="skill-container-component-logo">
        <img src={props.icon} alt={props.name} height="50px" />
      </div>
      <div className="skill-container-component-name">{props.name}</div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills">
      <div className="skills-heading">Skills</div>
      <div className="skills-text">
        I love to learn new technolgies and to understand how it is working
        behind the scenes leading to better understanding of the system and
        hence improving reliability and efficiency.
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%", maxWidth: "800px", flexWrap: "wrap", overflow: "hidden" }}>
        {skillData.map((data, idx) =>
          <SkillContainer key={idx} name={data.name} icon={data.icon} />
        )}
      </div>

    </div>
  );
}

export default Skills;
