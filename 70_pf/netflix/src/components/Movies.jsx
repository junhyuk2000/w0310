import MovieCard from "./MovieCard";
import "../css/Movies.css";
import lists from "../data/movie.json";
const { movies } = lists;
export default function Movies() {
  return (
    <div>
      <h2 className="boxoffice_title">오늘의 영화 TOP 5</h2>
      <div className="boxoffice">
        {/* 리스트 렌더링 */}
        {movies.map((movies) => (
          <MovieCard
            key={movies.rank}
            rank={movies.rank}
            image={movies.image}
            alt={movies.alt}
            initialLikes={movies.likes}
          />
        ))}
      </div>
    </div>
  );
}
