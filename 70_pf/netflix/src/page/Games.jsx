import React from 'react'
import "../css/Games.css"
import { useState } from "react";
import TopHighlight from "../components/TopHighlight/TopHighlight";
import MovieList from "../components/MovieList/MovieList";
import lists from "../data/movie.json";
const { TopInfo,mobilegame,mobilegame2 } = lists;

export default function game() {

  const topInfo = TopInfo.find(v=>v.id===13); 

  return (
    <div>
       <div className="game">
          <TopHighlight 
          src={topInfo.src}
          alt={topInfo.alt}
          logo={topInfo.logo}
          desc={topInfo.desc}
          />
          <div>
            <div className="title_box">
              <h2 className="list_title" >회원님을 위한 인기 모바일 게임</h2>
            </div>
            <div className="movie_list games">
              {mobilegame.map((m)=>(
                <MovieList key={m.id} {...m} />
              ))}
            </div>
          </div>
          <div>
            <div className="title_box">
              <h2 className="list_title">스마트폰에서 부담 없이 플레이하는 모바일게임</h2>
            </div>
            <div className="movie_list games">
              {mobilegame2.map((m)=>(
                <MovieList key={m.id} {...m} />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
