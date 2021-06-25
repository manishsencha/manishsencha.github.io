import React from "react";
import { LinearProgress } from "@material-ui/core";
import skillData from "./skillsdata";
import "./Skills.css";

function SkillMeter(props) {
  return (
    <div style={{ width: "100%", margin: "3px auto 5px auto" }}>
      <div style={{ width: "80%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <span>{props.name}</span>
          <span>{props.level}%</span>
        </div>
        <LinearProgress variant="determinate" value={props.level} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills">
      <div className="skills-heading">Skills</div>
      <div style={{width:"90%", marginTop: "1rem"}}>
        {skillData.map((data) => {
          return (
            <SkillMeter key={data.id} level={data.level} name={data.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
