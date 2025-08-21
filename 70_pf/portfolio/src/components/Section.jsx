import React from "react";
import Introduce from "../components/Introduce";
import Skill from "../components/Skill";
import Education from "../components/Education";
import "../css/Section.css";
export default function Section() {
  return (
    <div className="section">
      <Introduce />
      <Education />
      <Skill />
    </div>
  );
}
