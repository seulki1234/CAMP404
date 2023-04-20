// const goClass =document.querySelector(".goClass").get();
// const index = document.querySelector(".classIndex").get();

// goClass.addEventListener("mouseover",changeColor);
// goClass.addEventListener("mouseleave",changeColor);


// function changeColor(e){
//     for(var i =0; i<goClass.length;i++){
//         if (e.type === 'mouseover'){
//             index[i].style.color="rgb(255, 142, 29)";
//         } else if(e.type ==='mouseleave'){
//             index[i].style.color="white";
//         }
//     }
// }

// goClass.addEventListener("mouseover", function() {
//     for(var i =0; i<goClass.length;i++){
//     index[i].style.color = "rgb(255, 142, 29)";
// }
// })
// goClass.addEventListener("mouseleave", function() {
//     for(var i =0; i<goClass.length;i++){
//     index[i].style.color = "white";
//     }
// })
$(document).ready(function(){
    var goClass =$('.goClass').get();
    var index =$('.classIndex').get();
    if(goClass.addEventListener("mouseover")){
    for(var i = 0; i<goClass.length; i++){
        
            index[i].css("color","rgb(255, 142, 29)")
       
    }
}

})


    // $(".goClass").hover(function(){
    //     $(".classIndex").css("color","rgb(255, 142, 29)")
   
    // })

