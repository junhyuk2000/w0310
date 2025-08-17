import "../css/Home.css"
import MovieList from "./MovieList"

export default function Home() {
  const movieList =[
    { src:"/images/movielist1.jpg", alt:"케이팝데몬헌터스"},
    { src:"/images/movielist2.jpeg", alt:"귀멸의칼날"},
    { src:"/images/movielist3.jpg", alt:"오징어게임"},
    { src:"/images/movielist4.jpg", alt:"웬즈데이"},
    { src:"/images/movielist5.jpg", alt:"트리거"}
  ]
  return (
    <div>
      <div className="section1">
        <div className="movie_logo"><img src="/images/movie_logo.png" alt="귀멸의칼날 로고" /></div>
        <p className="movie_info">혈귀로 변해버린 여동생 네즈코를 인간으로 되돌리기 위해
          혈귀를 사냥하는 조직인 《귀살대》에 입대한 카마도 탄지로.

          입대 후 동료인 아가츠마 젠이츠, 하시비라 이노스케와 함께 많은 혈귀와 싸우고,
          성장하면서 세 사람의 우정과 유대는 깊어진다.</p>
        <div className="movie_btn">
          <button className="play_btn"> ▶ 재생</button>
          <button className="info_btn">상세 정보</button>
        </div>
        </div>
        <div >
          <h2 className="list_title">누구나 사랑하는 명작</h2>
          <div className="movie_list">
            {movieList.map((movie)=>
            <MovieList 
            src={movie.src}
            alt={movie.alt}
            />
            )}  
          </div>     

      </div>
    </div>
  );
}