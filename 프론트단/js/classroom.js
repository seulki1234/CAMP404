/*강의목차에서 강의내용 tab 클릭시 해당 class 별로
  목차 나오는 아코디언 메뉴 */
/* class1 */ 
$(document).ready(function() {
  $('#div1-1').click(function() {
    $('#div1-1').hide();
    $('#div1-2').show();
  });
  
  $('#div1-2').click(function() {
    $('#div1-2').hide();
    $('#div1-1').show();
  });
});

/* class2 */ 
$(document).ready(function() {
  $('#div2-1').click(function() {
    $('#div2-1').hide();
    $('#div2-2').show();
  });
  
  $('#div2-2').click(function() {
    $('#div2-2').hide();
    $('#div2-1').show();
  });
});

/* class3 */ 

$(document).ready(function() {
  $('#div3-1').click(function() {
    $('#div3-1').hide();
    $('#div3-2').show();
  });
  
  $('#div3-2').click(function() {
    $('#div3-2').hide();
    $('#div3-1').show();
  });
});

/* class4 */ 
$(document).ready(function() {
  $('#div4-1').click(function() {
    $('#div4-1').hide();
    $('#div4-2').show();
  });
  
  $('#div4-2').click(function() {
    $('#div4-2').hide();
    $('#div4-1').show();
  });
});

/*상단의 강의목차 클릭시 다른메뉴 hide, 강의목차 관련 메뉴 show */
$('#classroom_tabs_menu').click(function(){
 
  $('.classroom_chater').show();/*강의목차 show */
  
  $('.classroom_asset_list').hide();/*강의자료 hide */
  $('.classroom_notes').hide();
  $('.subArea').hide();  /*저장된 강의노트목록 hide */
  $('.writeButton').hide();  /*글작성버튼 hide */

  
})

/*------------------------------------------*/ 
/*상단의 강의자료 클릭시 강의목차 hide, 강의자료 관련 메뉴 show */
$('#classroom_tabs_file').click(function(){
  $('.classroom_asset_list').show();/*강의자료 show */
  
  $('.classroom_chater').hide();/*강의목차 hide */  
  $('.classroom_notes').hide();/*강의노트 hide */
  $('.subArea').hide();  /*저장된 강의노트목록 hide */
  $('.writeButton').hide();  /*글작성버튼 hide */
  
})


//--------------------------------------------------------------

/*상단의 강의노트 클릭시 강의목차/강의자료 hide, 강의노트 관련 메뉴 show 
   todolist*/
   $('#classroom_tabs_note').click(function(){
    $('.classroom_notes').show();/*강의노트 show */
   
    $('.classroom_chater').hide();/*강의목차 hide */  
    $('.classroom_asset_list').hide();/*강의자료 hide */ 
    $('.subArea').hide();  /*저장된 강의노트목록 hide */
  
  })


//dBtn (저장하기) 버튼 클릭시 다른영역 모두 hide, 저장된 강의노트 목록 show
$('.dBtn').click(function(){
$('.classroom_notes').hide();/*강의노트 hide */
$('.classroom_chater').hide();/*강의목차 hide */  
$('.classroom_asset_list').hide();/*강의자료 hide */   
$('.subArea').show();/*저장된 강의노트 목록 show */

})


//글 작성하기 버튼 클릭시 노트작성 영역만 show , 나머지 hide 
$('.notewrite').click(function(){
$('.classroom_notes').show();/*강의노트 hide */
$('.classroom_chater').hide();/*강의목차 hide */  
$('.classroom_asset_list').hide();/*강의자료 hide */   
$('.subArea').hide();/*저장된 강의노트 목록 show */ 

})











  const typeData = document.querySelector('.typeData');//노트작성공간
  const subArea = document.querySelector('.subArea');//작성한노트 출력공간
  let count = 0;
  const arr1 = [];
  const counterOuter = document.querySelector('.counterOuter');//글자수카운트

  //추가버튼 눌렀을 때 실행될 함수
  function setToDo(a){
    $('.counterOuter').text(0); //글자수카운터 초기화
    $('.counterOuter').css("color","white") //기본 css 설정
    
    arr1.push(typeData.value); //노트작성한거 배열에 넣기

    //작성한 노트 목록 추가
    const addWrapper = document.createElement('div');
    addWrapper.classList.add('addWrapper');
    
    //addArea(노트작성시 추가되어 나열되는 목록)
    //slideWrapper(나열된 노트를 클릭시 수정할 수 있는 박스가 추가되어 나열됨)
    //    slideArea(수정할수 잇는 노트부분을 감싸는 영역)
    addWrapper.innerHTML = `
      <div class = "addArea">
          <span class="text1"></span>            
          <span class="change"><i class="fa-solid fa-check"></i></span>
          <span class="remove"><i class="fa-sharp fa-solid fa-trash"></i></span>
          <button class="notewrite">글작성</button>
           
           
        
      </div>

      <div class="slideWrapper">
          <p>
          <span class="enterDate"></span>
          </p>
           
          <div class = "slideArea">
              
              <textarea class="text2">
              <div class="counterWrapper">
                  <span class="counter">${typeData.value.length}</span> / 2000
              </div>
          </div>
      </div>
      
      <div class="writeWrapper">
      <span class="text1"></span>     
      <button class="notewrite">글작성</button>
      </div>
    `;



//작성한 노트(addWrapper)를 subArea 에 추가하기
subArea.append(addWrapper);


//글작성을 오른쪽 하단에 두고싶은데, 생성이 안됨....ㅜㅜ

const notewrite = addWrapper.querySelector('.notewrite');
notewrite.addEventListener('click',() => {
$('.classroom_notes').show();/*강의노트 hide */
$('.classroom_chater').hide();/*강의목차 hide */  
$('.classroom_asset_list').hide();/*강의자료 hide */   
$('.subArea').hide();/*저장된 강의노트 목록 show */ 
});





const input = addWrapper.querySelector('.text1'); //입력한값 출력되는 공간
input.innerText = typeData.value.trim(); //trim으로 앞뒤 공백 제거
typeData.value = '';


const remove = addWrapper.querySelector('.remove');//삭제하기 누르면 삭제
remove.classList.add('remove')



//슬라이드 기능-slideToggle 함수로 slide up/down 
  const slideArea = addWrapper.querySelector('.slideArea');
  input.addEventListener('click', () => {
      $(slideArea).slideToggle();
  });

//열려진 슬라이드 내부 수정기능
const innerInput = addWrapper.querySelector('.text2');

const change = addWrapper.querySelector('.change');
  innerInput.value = input.innerText;
  change.addEventListener('click', (e) => {
      
          input.innerText = innerInput.value;
          enterDate.innerText = (moment().format("YYYY.MM.DD HH:mm:ss") + '에 수정됨.');
          alert('변경사항이 저장되었습니다!');
          $(slideArea).slideToggle();
      })



//날짜추가
let enterDate = addWrapper.querySelector('.enterDate');
enterDate.innerText = (moment().format("YYYY.MM.DD HH:mm:ss") + '에 작성됨.');


//삭제기능
remove.addEventListener('click',()=>{
addWrapper.remove(); 
})

//내부 숫자 카운트 //왜 작동 안하지?ㅠㅠ
innerInput.addEventListener('textarea', function(){
if($(this).val().length <= 1000) {
  $('.counter').css("color","white");
} else if($(this).val().length <= 1800){
  $('.counter').css("color", "orange");
} else{
  $('.counter').css("color", "red");
  const str = $(this).val();
  $(this).val(str.substr(0,2000));
}
$('.counter').text($(this).val().length);
})
};






/////////////////////////////////////////////////


//저장하기 버튼 클릭시 노트 저장
const add = document.querySelector('.add');
add.addEventListener('click', ()=>{
setToDo();
})


/////////////////////////////////////////////////////////

//입력창 숫자 카운트

typeData.addEventListener('input', (e)=>{
const str = $(e.target).val();
if(str.length <= 1000) {
  $('.counterOuter').css("color","white");
} else if(str.length <= 1800){
  $('.counterOuter').css("color", "orange");
} else{
  $(e.target).val(str.substr(0,2000));
  $('.counterOuter').css("color", "red");
}
$('.counterOuter').text($(e.target).val().length);
})


///////목록 포커스
$('document').ready(function(){
 
  $('#classroom_tabs_menu').focus(function(){
    $(this).css("color","rgb(255, 142, 29)");
   });
   $("#classroom_tabs_menu").blur(function(){ 
    $(this).css("color","rgb(146, 145, 145)");
    });
    $('#classroom_tabs_file').focus(function(){
      $(this).css("color","rgb(255, 142, 29)");
      $('#classroom_tabs_menu').css("color","rgb(146, 145, 145)")
     });
     $("#classroom_tabs_file").blur(function(){ 
      $(this).css("color","rgb(146, 145, 145)");
      });
      $('#classroom_tabs_note').focus(function(){
        $(this).css("color","rgb(255, 142, 29)");
        $('#classroom_tabs_menu').css("color","rgb(146, 145, 145)")
       });
       $("#classroom_tabs_note").blur(function(){ 
        $(this).css("color","rgb(146, 145, 145)");
        });
})









