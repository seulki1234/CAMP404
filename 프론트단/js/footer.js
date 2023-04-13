const button = $('.button');
const button_a = $('.button_a');
const hiddenMenu = $('.hiddenMenu');


button.on('mouseover', function () {
    hiddenMenu.slideDown('fast');
});

// 메뉴창 떠날 떄 슬라이드 업
hiddenMenu.on('mouseleave', function () {
    hiddenMenu.slideUp('fast');
});