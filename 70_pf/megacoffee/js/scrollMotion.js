// jQuery Scroll Motion

$(() => {
  // 객체 탐색
  const windowObj = $(window);
  const motionObj = $("#sec3_txt .scroll_motion");

  // 이벤트
  windowObj.scroll(function () {
    motionObj.each(function () {
      // scrollTop은 현재 문서에서 위쪽으로 스크롤한 거리 (px)
      let scrollTop = $(window).scrollTop();
      console.log(scrollTop);
      if (scrollTop > 1500) {
        $(this).addClass("show");
      } else {
        $(this).removeClass("show");
      }
    });
  });
});
