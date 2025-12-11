let row_column_count = 0;
const row_column_count_max = 100;
let grid_exists = 0;
let clicked_btn_black_color = 0;

const btn_grid = document.querySelector(".grid");
const btn_black_color = document.querySelector(".black-color");
const btn_random_color = document.querySelector(".random-color");
const btn_opacity = document.querySelector(".opacity");
const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

btn_grid.addEventListener("click", buttonClickedGrid);
btn_black_color.addEventListener("click", buttonClickedBlackColor);
btn_random_color.addEventListener("click", buttonClickedRandomColor);
btn_opacity.addEventListener("click", buttonClickedOpacity);

function buttonClickedGrid() {
  row_column_count = prompt("How many rows and columns (1 - 100)?");
  if (row_column_count > row_column_count_max) row_column_count = row_column_count_max;
  createGrid();
}

function buttonClickedBlackColor() {
  container.addEventListener("mouseenter", fillBlackColor, true);
  container.addEventListener("mouseleave", empty, true);
  container.removeEventListener("mouseenter", fillRandomColor, true);
  container.removeEventListener("mouseenter", fillOpacity, true);
}

function buttonClickedRandomColor() {
  container.addEventListener("mouseenter", fillRandomColor, true);
  container.addEventListener("mouseleave", empty, true);
  container.removeEventListener("mouseenter", fillBlackColor, true);
  container.removeEventListener("mouseenter", fillOpacity, true);
}

function buttonClickedOpacity() {
  container.addEventListener("mouseenter", fillOpacity, true);
  container.addEventListener("mouseleave", empty, true);
  container.removeEventListener("mouseenter", fillBlackColor, true);
  container.removeEventListener("mouseenter", fillRandomColor, true);

function buttonClickedBlackColor(e) {
  if (clicked_btn_black_color === 0) {
    btn_black_color.style.backgroundColor = "green";
    container.addEventListener("mouseenter", fill, true);
    container.addEventListener("mouseleave", empty, true);
    clicked_btn_black_color = 1;
  } else if (clicked_btn_black_color === 1) {
    btn_black_color.style.backgroundColor = "";
    container.removeEventListener("mouseenter", fill, true);
    container.removeEventListener("mouseleave", empty, true);
    clicked_btn_black_color = 0;
  }

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

function fillBlackColor(e) {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = "black";
  }
}

function fillRandomColor(e) {
  const r = getRandomInt(256);
  const g = getRandomInt(256);
  const b = getRandomInt(256);

  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
  }
}

function fillOpacity(e) {
  const r = 0;
  const g = 0;
  const b = 0;
  let o = 0.1;

  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = `rgb(${r} ${g} ${b} / ${o})`;
  }
}

function empty(e) {
  if (e.target.classList.contains("square")) {
    setTimeout(() => {
      e.target.style.backgroundColor = "";
    }, 200);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}