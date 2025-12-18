const max_row_column_count = 100;
const max_opacity_value = 1;

let row_column_count = 0;
let grid_exists = 0;
let clicked_btn_black_color = 0;
let clicked_btn_random_color = 0;
let clicked_btn_opacity = 0;
let opacity = 0;

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
  if (row_column_count > max_row_column_count) row_column_count = max_row_column_count;
  createGrid();
}

function buttonClickedBlackColor(e) {
  if (clicked_btn_black_color === 0) {
    if (clicked_btn_random_color === 0 && clicked_btn_opacity === 0) {
      container.addEventListener("mouseenter", fillBlackColor, true);
      container.addEventListener("mouseleave", empty, true);
      container.removeEventListener("mouseenter", fillRandomColor, true);
      container.removeEventListener("mouseenter", fillOpacity, true);
      btn_black_color.style.backgroundColor = "green";
      clicked_btn_black_color = 1;
    }
  } else if (clicked_btn_black_color === 1) {
    container.removeEventListener("mouseenter", fillBlackColor, true);
    container.removeEventListener("mouseleave", empty, true);
    btn_black_color.style.backgroundColor = "";
    clicked_btn_black_color = 0;
  }
}

function buttonClickedRandomColor() {
  if (clicked_btn_random_color === 0) {
    if (clicked_btn_black_color === 0 && clicked_btn_opacity === 0) {
      container.addEventListener("mouseenter", fillRandomColor, true);
      container.addEventListener("mouseleave", empty, true);
      container.removeEventListener("mouseenter", fillBlackColor, true);
      container.removeEventListener("mouseenter", fillOpacity, true);
      btn_random_color.style.backgroundColor = "green";
      clicked_btn_random_color = 1;
    }
  } else if (clicked_btn_random_color === 1) {
    container.removeEventListener("mouseenter", fillRandomColor, true);
    container.removeEventListener("mouseenter", empty, true);
    btn_random_color.style.backgroundColor = "";
    clicked_btn_random_color = 0;
  }
}

function buttonClickedOpacity() {
    if (clicked_btn_opacity === 0) {
      if (clicked_btn_black_color === 0 && clicked_btn_random_color === 0) {
        container.addEventListener("mouseenter", fillOpacity, true);
        container.addEventListener("mouseleave", empty, true);
        container.removeEventListener("mouseenter", fillBlackColor, true);
        container.removeEventListener("mouseenter", fillRandomColor, true);
        btn_opacity.style.backgroundColor = "green";
        clicked_btn_opacity = 1;
      }
    } else if (clicked_btn_opacity === 1) {
      container.removeEventListener("mouseenter", fillOpacity, true);
      container.removeEventListener("mouseenter", empty, true);
      btn_opacity.style.backgroundColor = "";
      clicked_btn_opacity = 0;
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
    e.target.style.backgroundColor = "rgb(0, 0, 0)";
  }
}

function fillRandomColor(e) {
  const r = getRandomInt(256);
  const g = getRandomInt(256);
  const b = getRandomInt(256);

  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function fillOpacity(e) {
  if (opacity > max_opacity_value) opacity = 0.1;

  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  }

  opacity += 0.1;
  console.log(opacity);
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
