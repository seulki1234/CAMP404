const leftBtn = $('.leftBtn');
const moveNum = $('.moveNum');
const fixedNum = $('.fixedNum');
const rightBtn = $('.rightBtn');
const slideImgHolder = $('.slideImgHolder');

const setSlideArea = $('.setSlideArea');
const colorArr = ['#fbda96', '#f27f88', '#7fcca1', '#8e8fc3'];

let num = 1100;
let screenMove = -1100;
let movenum = 1;
let colorChange = 0;


// 오른쪽 버튼 눌렀을 때, 슬라이드
rightBtn.on('click', function () {

    if (screenMove > -4400) {
        moveNum.text(++movenum);
        slideImgHolder.css('transform', 'translateX(' + screenMove + 'px)');
        colorChange++;
        setSlideArea.css('backgroundColor', colorArr[colorChange]);
        screenMove += (-num);
    } else { // movenum이 4보다 커졌을 때,
        screenMove = 0;
        movenum = 1
        colorChange = 0;
        slideImgHolder.css('transform', 'translateX(' + screenMove + 'px)');
        setSlideArea.css('backgroundColor', colorArr[colorChange]);
        screenMove = (-num);
        moveNum.text("1");
    }
    console.log("우클릭 시, " + colorChange);
    // console.log("우클릭 시, " + screenMove);
    // console.log("우클릭 시, " + movenum);

});

// 왼쪽 버튼 눌렀을 때 슬라이드.
leftBtn.on('click', function () {
    if (screenMove >= -1100) { // movenum이 4보다 커졌을 때,
        movenum = 4
        colorChange = 3;
        screenMove = -4400;
        slideImgHolder.css('transform', 'translateX(' + (screenMove + (num)) + 'px)');
        setSlideArea.css('backgroundColor', colorArr[colorChange]);
        moveNum.text("4");
    } else {
        moveNum.text(--movenum);
        slideImgHolder.css('transform', 'translateX(' + (screenMove + (num * 2)) + 'px)');
        --colorChange;
        setSlideArea.css('backgroundColor', colorArr[colorChange]);
        screenMove += num;
    }
    console.log("좌클릭 시, " + colorChange);
    // console.log("좌클릭 시, " + screenMove);
    // console.log("좌클릭 시, " + movenum);
});


function slide() {
    if (screenMove > -4400) {
        moveNum.text(++movenum);
        slideImgHolder.css('transform', 'translateX(' + screenMove + 'px)');
        colorChange++;
        setSlideArea.css('backgroundColor', colorArr[colorChange]);
        screenMove += (-num);
    } else { // movenum이 4보다 커졌을 때,
        screenMove = 0;
        movenum = 1
        colorChange = 0;
        slideImgHolder.css('transform', 'translateX(' + screenMove + 'px)');
        setSlideArea.css('backgroundColor', colorArr[colorChange]);
        screenMove = (-num);
        moveNum.text("1");
    }
};

setInterval(slide, 5000);