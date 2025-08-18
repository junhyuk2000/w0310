import "../css/Home.css";
import MovieList from "./MovieList";
import { useState } from "react";
import lists from "../data/movie.json";
const { movieEveryoneLove, koreanDrama, animation } = lists;

export default function Home() {
  const [tab, setTab] = useState("everyone");

  const listTitle = tab === "everyone" ? "누구나 사랑하는 명작" : "한국 드라마";
  const listItem = tab === "everyone" ? movieEveryoneLove : koreanDrama;

  const handleListChange = () => {
    setTab((tab) => (tab === "everyone" ? "korean" : "everyone"));
  };
  return (
    <div>
      <div className="section1">
        <div className="movie_logo">
          <img src="/images/movie_logo.png" alt="귀멸의칼날 로고" />
        </div>
        <p className="movie_info">
          혈귀로 변해버린 여동생 네즈코를 인간으로 되돌리기 위해 혈귀를 사냥하는
          조직인 《귀살대》에 입대한 카마도 탄지로. 입대 후 동료인 아가츠마
          젠이츠, 하시비라 이노스케와 함께 많은 혈귀와 싸우고, 성장하면서 세
          사람의 우정과 유대는 깊어진다.
        </p>
        <div className="movie_btn">
          <button className="play_btn"> ▶ 재생</button>
          <button className="info_btn">상세 정보</button>
        </div>
      </div>
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
          {listItem.map((movie) => (
            <MovieList src={movie.src} alt={movie.alt} key={movie.id} />
          ))}
        </div>

        <div className="title_box">
          <h2 className="list_title">애니메이션</h2>
        </div>
        <div className="movie_list">
          {animation.map((movie) => (
            <MovieList src={movie.src} alt={movie.alt} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
