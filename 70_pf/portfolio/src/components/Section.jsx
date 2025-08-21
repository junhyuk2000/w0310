import React from "react";
import Introduce from "../components/Introduce";
import Skill from "../components/Skill";
import "../css/Section.css";
export default function Section() {
  return (
    <div className="section">
      <Introduce />
      <Skill />
    </div>
  );
}
