import React from 'react'
import "../css/About.css"
export default function About() {
  return (
    <div className="about">
      <h2 className="about_me">ABOUT ME</h2>
      <div className='about_me_contents'>
        <div className="phoro">
          <img src="/images/profile.png" alt="" />
        </div>
        <div className="about_me_info_wrap">
          <div className="about_me_info">
            <img src="/images/icon/person.svg" alt="사람 아이콘" />
            최준혁
          </div>
          <div className="about_me_info">
            <img src="/images/icon/calendar.svg" alt="달력 아이콘" />
            2000.11.21
          </div>
          <div className="about_me_info">
            <img src="/images/icon/map.svg" alt="마커 아이콘" />
            경기도 용인시
          </div>
          <div className="about_me_info">
            <img src="/images/icon/call.svg" alt="전화 아이콘" />
            010-9912-6742
          </div>
          <div className="about_me_info">
            <img src="/images/icon/email.svg" alt="이메일 아이콘" />
            wnscjcj2000@naver.com
          </div>
          <div className="about_me_info">
            <img src="/images/icon/school.svg" alt="학사모 아이콘" />
            호서대학교( 디지털기술경영학과 )
          </div>
        </div>
      </div>
    </div>
  )
}
