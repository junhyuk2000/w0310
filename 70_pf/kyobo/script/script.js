// 카카오맵 API
kakao.maps.load(() => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(37.570367, 126.976977),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);

  const marker = new kakao.maps.Marker({
    position: options.center,
  });
  marker.setMap(map);
  const infowindow = new kakao.maps.InfoWindow({
    content: '<div class="info_marker">교보문고 광화문점 </div>',
  });

  let isOpen = false;

  // 마커 클릭 시 말풍선 생성 토글
  kakao.maps.event.addListener(marker, "click", function () {
    if (isOpen) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
    isOpen = !isOpen;
  });
});

// 스크롤 모션
const observer = new IntersectionObserver(
  (element) => {
    element.forEach((elm) => {
      if (elm.isIntersecting) {
        elm.target.classList.add("active");
      } else {
        elm.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".scroll").forEach((el) => observer.observe(el));
