import React from 'react'
import "../css/MovieList.css"

export default function MovieList({src,alt}) {
  return (
    <div className='list_item'>
      <img src={src} alt={alt} />
    </div>
  )
}
