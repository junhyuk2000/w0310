import React from 'react'
import "../css/Modal.css"
export default function Modal({onClose, project}) {
    const {title, img, skill, desc,url,github,main} = project;
  return (
    <div className="detail_modal" onClick={onClose}>
      <div className="detail_overview" onClick={(e) => e.stopPropagation()}>
        <img src={img} alt={title} className="detail_img" />
        <div className='detail_txt'>
            <h3 className="detail_title">{title}</h3>
            <div className='detail_skills'>{skill}</div>
            <div className='detail_url'>
                <p>URL : {url}</p>
                <p>깃허브 : {github}</p>
            </div>
            <div className='detail_main'>
                <p> 주요기능 : {main} </p>
            </div>
            <div className="detail_desc">프로젝트 소개 <p>{desc}</p></div>
        </div>
      </div>
    </div>
  )
}
