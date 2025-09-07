import React from 'react'
import { useState } from 'react'
import "./Rank.css"
export default function Rank({ src , title , age , metaData , categories , alt , videoId , onOpenDetail }) {
      const [isOpen,setIsOpen] = useState(false);
  return (
    <>
        <div>
            <div className='ranking_item'
                onMouseEnter={()=>setIsOpen(true)}
                onMouseLeave={()=>setIsOpen(false)}
            >
                <img src={src} alt={alt} />
                <div className={`ranking_modal_small ${isOpen ? "show" : ""}`}>
                <img src={src} alt={alt} />
                <h4 className="ranking_modal_title">{title}</h4>
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
        </div>
        
    </>
  )
}
