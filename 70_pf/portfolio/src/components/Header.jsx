import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_inner">
        <div className="profile_image">
          <a href="#" className="image"></a>
        </div>
        <div className="short_intro">
          <p>
            <span>신입 프론트엔드 개발자 최준혁입니다.</span>
          </p>
          <p>배움에 겸손하고,</p>
          <p>꾸준함으로 성장해 나가겠습니다.</p>
        </div>
        <div className="info">
          <p><a href="tel:01099126742">010-9912-6742</a></p>
          <p><a href="mailto:wnscjcj2000@naver.com">wnscjcj2000@naver.com</a></p>
        </div>
        <div className="social">
          <a href="https://github.com/junhyuk2000">
            <img src="./public/images/github.svg" alt="" />
          </a>
          <a href="#">
            <img src="./public/images/notion.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
