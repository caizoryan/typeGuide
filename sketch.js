let WIDTH_INCHES = 9;
let HEIGHT_INCHES = 6.5;
let w = WIDTH_INCHES * 96;
let h = HEIGHT_INCHES * 96;
let fSize = 9; // 8pts
let font;
let temp = names.sort((a, b) =>
  a.name.substring(0).localeCompare(b.name.substring(0))
);

let nameArray = [...new Set(temp)];
console.log(nameArray.length);
let div = document.querySelector(".names");
div.style.width = w + "px";
div.style.height = h + "px";

let currentDiv;
let currentAlphabet = "A";

function preload() {
  font = loadFont("./aktiv.otf");
}
function setup() {
  createCanvas(w, h).parent("p5");
  textFont(font);
  frameRate(1);
  currentDiv = document.querySelector(".names");
  currentDiv.innerHTML += "<span class='alphabet'>A</span>";
}

function draw() {
  background(255);

  noFill();
  strokeWeight(1);
  rect(0, 0, width, height);

  fill(0);
  textSize(fSize);
  // renderNames(nameArray);
  for (const x of nameArray) addName(x.name, x.tier);
  noLoop();
}

function mousePressed() {
  noLoop();
}

function renderDivs(nameList) {
  currentDiv.innerHtml += "Name";
}

function addName(text, tier) {
  if (text.toUpperCase().substring(0, 1) != currentAlphabet)
    newDiv(text.toUpperCase().substring(0, 1));
  currentDiv.innerHTML += `<span>${text}</span>`;
}

function newDiv(alphabet) {
  currentAlphabet = alphabet;
  currentDiv.innerHTML += `<span class="alphabet">${alphabet}</span>`;
}
