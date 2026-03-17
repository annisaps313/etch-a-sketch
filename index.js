let container = document.querySelector(".container");
container.appendChild(div);


div.addEventListener("mousemove", () => {
  div.style.background = "grey";
});

let size = 16;

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  size = prompt("Add new size");
});

console.log(container.clientWidth);
console.log(container.clientHeight);

for (let i = 0; i < size * size; i++) {
  let div = document.createElement("div");
div.style.background = "beige";
div.style.width = `${container.clientWidth / size}px`;
}
