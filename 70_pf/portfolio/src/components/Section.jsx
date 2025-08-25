import React from "react";
import Introduce from "../components/Introduce";
import Skill from "../components/Skill";
import Education from "../components/Education";
import Project from "../components/Project";
import "../css/Section.css";
export default function Section() {
  return (
    <div className="section">
      <Introduce />
      <Education />
      <Skill />
      <Project />
    </div>
  );
}
