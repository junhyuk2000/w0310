import React from "react";
import "../css/Intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <h2 className="intro_title">최준혁</h2>
      <h3 className="intro_title2">프론트엔드 개발자 포트폴리오</h3>
      <div className="intro_content">
        <p>
          안녕하세요, 배우고 도전하는 과정을 즐기는 프론트엔드 개발자 최준혁입니다.  
        </p> 
        <p>작은 개선이 모여 더 나은 경험을 만든다고 생각하며, 그 과정에서 꾸준히 성장하고 있습니다.  </p>
        <p>
          앞으로도 배움과 도전을 멈추지 않고, 사용자에게 가치 있는 화면을 만들어가겠습니다.
        </p>
      </div>
    </div>
  );
}
