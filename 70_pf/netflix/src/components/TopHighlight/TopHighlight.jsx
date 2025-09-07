import './TopHighlight.css'
import React from 'react'

export default function TopHighlight({ id,src,logo,desc }) {
  const bg = {
    backgroundImage:`url(${src})`
  }

  return (
    <div className="top_highlight" style={bg}>
        <div className="movie_logo">
            <img src={logo}/>
        </div>
        <p className="movie_info">
        {desc}
        </p>
        <div className="movie_btn">
            <button className="play_btn"> ▶ 재생</button>
            <button className="info_btn">상세 정보</button>
        </div>
    </div>
)
}
