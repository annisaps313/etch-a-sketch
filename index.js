let container = document.querySelector(".container");
let btn = document.querySelector("button");
container.innerHTML = "";

let size = 16;

let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

function createGrid(size) {
  for (let i = 0; i < containerHeight / size; i++) {
    let row = document.createElement("div");
    container.appendChild(row);
    row.style.display = "flex";
    for (let i = 0; i < containerWidth / size; i++) {
      let grid = document.createElement("div");
      grid.style.width = `${size}px`;
      grid.style.height = `${size}px`;
      grid.style.background = "beige";
      row.appendChild(grid);

      grid.addEventListener("mouseover", () => {
        grid.style.background = "grey";
      });
    }
  }
}

let getSize = ()=>{
    let input = prompt();
    return +input;
}

btn.addEventListener("click", ()=>{
    createGrid(getSize());
});