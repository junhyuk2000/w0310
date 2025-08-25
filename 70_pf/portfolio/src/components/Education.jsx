import React from "react"
import "../css/Education.css"
import { educations } from "../data/educationData"
export default function Education() {
  return (
    <div className="education">
      <h2 className="education_title">Education</h2>
      <div className="school">
       {educations.map((elm)=>(
        <div className={elm.school}>
            <h4>{elm.schoolName} </h4>
            <p>{elm.state}</p>
        </div>
       ))}
      </div>
    </div>
  )
}
