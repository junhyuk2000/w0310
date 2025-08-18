import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <img src="/images/logo.png" alt="로고이미지" />
        </Link>
      </div>
      <nav className="gnb">
        <Link to="/">홈</Link>
        <Link to="/movies">영화</Link>
        <Link to="/series">시리즈</Link>
        <Link to="/event">이벤트</Link>
      </nav>
    </div>
  );
}
