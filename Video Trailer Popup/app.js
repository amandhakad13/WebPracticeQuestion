const btn = document.querySelector("#btn");
const video = document.querySelector(".video");
const cut = document.querySelector("#cut");

video.style.display = "none";

btn.addEventListener('click',()=>{
    video.style.display = "";
});

cut.addEventListener('click',()=>{
    video.style.display = "none";
})