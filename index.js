let container = document.querySelector(".container");
container.innerHTML = "";

let size = 16;

let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

for (let i = 0; i < containerHeight / size; i++){
    let row = document.createElement("div");
    container.appendChild(row);
    row.style.display = "flex";
    for (let i = 0; i < containerWidth / size; i++){
        let grid = document.createElement("div");
        grid.style.width = `${size}px`;
        grid.style.height = `${size}px`;
        grid.style.background = "beige";
        row.appendChild(grid);

        grid.addEventListener("mouseover", ()=>{
            grid.style.background = "grey";
        });
    }
}

let btn = document.querySelector("button");