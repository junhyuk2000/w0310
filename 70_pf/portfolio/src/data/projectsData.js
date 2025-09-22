export const projects = [
  { id: 1, type: "Team", title: "Steam 웹사이트 리뉴얼", img:"/images/thumb/project_steam_thumb.jpg" , alt:"Steam 썸네일" , skill:["html","css","JavaScript"]},
  { id: 2, type: "Team", title: "Lunest", img:"/images/thumb/project_lunest_thumb.jpg", alt:"Lunest 썸네일", skill:["html","css","JavaScript"] },
  { id: 3, type: "Personal", title: "Netflix UI Clone",  img:"/images/thumb/project_netflix_thumb.jpg", alt:"Netflix 썸네일" , skill:["html","css","JavaScript","React"]},
  { id: 4, type: "Personal", title: "미니 게임 컬렉션",  img:"/images/thumb/project_minigame_thumb.jpg", alt:"미니게임 썸네일", skill:["html","css","javascript","React"] },
  { id: 5, type: "Personal", title: "크롬 시작 화면",  img:"/images/thumb/project_chrome_thumb.jpg", alt:"크롬 썸네일", skill:["html","css","javascript"] },
  { id: 6, type: "Personal", title: "weather",  img:"/images/thumb/error.jpg", alt:"weather 썸네일", skill:["React"] },
  { id: 7, type: "Personal", title: "Portfolio",  img:"/images/thumb/error.jpg", alt:"weather 썸네일", skill:["React"] },
];

export const projectDetail = [
  {id:1, title:"Steam 웹사이트 리뉴얼", img:"/images/detail/steam_detail.jpg",skill:"html, css, JavaScript", desc:"Steam 웹사이트를 리디자인한 팀 프로젝트로, 기존 UI의 불편을 해소하고 사용자 친화적 인터페이스를 목표로 주요 페이지와 기능을 재구현했습니다. 팀장을 맡아 전체 구성·디자인 가이드를 정리하고 기능 전반을 보완했으며, 로그인/회원가입은 바닐라 자바스크립트만으로 단독 구현했습니다. 로컬스토리지로 회원 정보를 관리하고 세션을 유지하며, 이메일·비밀번호·비밀번호 확인에 실시간 폼 검증을 적용해 중복 이메일 차단, 필드별 에러 메시지, 유효 시 테두리 색 변화 등 즉시 수정 가능한 UX를 제공했습니다.", url : "", github: "", main:"바닐라 JS로 로컬스토리지 기반 로그인·회원가입 구현, 폼 검증으로 입력값 유효성 체크 및 실시간 에러 메시지 출력"},
  {id:2, title:"Lunest", img:"/images/detail/lunest_detail.jpg",skill:"html css JavaScript", desc:"", url : "", github: "", main:"커스텀 플레이어(재생/일시정지, 이전/다음, 시크바, 볼륨) , 케로셀 슬라이드, 프리셋 플레이리스트, 모바일 반응형 UI"},
  {id:3, title:"Netflix UI Clone", img:"/images/detail/netflix_detail.jpg",skill:"html css JavaScript", desc:"", url : "", github: "", main:""},
  {id:4, title:"미니게임 컬렉션", img:"/images/detail/minigame_detail.jpg",skill:"html css JavaScript", desc:"", url : "", github: "", main:""},
  {id:5, title:"크롬 시작 화면", img:"/images/detail/chrome_detail.jpg",skill:"html css JavaScript", desc:"", url : "", github: "", main:""},
  {id:6, title:"weather", img:"/images/detail/weather_detail.jpg",skill:"html css JavaScript", desc:"", url : "", github: "", main:""},
  {id:7, title:"Portfolio", img:"/images/detail/portfolio_detail.jpg",skill:"html css JavaScript", desc:"", url : "", github: "", main:""}
]