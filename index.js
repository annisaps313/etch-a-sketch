let div = document.createElement("div");
let container = document.querySelector(".container");
container.appendChild(div);

div.style.background = "beige";

div.addEventListener("mousemove", ()=>{
    div.style.background = "grey";
})

let size = 16;

let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    size = prompt("Add new size");
})

div.style.width = `${size}px`;
div.style.height = `${size}px`;