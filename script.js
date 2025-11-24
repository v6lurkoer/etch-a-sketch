let row_column_count = 0;
const row_column_count_max = 100;
let grid_exists = 0;

const btn_grid = document.querySelector(".grid");
const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

btn_grid.addEventListener("click", buttonClickedGrid);
container.addEventListener("mouseenter", fill, true);
container.addEventListener("mouseleave", empty, true);

function buttonClickedGrid() {
  row_column_count = prompt("How many rows and columns (1 - 100)?");
  if (row_column_count > row_column_count_max) row_column_count = row_column_count_max;
  createGrid();
}

function createGrid() {
  if (grid_exists === 1) removeGrid();

  for (let i = 0; i < row_column_count; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < row_column_count; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  grid_exists = 1;
}

function removeGrid() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => row.remove());
}

function fill(e) {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = "black";
  }
}

function empty(e) {
  if (e.target.classList.contains("square")) {
    setTimeout(() => {
      e.target.style.backgroundColor = "";
    }, 200);
  }
}
