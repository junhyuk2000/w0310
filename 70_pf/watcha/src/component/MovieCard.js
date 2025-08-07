import { useState } from "react";

function MovieCard({ rank, image, alt, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const handleLike = () => setLikes(likes + 1);

  return (
    <div className="movie_card">
      {/* 영화순위 */}
      <div className="rank">{rank}</div>
      {/* 이미지 */}
      <img src={image} alt={alt} />

      <div className="likes_btn">
        {/* 좋아요 */}
        <button className="likes" onClick={handleLike}>
          ❤ {likes}
        </button>
        {/* 예매버튼 */}
        <a href="#">예매</a>
      </div>
    </div>
  );
}

export default MovieCard;
