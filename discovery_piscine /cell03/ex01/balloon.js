const colors = ["red", "green", "blue"];

let size = 200;
let colorIndex = 0;

const ballon = document.getElementById("ballon");

const applyState = () => {
  ballon.style.width = size + "px";
  ballon.style.height = size + "px";
  ballon.style.backgroundColor = colors[colorIndex];
};

const addSize = () => {
  size += 10;
  if (size > 420) {
    size = 200;
  }
  colorIndex = (colorIndex + 1) % colors.length;
  applyState();
};

const removeSize = () => {
  size = Math.max(200, size - 5);
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  applyState();
};