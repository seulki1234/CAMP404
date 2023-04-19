const goClass = document.querySelector(".goClass");
const index = document.querySelector(".classIndex");


goClass.addEventListener("mouseover", function() {

    index.style.color = "#fe6936";
})
goClass.addEventListener("mouseleave", function() {
    index.style.color = "#cecece";
})