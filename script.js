const max_row_column_count = 100;
const max_opacity_value = 10;

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

btn_grid.addEventListener("click", buttonClickedGrid);
btn_black_color.addEventListener("click", buttonClickedBlackColor);
btn_random_color.addEventListener("click", buttonClickedRandomColor);
btn_opacity.addEventListener("click", buttonClickedOpacity);

function buttonClickedGrid() {
  row_column_count = prompt("How many rows and columns (1 - 100)?");
  if (row_column_count > max_row_column_count) {
    row_column_count = max_row_column_count
  };
  createGrid();
}

function buttonClickedBlackColor(e) {
  const squares = document.querySelectorAll(".square");
  if (clicked_btn_black_color === 0) {
    if (clicked_btn_random_color === 0 && clicked_btn_opacity === 0) {
      squares.forEach((square) => {
        square.addEventListener("mouseenter", fillBlackColor, true);
        square.addEventListener("mouseleave", empty, true);
        square.removeEventListener("mouseenter", fillRandomColor, true);
        square.removeEventListener("mouseenter", fillOpacity, true);
      });
      btn_black_color.style.backgroundColor = "green";
      clicked_btn_black_color = 1;
    }
  } else if (clicked_btn_black_color === 1) {
    squares.forEach((square) => {
      square.removeEventListener("mouseenter", fillBlackColor, true);
      square.removeEventListener("mouseleave", empty, true);
    });
    btn_black_color.style.backgroundColor = "";
    clicked_btn_black_color = 0;
  }
}

function buttonClickedRandomColor() {
  const squares = document.querySelectorAll(".square");
  if (clicked_btn_random_color === 0) {
    if (clicked_btn_black_color === 0 && clicked_btn_opacity === 0) {
      squares.forEach((square) => {
        square.addEventListener("mouseenter", fillRandomColor, true);
        square.addEventListener("mouseleave", empty, true);
        square.removeEventListener("mouseenter", fillBlackColor, true);
        square.removeEventListener("mouseenter", fillOpacity, true);
      });
      btn_random_color.style.backgroundColor = "green";
      clicked_btn_random_color = 1;
    }
  } else if (clicked_btn_random_color === 1) {
    squares.forEach((square) => {
      square.removeEventListener("mouseenter", fillRandomColor, true);
      square.removeEventListener("mouseenter", empty, true);
    });
    btn_random_color.style.backgroundColor = "";
    clicked_btn_random_color = 0;
  }
}

function buttonClickedOpacity() {
  const squares = document.querySelectorAll(".square");
    if (clicked_btn_opacity === 0) {
      if (clicked_btn_black_color === 0 && clicked_btn_random_color === 0) {
        squares.forEach((square) => {
          square.addEventListener("mouseenter", fillOpacity, true);
          square.addEventListener("mouseleave", empty, true);
          square.removeEventListener("mouseenter", fillBlackColor, true);
          square.removeEventListener("mouseenter", fillRandomColor, true);
        });
        btn_opacity.style.backgroundColor = "green";
        clicked_btn_opacity = 1;
      }
    } else if (clicked_btn_opacity === 1) {
      squares.forEach((square) => {
        square.removeEventListener("mouseenter", fillOpacity, true);
        square.removeEventListener("mouseenter", empty, true);
      });
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
  if (opacity > max_opacity_value) opacity = 1;
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity / 10})`;
  }

  opacity += 1;
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
