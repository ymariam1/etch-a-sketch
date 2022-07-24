const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}
makeRows(16, 16);
const cbtn = document.querySelector("#cbtn");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
cbtn.addEventListener("click", () => {
  cbtn.classList.add("active");
  rainbow.classList.remove("active");
  eraser.classList.remove("active");
  clear.classList.remove("active");
});

rainbow.addEventListener("click", () => {
  cbtn.classList.remove("active");
  rainbow.classList.add("active");
  eraser.classList.remove("active");
  clear.classList.remove("active");
});
eraser.addEventListener("click", () => {
  cbtn.classList.remove("active");
  rainbow.classList.remove("active");
  eraser.classList.add("active");
  clear.classList.remove("active");
});

clear.addEventListener("click", () => {
  cbtn.classList.remove("active");
  rainbow.classList.remove("active");
  eraser.classList.remove("active");
  clear.classList.add("active");
});
