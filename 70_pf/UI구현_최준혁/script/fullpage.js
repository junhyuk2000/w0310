$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: ["main", "brand", "menu"],
    navigation: true,
    navigationPosition: "right",
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    scrollBar: true, // 이거 켜야 footer 내려갔다 올라올 때 섹션 안 튐

    afterLoad: function (anchorLink) {
      if (anchorLink === "brand") {
        $("#sec2 .scroll_motion").each(function (i) {
          const $el = $(this);
          setTimeout(() => $el.addClass("show"), i * 100);
        });
      }
    },

    onLeave: function (origin) {
      if (origin.anchor === "brand") {
        $("#sec2 .scroll_motion").removeClass("show");
      }
    },
  });

  $(".nav a").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href").replace("#", "");
    $.fn.fullpage.moveTo(target);
  });
});
