import React from "react";
import { IconType } from "react-icons";
import { TbBrandCpp, TbBrandReact } from "react-icons/tb";
import { DiJava } from "react-icons/di";
import {BsCode} from 'react-icons/bs'
import {
  SiExpress,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
  SiWindows,
} from "react-icons/si";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
interface Skill {
  langCd: string;
  langNm: string;
  icon: IconType;
}

const skills: Skill[] = [
  { langCd: "c", langNm: "C", icon: BsCode },
  { langCd: "cpp", langNm: "C++", icon: TbBrandCpp },
  { langCd: "java", langNm: "Java", icon: DiJava },
  { langCd: "js", langNm: "Javascript", icon: SiJavascript },
  { langCd: "ts", langNm: "Typescript", icon: SiTypescript },
  { langCd: "py", langNm: "Python", icon: FaPython },
  { langCd: "nodejs", langNm: "Node JS", icon: FaNodeJs },
  { langCd: "html", langNm: "HTML", icon: FaHtml5 },
  { langCd: "css", langNm: "CSS", icon: FaCss3Alt },
  { langCd: "react", langNm: "React", icon: TbBrandReact },
  { langCd: "angular", langNm: "Angular", icon: FaAngular },
  { langCd: "express", langNm: "Express", icon: SiExpress },
  { langCd: "springBoot", langNm: "Spring Boot", icon: SiSpringboot },
  { langCd: "mysql", langNm: "MySQL", icon: SiMysql },
  { langCd: "psql", langNm: "PostgreSQL", icon: SiPostgresql },
  { langCd: "mongoose", langNm: "MongoDB", icon: SiMongodb },
  { langCd: "windows", langNm: "Windows", icon: SiWindows },
  { langCd: "linux", langNm: "Linux", icon: SiLinux },
];

const Skills = () => {
  return (
    <div className="w-full mt-2 mx-auto container">
      <h1 className="mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-5xl font-display font-bold leading-tight flex justify-between align-center px-3">
        SKILLS
      </h1>
      <div className="flex flex-row justify-evenly flex-wrap">
        {skills.map((skill: Skill) => (
          <div
            className="flex flex-col items-center m-2 p-3 w-32 shadow-inner-border dark:shadow-inner-border-dark bg-card dark:bg-card-dark rounded-2xl"
            key={skill.langCd}
          >
            <div className="p-2">
              <skill.icon className="h-24 w-24" />
            </div>
            <div>{skill.langNm}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
