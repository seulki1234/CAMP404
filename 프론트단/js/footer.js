const button = $('.button');
const footer_logo_button = $('.footer_logo_button');
const footerMenu = $('.footer_logo_button_menu');




button.on('mouseover', function () {
    footerMenu.slideDown('fast');
});


// footer_logo_button.on('mouseover', function () {
//     footerMenu.slideDown('fast');
// });


// 메뉴창 떠날 떄 슬라이드 업
footerMenu.on('mouseleave', function () {
    footerMenu.slideUp('fast');
});

