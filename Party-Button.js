const mainButton = document.getElementById("main-button");
const textClick = document.getElementById("text-click");
let text = document.getElementById("text");

function changeColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  let letters = "0123456789ABCDEF".split('');
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

let clicks = 0;
function trackClicks() {
  clicks += 1;
  textClick.innerHTML = `Button Clicked: ${clicks}`; 
}

mainButton.addEventListener("click", changeColor);
mainButton.addEventListener("click", trackClicks);
