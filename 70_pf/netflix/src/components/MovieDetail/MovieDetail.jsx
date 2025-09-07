import React from 'react'
import "./MovieDetail.css" 
import { useEffect,useState } from "react";

export default function MovieDetail({movie,onClose}) {
  const { src,title,age,metaData,categories,alt,videoId } = movie;
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div className='detail_modal_box' onClick={onClose}>
      <div className={`detail_modal ${show ? "detail" : ""}`}>
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&showinfo=0&loop=1&playlist=${videoId}`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
        {/* 버튼 앱솔루트 */}
        <div className='detail_btn_box'>
          <button className='play_btn' id='detail_play'>▶ 재생</button>
          <button className='detail_btn2'>+</button>
          <button className='detail_btn2'>♡</button>
        </div>
        <div className='detail_title'>
          <img src={age} alt={alt} />
          <h2>{title}</h2>
        </div>

        <div>
          <div className='detail_desc'>
            <p>{categories}</p>
            <p>{metaData}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
