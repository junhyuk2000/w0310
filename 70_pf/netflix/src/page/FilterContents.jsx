import MovieList from "../components/MovieList/MovieList";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import "../css/FilterContents.css";
import lists from "../data/movie.json";
import { useState } from 'react'

const { hollywoodMovie, koreanMovie, comedy,  koreanDrama, animation } = lists;

export default function FilterContents() {
  const [showDetail, setShowDetail] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 카테고리별 데이터 분류
  const allMovies = [
    ...hollywoodMovie.map(movie => ({...movie, category: 'movie'})),
    ...koreanMovie.map(movie => ({...movie, category: 'movie'})),
    ...comedy.map(movie => ({...movie, category: 'movie'})),
    ...koreanDrama.map(movie => ({...movie, category: 'drama'})),
    ...animation.map(movie => ({...movie, category: 'animation'}))
  ];

  // 선택된 카테고리에 따라 필터링
  const filteredMovies = selectedCategory === 'all' 
    ? allMovies 
    : allMovies.filter(movie => movie.category === selectedCategory);

  return (
    <div className="filter_contents">
      {/* 카테고리 필터 */}
      <div className="filter_section">
        <div className="title_box">
          <h2 className="list_title">콘텐츠 필터</h2>
        </div>
        <select 
          className="category_filter"
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">전체</option>
          <option value="movie">영화</option>
          <option value="animation">애니메이션</option>
          <option value="drama">드라마</option>
        </select>
      </div>

      {/* 필터링된 콘텐츠 표시 */}
      <div className="filter">
        <div className="title_box">
          <h2 className="list_title">
            {selectedCategory === 'all' && '전체 콘텐츠'}
            {selectedCategory === 'movie' && '영화'}
            {selectedCategory === 'animation' && '애니메이션'}
            {selectedCategory === 'drama' && '드라마'}
          </h2>
        </div>
        <div className="movie_filter_list">
          {filteredMovies.map((m) => (
            <MovieList key={m.id} {...m} onOpenDetail={setShowDetail}/>
          ))}
        </div>
      </div>

      {showDetail && (
        <MovieDetail 
          movie={showDetail}
          onClose={() => setShowDetail(null)}
        />
      )}
    </div>
  );
}
