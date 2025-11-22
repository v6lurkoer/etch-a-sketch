let count = 0;
const square_count_limit = 100;

let create_count = 0;
let remove_count = 0;

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

btn.addEventListener("click", onButtonClick);

// TODO need to figure out how to make hovering work again
squares.forEach((sq) => sq.addEventListener("mouseenter", (e) => {
  sq.style.backgroundColor = "black";
}));

squares.forEach((sq) => sq.addEventListener("mouseleave", (e) => {
  setTimeout(() => {
    sq.style.backgroundColor = "";
  }, 200);
}));

function onButtonClick() {
  count = prompt("How many squares (1 - 100)?");
  if (count > square_count_limit) count = square_count_limit;
  console.log(count);
  createGrid();
  console.log(create_count);
  console.log(remove_count);
}

function createGrid() {
  if (create_count > remove_count) removeGrid();

  for (let i = 0; i < count; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < count; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  create_count++;
}

function removeGrid() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => row.remove());
  remove_count++;
}
