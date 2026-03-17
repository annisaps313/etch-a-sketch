let div = document.createElement("div");
let container = document.querySelector(".container");
container.appendChild(div);

div.style.width = "16px";
div.style.height = "16px";
div.style.background = "beige";

div.addEventListener("mousemove", ()=>{
    div.style.background = "grey";
})

let size = 16;

let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    size = prompt("Add new size");
})