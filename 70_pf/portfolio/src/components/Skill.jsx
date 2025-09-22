import React from "react";
import "../css/Skill.css";

export default function Skill() {
  const skills = [
    {label:"HTML/CSS" , value:90}, 
    {label:"JavaScript (ES6+)", value:80}, 
    {label:"React", value:70},
  ];
  const tools = [
    {label:"Git / GitHub" , value:60}, 
    {label : "Photoshop", value:40},
    {label : "Figma", value:80}, 
    {label : "Notion", value:60},

    {label:"Bootstrap 5", value:50},
    {label:"JQuary", value:50},

  ];
  
  return (
    <div className="skill_section">
      <h2 className="main_skill">Main Skill</h2>
      <div className="skill">
        <h4 className="skill_title">Skills</h4>
        <div>
          {skills.map(s => (
            <SkillBar key={s.label} skill={s.label} value={s.value}/>
))}
        </div>
      </div>
      <div className="tools">
        <h4 className="skill_title">Tools</h4>
        <ul>
          {tools.map(s=> (
           <SkillBar key={s.label} skill={s.label} value={s.value}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkillBar({skill,value}) {
  return (
    <div>
      <div className="skill_row">
        <span className="skill_label">{skill}</span>
        <div className="bar">
          <div className="progress_bar">
            <div className="percent" style={{ width: `${value}%` }}></div>
          </div>
          
        </div>
        <span className="skill_value">{value}%</span>
      </div>
      
    </div>
  ); 
}