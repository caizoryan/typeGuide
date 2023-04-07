let WIDTH_INCHES = 9;
let HEIGHT_INCHES = 6.5;
let w = WIDTH_INCHES * 96;
let h = HEIGHT_INCHES * 96;
let fSize = 9; // 8pts
let font;
let sponsorName = "McCulloch International Arts Council Ltd.";
let nameArray = names.split(", ").sort();

// loop through nameArray
for (let i = 0; i < nameArray.length; i++) {
  if (nameArray[i].includes("$")) {
    nameArray[i] = nameArray[i].replace(",000", "k");
  }
  if (nameArray[i].substring(nameArray[i].length - 1) != ")")
    nameArray[i] += " (money)";
}
function preload() {
  font = loadFont("./aktiv.otf");
}
function setup() {
  createCanvas(w, h).parent("p5");
  textFont(font);
  frameRate(1);
}

function draw() {
  background(255);

  noFill();
  strokeWeight(10);
  rect(0, 0, width, height);

  fill(0);
  textSize(fSize);
  renderNames(nameArray);
}

function mousePressed() {
  noLoop();
}

function renderNames(nameList) {
  // draw name
  let lastWidth = random(20);
  let line = 0;
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i].includes("$")) textSize(fSize + 3);
    else textSize(fSize);
    let col = "red";
    // check if next width if will cross margin: next line,
    if (textWidth(nameList[i]) + 48 + lastWidth > width - 50) {
      lastWidth = random(40);
      line++;
    }
    if (random() > 0.5) col = "blue";

    if (col === "blue") {
      noFill();
      stroke(50, 50, 255);
      strokeWeight(0.1);
    } else {
      fill(255, 100, 100);
    }
    rect(
      48 + lastWidth + random(-fSize / 2, fSize / 2),
      48 + line * 14 + random(-fSize / 2, fSize / 2),
      textWidth(nameList[i]) + random(-fSize / 2, fSize / 2),
      fSize + random(-fSize / 2, fSize / 2)
    );
    fill(0);
    noStroke();
    text(nameList[i], 48 + lastWidth, 48 + fSize + line * 14);
    // store its width
    lastWidth += textWidth(nameList[i]) + random(10, fSize * 2.5);
  }
}
