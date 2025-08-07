import MovieCard from "./component/MovieCard";
import "./css/App.css";
function App() {
  const movies = [
    {
      rank: 1,
      image: "/images/card1.jpg",
      alt: "자전거집 타카하시군",
      likes: 980,
    },
    {
      rank: 2,
      image: "/images/card2.jpg",
      alt: "악의 파동",
      likes: 867,
    },
    {
      rank: 3,
      image: "/images/card3.jpg",
      alt: "놀면 뭐하니",
      likes: 800,
    },
    {
      rank: 4,
      image: "/images/card4.jpg",
      alt: "진격의 거인",
      likes: 300,
    },
  ];

  return (
    <>
      <h2>박스오피스</h2>
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
    </>
  );
}

export default App;
