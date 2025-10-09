const container = document.querySelector(".container");

const count = 16;
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

const squares = document.querySelectorAll(".square");

squares.forEach((sq) => sq.addEventListener("mouseenter", (e) => {
  sq.style.backgroundColor = "black";
}));

squares.forEach((sq) => sq.addEventListener("mouseleave", (e) => {
  sq.style.backgroundColor = "";
}));
