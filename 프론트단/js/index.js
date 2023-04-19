const leftBtn = $('.leftBtn');
const moveNum = $('.moveNum');
const fixedNum = $('.fixedNum');
const rightBtn = $('.rightBtn');
const slideImgHolder = $('.slideImgHolder');

const setSlideArea = $('.setSlideArea');
const colorArr = ['#1e1e1e', '#f27f88', '#b843ff', '#8e8fc3'];
const likeBtn = $('.topText> .likeBtn');

let num = 1100;
let screenMove = -1100;
let movenum = 1;
let colorChange = 0;

// 오른쪽 버튼 기능 함수화
function rightMove() {
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

// 왼쪽 버튼 기능 함수화
function leftMove() {
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
};

// 자동 슬라이드 기능 (내부 내용은 오른쪽 버튼 클릭과 같음.)
function slide() {
    rightMove();
    console.log("5초마다 슬라이드가 이동함");
};

let ci = setInterval(slide, 5000);

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slideImgHolder.on("mousedown", (e) => {
    console.log("mousedown", e.pageX);
    startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slideImgHolder.on("mouseup", (e) => {
    console.log("mouseup", e.pageX);
    endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
    if (startPoint < endPoint) {
        // 마우스가 오른쪽으로 드래그 된 경우
        console.log("prev move");
        leftMove();
        clearInterval(ci);
    } else if (startPoint > endPoint) {
        // 마우스가 왼쪽으로 드래그 된 경우
        console.log("next move");
        rightMove();
    }
    clearInterval(ci);
    ci = setInterval(slide, 5000);
    console.log("인터벌을 초기화함");
});

// 오른쪽 버튼 눌렀을 때, 슬라이드
rightBtn.on('click', function () {
    rightMove();
    console.log("우클릭 시, " + colorChange);
    clearInterval(ci);
    ci = setInterval(slide, 5000);
    console.log("오른쪽 버튼을 눌러서 초기화함");
});

// 왼쪽 버튼 눌렀을 때 슬라이드.
leftBtn.on('click', function () {
    leftMove();
    console.log("좌클릭 시, " + colorChange);
    clearInterval(ci);
    ci = setInterval(slide, 5000);
    console.log("왼쪽 버튼을 눌러서 초기화함");
});



// 강의 좋아요 버튼
likeBtn.on('click', function () {
    $(this).toggleClass('likeColor');
});