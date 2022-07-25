const DEFAULT_COLOR = "#333333";
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", draw);
    cell.addEventListener("mousedown", draw);
    container.appendChild(cell).className = "grid-item";
  }
}

const cbtn = document.querySelector("#cbtn");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");

function activateButton(newMode) {
  if (currentMode === "rainbow") {
    rainbowBtn.classList.remove("active");
  } else if (currentMode === "color") {
    colorBtn.classList.remove("active");
  } else if (currentMode === "eraser") {
    eraserBtn.classList.remove("active");
  }

  if (newMode === "rainbow") {
    rainbowBtn.classList.add("active");
  } else if (newMode === "color") {
    colorBtn.classList.add("active");
  } else if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  }
}

clear.addEventListener("click", () => {
  clearBoard();
});
var slider = document.getElementById("sizeSlider");
var output = document.getElementById("output");

var defaultValue = slider.value;
output.textContent = `${defaultValue} x ${defaultValue}`;

slider.oninput = function () {
  var value = this.value;
  output.innerHTML = `${value} x ${value}`;
  clearBoard();
  makeRows(value, value);
};
const colorPicker = document.getElementById("colorPicker");
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
const colorBtn = document.getElementById("cbtn");
const rainbowBtn = document.getElementById("rainbow");
const eraserBtn = document.getElementById("eraser");
const clearbtn = document.getElementById("clear");

colorBtn.onclick = () => setCurrentMode("color");
rainbowBtn.onclick = () => setCurrentMode("rainbow");
eraserBtn.onclick = () => setCurrentMode("eraser");

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function draw(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "whitesmoke";
  }
}
window.onload = () => {
  makeRows(DEFAULT_SIZE, DEFAULT_SIZE);
  activateButton(DEFAULT_MODE);
};
function clearBoard() {
  container.textContent = " ";
}
