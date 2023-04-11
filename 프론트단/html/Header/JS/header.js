const searchBarWrapper = $('.searchBarWrapper');
const searchBar = $('.searchBar');
const searchXBtn = $('.searchXBtn');
const loginArea = $('.loginArea');
const closeSearch = $('.closeSearch');
const searchSubMenu = $('.searchSubMenu');
const body = $('body');


// 검색창 클릭 시 가운데 이동 및 사이즈 변경
searchBar.on('click', function () {
    if (searchBarWrapper.hasClass('searchBarMiddle') === false) {
        subMenu.slideUp('fast');
        searchBar.removeClass('searchBarWiderRemove');
        searchBarWrapper.removeClass('searchBarMiddleRemove');
        body.removeClass('bodyBGColor');

        searchBar.addClass('searchBarWider');
        searchBarWrapper.addClass('searchBarMiddle');
        body.addClass('bodyBGColor');
    } else {
        return false;
    }
});


// 검색창 X표시
searchBar.on('input', function () {
    if (searchBar.val() != '') {
        // console.log('검색창에 입력함');
        searchXBtn.removeClass('btnHide');
    } else {
        searchXBtn.addClass('btnHide');
    }
});

// 검색창 X표시 클릭 시 초기화
searchXBtn.on('click', function () {
    // console.log('삭제버튼 클릭');
    searchBar.val('');
    searchXBtn.addClass('btnHide');
});

// 검색창 클릭 시, 로그인 버튼 숨기기 및 X 버튼 나타내기

searchBar.on('click', function () {
    loginArea.addClass('loginAreaHide');
    closeSearch.removeClass('closeSearchHide');
    searchSubMenu.removeClass('searchSubMenu_Hide');
});


closeSearch.on('click', function () {
    if (searchBarWrapper.hasClass('searchBarMiddle') === true) {
        console.log('검색창 닫기 버튼 누름');
        loginArea.removeClass('loginAreaHide');
        closeSearch.addClass('closeSearchHide');
        searchSubMenu.addClass('searchSubMenu_Hide');

        searchBar.addClass('searchBarWiderRemove');
        searchBarWrapper.addClass('searchBarMiddleRemove');
        searchBar.removeClass('searchBarWider');
        searchBarWrapper.removeClass('searchBarMiddle');
        body.removeClass('bodyBGColor');
    } else {
        return false;
    }
});
searchBar.on('blur', function () {
    if (searchBarWrapper.hasClass('searchBarMiddle') === true) {
        console.log('검색창 닫기 버튼 누름');
        loginArea.removeClass('loginAreaHide');
        closeSearch.addClass('closeSearchHide');
        searchSubMenu.addClass('searchSubMenu_Hide');

        searchBar.addClass('searchBarWiderRemove');
        searchBarWrapper.addClass('searchBarMiddleRemove');
        searchBar.removeClass('searchBarWider');
        searchBarWrapper.removeClass('searchBarMiddle');
        body.removeClass('bodyBGColor');
    } else {
        return false;
    }
});







const catLeftWrapper = $('.catLeftWrapper');
const subMenu = $('.subMenu');

// 메뉴창 들어갈 때 슬라이드 다운
catLeftWrapper.on('mouseover', function () {
    subMenu.slideDown('fast');
});

// 메뉴창 떠날 떄 슬라이드 업
subMenu.on('mouseleave', function () {
    subMenu.slideUp('fast');
});


