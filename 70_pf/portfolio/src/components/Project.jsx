import React from "react";
import "../css/Project.css"
import Modal from "../components/Modal"
import { projects,projectDetail } from '../data/projectsData'
import { useState } from "react";

export default function Project() {

  const Tabs = ["All","Team","Personal"];
  const [tab,setTab] = useState("All");
  const list = tab === "All" ? projects : projects.filter((p)=>p.type === tab);

  const [open,setOpen] = useState(false);
  const [selected,setSelected] = useState(null);
  const openModal = (id) => {
    const detail = projectDetail.find((d) => d.id === id);
    setSelected(detail || null);
    setOpen(true);
  };
  return <div
  className="project">
    <h4 className="project_title">Project</h4>
    <div className="tab_menu">
      {Tabs.map((name)=>(
        <button
        key={name}
        className={`tab ${tab === name ? "active": ""}`}
        onClick={()=>setTab(name)}
        >
          {name}          
        </button>
      ))}
    </div>
    <ul className="project_overview">
      {list.map(p=>(
        <li key={p.id}
        className="card">
          <div className="thumb">
            <img src={p.img} alt={p.alt} />
            <button className="view_btn" onClick={() => openModal(p.id)}>View Project</button>
          </div>
          <h5 className="project_name">{p.title}</h5>
          <div className="p_skill">
            {p.skill.map(p=><span key={p} className="project_skill">{p}</span>)}
          </div>

        </li>  
      ))}
    </ul>

    {open && <Modal onClose={() => { setOpen(false); setSelected(null); }} project={selected}/>}
  </div>;
}


