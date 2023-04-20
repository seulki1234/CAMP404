// const goClass = document.querySelector(".goClass");
// const index = document.querySelector(".classIndex");


// goClass.addEventListener("mouseover", function() {

//     index.style.color = "#fe6936";
// })
// goClass.addEventListener("mouseleave", function() {
//     index.style.color = "#cecece";
// })
const goClass = document.querySelectorAll(".goClass");
const index = document.querySelectorAll(".classIndex");


for (let i = 0; i < goClass.length; i++) {
    let classes = goClass[i];
    classes.addEventListener("mouseover", function () {

        index[i].style.color = "#fe6936";
    })
    classes.addEventListener("mouseleave", function () {
        index[i].style.color = "#cecece";
    })
};