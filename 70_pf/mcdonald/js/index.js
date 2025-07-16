$(function () {
    let now = 0;
    const section = $('.section').length;
    const total = section.length + 1;
    
    function scrollToSection(index) {
        let pos = 0;
        if(index < section.length) {
            pos = section.eq(index).position().top;
        } else {
            pos = $('.footer').position().top;
        }
        $('html,body').stop().animate({ scrollTop:pos},500);
    }

    $(window).on('wheel', function (e) {
        if ($('html, body').is(':animated')) return; // 중복 스크롤 방지
        const delta = e.originalEvent.deltaY;
        if (delta > 0 && now < total - 1) {
            now++;
        } else if (delta < 0 && now > 0) {
            now--;
        }
        scrollToSection(now);
    });
});

