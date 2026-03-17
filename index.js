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

createGrid(size);

let getSize = ()=>{
    let input = prompt();
    if (input > 0 && input <= 100){
        return +input;
    } else {
        alert("Please try again, don't input a larger number of 100 grid squares, the results will be caused to your computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.");
    }
}

btn.addEventListener("click", ()=>{
    createGrid(getSize());
});