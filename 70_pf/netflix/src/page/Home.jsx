import "../css/Home.css";
import MovieList from "../components/MovieList/MovieList";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import { useState } from "react";
import lists from "../data/movie.json";
import TopHighlight from "../components/TopHighlight/TopHighlight";
const { movieEveryoneLove, koreanDrama, animation,TopInfo } = lists;

export default function Home() {
  const topInfo = TopInfo.find(v => v.id === 11);

  const [tab, setTab] = useState("everyone");
  const [showDetail, setShowDetail] = useState(null);

  const listTitle = tab === "everyone" ? "누구나 사랑하는 명작" : "한국 드라마";
  const listItem = tab === "everyone" ? movieEveryoneLove : koreanDrama;

  const handleListChange = () => {
    setTab((tab) => (tab === "everyone" ? "korean" : "everyone"));
  };


  return (
    <div>
      <TopHighlight 
      src={topInfo.src}
      logo={topInfo.logo}
      desc={topInfo.desc}
      />
      <div>
        <div>
          <div className="title_box">
            <h2 className="list_title">{listTitle}</h2>
            <div className="list_btn">
              <button onClick={handleListChange} className="prev_btn">
                &lt;
              </button>
              <button onClick={handleListChange} className="next_btn">
                &gt;
              </button>
            </div>
          </div>
          <div className="movie_list">
            {listItem.map((m) => (
              <MovieList key={m.id} {...m} onOpenDetail={setShowDetail}/>
            ))}
          </div>
        </div>

        <div>
          <div className="title_box">
            <h2 className="list_title">애니메이션</h2>
          </div>
          <div className="movie_list">
            {animation.map((m) => (
              <MovieList key={m.id} {...m} onOpenDetail={setShowDetail}/>
            ))}
          </div>
        </div>
      </div>

      {/* 디테일 페이지 */}
      { showDetail && (
        <MovieDetail 
        movie={showDetail}
        onClose={()=>setShowDetail(null)}
        />
      )}
    </div>
  );
}
