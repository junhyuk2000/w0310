import React from 'react'
import "./MovieList.css"
import { useState } from 'react'


export default function MovieList({src, title, age , metaData , categories , alt , videoId , onOpenDetail}) {

  const [isOpen,setIsOpen] = useState(false);
  
  return (
    <>
      <div className='list_item'
        onMouseEnter={()=>setIsOpen(true)}
        onMouseLeave={()=>setIsOpen(false)}
      >
        <img src={src} alt={alt} />
          <div className={`modal_small ${isOpen ? "show" : ""}`}>
            <img src={src} alt={alt} />
            <h4 className="modal_title">{title}</h4>
            <div className="list_btn">
              <div className='interaction_btn'>
                <button>▶</button>
                <button>+</button>
                <button>♡</button>
              </div>
              <div className='detail_btn'>
                <button onClick={()=>onOpenDetail?.({src,title,videoId,age,categories,alt,metaData})}>∨</button>
                </div>
            </div>
            <div className='list_item_info'>
              <div className='age'>
                <img src={age} alt={alt} />
              </div> 
              <span>{metaData}</span></div>
              <div className='category'>
                <span>{categories}</span>
              </div>
          </div>
        
      </div>
    </>
  )
}
