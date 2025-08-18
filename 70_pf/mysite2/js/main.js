// 스크롤 이벤트 감지 및 클래스 토글
/* 
    이벤트: scroll
    속성
        요소.clientHeight
        요소.offsetHeight
        window.scrollY
        요소.classList.add()
        요소.classList.remove()
*/
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    // height: 62px -> 요소의 패딩 + 콘텐츠만
    console.log('navbar.clientHeight', navbar.clientHeight); 
    // height: 62px -> 요소의 패딩 + 콘텐츠 + 테두리(border)
    console.log('navbar.offsetHeight', navbar.offsetHeight); 
    // 스크롤이 50px 이상 되면 헤더에 navbar-scrolled 클래스가 추가
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});