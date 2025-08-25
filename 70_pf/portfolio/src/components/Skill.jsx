import React from "react";
import "../css/Skill.css";

export default function Skill() {
  const skills = ["HTML5", "CSS", "JavaScript (ES6+)", "React"];
  const tools = ["Git / GitHub", "Figma", "Notion"];
  
  return (
    <div className="skill_section">
      <h2 className="main_skill">Main Skill</h2>
      <div className="skill">
        <h4 className="skill_title">Skills</h4>
        <ul>
          {skills.map((elm, i) => (
            <li key={i}>{elm}</li>
          ))}
        </ul>
      </div>
      <div className="tools">
        <h4 className="skill_title">Tools</h4>
        <ul>
          {tools.map((elm, i) => (
            <li key={i}>{elm}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
