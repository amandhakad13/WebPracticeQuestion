const text = document.querySelector("#heading");
const btn = document.querySelector("#btn");

function randomColor() {
    let letters = "123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random()*15)];
    }
    return color;
}

btn.addEventListener('click',()=>{
    document.body.style.backgroundColor = randomColor();
    text.innerHTML = randomColor();
})