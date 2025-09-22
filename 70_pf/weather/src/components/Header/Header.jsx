import React from 'react'
import "../Header/Header.css"

export default function Header({ value, onChange, onSubmit }) {
  const handleKeyDown =(e)=>{
    if(e.key === "Enter") onSubmit(); 
  }

  return (
    <header className='header'>
      <div className='logo'><a href="/"><img src="/images/Header/logo.png" alt="dd" /></a></div>
      <div className='header_search'>
        <input 
        type="text" 
        className='header_input' 
        placeholder='도시 명 입력 ( 영문, ex: seoul )'
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <button className='search_btn' onClick={onSubmit}>검색</button>
      </div>
    </header>
  )
}
