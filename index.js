let container = document.querySelector(".container");
container.innerHTML = "";

let size = 16;

for (let i = 0; i < container.clientHeight; i++){
    let row = document.createElement("div");
    container.appendChild(row);
    for (let i = 0; i < container.clientWidth; i++){
        let grid = document.createElement("div");
        grid.style.width = `${size}px`;
        grid.style.height = `${size}px`;
        grid.style.background = "beige";
    }
}