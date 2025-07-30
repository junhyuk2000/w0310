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

  kakao.maps.event.addListener(marker, "click", function () {
    if (isOpen) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
    isOpen = !isOpen;
  });
});
