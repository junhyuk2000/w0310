import React from "react";
import "../css/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="call">
        <p>
          질문이 있으신가요? 문의 전화 :
          <span> 00-308-321-0161 (수신자 부담)</span>
        </p>
      </div>
      <div className="footer_list">
        <ul>
          <li>자주 묻는 질문</li>
          <li>고객 센터</li>
          <li>계정</li>
          <li>미디어 센터</li>
          <li>투자 정보(IR)</li>
          <li>입사 정보</li>
          <li>넷플릭스 지원 디바이스</li>
          <li>이용 약관</li>
          <li>개인정보 처리방침</li>
          <li>쿠키 설정</li>
          <li>회사 정보</li>
          <li>문의하기</li>
          <li>속도 테스트</li>
          <li>법적 고지</li>
          <li>오직 넷플릭스에서</li>
        </ul>
      </div>
      <div className="select_box">
        <select>
          <option value="">한국어</option>
          <option value="">English</option>
        </select>
      </div>
      <div>
        <h3 className="netflix_korea">넷플릭스 대한민국</h3>
      </div>

      <div>
        <p className="copy">
          넷플릭스 대한민국 넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
          제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담){" "}
        </p>
        <p className="copy">대표:레지널드 숀 톰프슨 </p>
        <p className="copy">이메일 주소: korea@netflix.com </p>
        <p className="copy">
          주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
          우편번호 03161
        </p>
        <p className="copy">사업자등록번호: 165-87-00119 </p>
        <p className="copy">클라우드 호스팅: Amazon Web Services Inc.</p>
      </div>
    </div>
  );
}
