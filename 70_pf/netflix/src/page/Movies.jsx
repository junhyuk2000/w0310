import MovieList from "../components/MovieList/MovieList";
import TopHighlight from "../components/TopHighlight/TopHighlight";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import Rank from "../components/Rank/Rank";
import "../css/Movies.css";
import lists from "../data/movie.json";
import { useState } from 'react'
const { TopInfo,hollywoodMovie,koreanMovie,comedy,ranking } = lists;

export default function Movies() {

  const [showDetail,setShowDetail] = useState(null);
  const topInfo = TopInfo.find(v => v.id===12); 
  
  return (
    <div className="movies">
      <TopHighlight 
      src={topInfo.src}
      alt={topInfo.alt}
      logo={topInfo.logo}
      desc={topInfo.desc}
      />
      <div>
        <div className="title_box">
          <h2 className="list_title">할리우드 영화</h2>
        </div>
        <div className="movie_list">
          {hollywoodMovie.map((m)=>(
            <MovieList key={m.id} {...m} onOpenDetail={setShowDetail}/>
          ))}
        </div>
      </div>

      <div>
        <div className="title_box">
          <h2 className="list_title">평단의 찬사를 받은 한국 영화</h2>
        </div>
        <div className="movie_list">
          {koreanMovie.map((m)=>(
            <MovieList key={m.id} {...m} onOpenDetail={setShowDetail}/>
          ))}
        </div>
      </div>
      <div>
        <div className="title_box">
          <h2 className="list_title">오늘의 한국 영화</h2>
        </div>
        <div className="movie_list">
          {ranking.map((m)=>(
            <Rank key={m.id} {...m} onOpenDetail={setShowDetail}/>
          ))}
        </div>
      </div>

      <div>
        <div className="title_box">
          <h2 className="list_title">코미디 영화</h2>
        </div>
        <div className="movie_list">
          {comedy.map((m)=>(
            <MovieList key={m.id} {...m} onOpenDetail={setShowDetail}/>
          ))}
        </div>
      </div>
      { showDetail && (
        <MovieDetail 
        movie={showDetail}
        onClose={()=>setShowDetail(null)}
        />
      )}
    </div>
  );
}
