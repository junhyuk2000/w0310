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
  // 4. 인포윈도우 생성
  const infowindow = new kakao.maps.InfoWindow({
    content: '<div class="info_marker">교보문고 광화문점 </div>',
  });

  // 5. 토글 상태 변수
  let isOpen = false;

  // 6. 클릭 이벤트로 토글
  kakao.maps.event.addListener(marker, "click", function () {
    if (isOpen) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
    isOpen = !isOpen; // 상태 반전
  });
});
