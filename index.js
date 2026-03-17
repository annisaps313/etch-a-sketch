let container = document.querySelector(".container");
container.innerHTML = "";

let size = 16;

let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

for (let i = 0; i < containerHeight; i++){
    let row = document.createElement("div");
    container.appendChild(row);
    for (let i = 0; i < containerWidth; i++){
        let grid = document.createElement("div");
        grid.style.width = `${size}px`;
        grid.style.height = `${size}px`;
        grid.style.background = "beige";
        row.appendChild(grid);
    }
}