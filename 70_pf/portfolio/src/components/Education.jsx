import React from 'react'
import "../css/Education.css"

export default function Education() {
  return (
    <div className='education'>
      <h2 className='education_title'>Education</h2>
      <div class="school">
        <div className='high_school'>
            <div>
                <h3>태성고등학교</h3>
                <p>졸업</p>
            </div>
            <span>2016.03 ~ 2019.02</span>
        </div>
        <div className='univercity'>
            <div>
                <h3>호서대학교</h3>
                <p>디지털 기술 경영학과</p>
                <p>졸업</p>
            </div>
            <span>2019.03 ~ 2025.02</span>
        </div>
        <div className='study'>
            <div>
                <h3>UI/UX 디자인 프론트엔드</h3>
                <p>수료</p>
            </div>
            <span>2025.03 ~ 2025.08</span>
        </div>
      </div>
    </div>
  )
}
