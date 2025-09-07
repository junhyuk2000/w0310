import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from 'react'
export default function Header() {
  const [searchOn,setSearchOn] = useState(false);
  const handleSearchClick =()=>{
    setSearchOn(true);
  }

  return (
    <>
      <div className="header">
        <div className="header_nav">
          <div className="header_logo">
            <Link to="/">
              <img src="/images/logo.png" alt="로고이미지" />
            </Link>
          </div>
          <nav className="gnb">
            <Link to="/">홈</Link>
            <Link to="/movies">영화</Link>
            <Link to="/game">게임</Link>
            <Link to="/filtercontents">언어별로 찾아보기</Link>
          </nav>
        </div>
        <div className="header_btn">
          <div className={`search_input ${searchOn ? "active":""}`}>
            <img src="/images/magnify.svg" alt="검색아이콘" />
            <input type="text" />
          </div>
          <button className={`search_btn ${searchOn ? "active" :""}`} onClick={handleSearchClick}>
            <img src="/images/magnify.svg" alt="검색아이콘" />
          </button>
          <button><img src="/images/bell.svg" alt="알림아이콘" /></button>
          <button><img src="/images/account.svg" alt="프로필" /></button>
        </div>
      </div>
        {searchOn && <div className="page_overlay" onClick={()=>setSearchOn(false)}></div>}
    </>
  );
}
