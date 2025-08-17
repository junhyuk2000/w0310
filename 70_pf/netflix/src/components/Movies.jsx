import MovieCard from "./MovieCard"
import "../css/Movies.css"
export default function Movies() {
      const movies = [
    {
      rank: 1,
      image: "/images/card1.jpg",
      alt: "귀멸의 칼날 무한성편",
      likes: 980,
    },
    {
      rank: 2,
      image: "/images/card2.jpg",
      alt: "진격의 거인",
      likes: 867,
    },
    {
      rank: 3,
      image: "/images/card3.jpg",
      alt: "탑건 매버릭",
      likes: 800,
    },
    {
      rank: 4,
      image: "/images/card4.jpg",
      alt: "F1",
      likes: 300,
    },
  ];

  return (
    <div>
      <h2 className="boxoffice_title">박스오피스</h2>
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
  )
}
