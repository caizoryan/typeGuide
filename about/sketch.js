let WIDTH_INCHES = 9;
let HEIGHT_INCHES = 6.5;
let w = WIDTH_INCHES * 96;
let h = HEIGHT_INCHES * 96;
let fSize = 10.2; // 8pts
let center = { x: w / 2, y: h / 2 };
let hairline, thin, regular, medium, bold, maxi;
let tracking = 0;

let paraBreak = 12;

let para1 = d1.split(" ");
let para2 = d2.split(" ");
let para3 = d3.split(" ");

let boxes = (d3 + d1 + d2).split(" ");
console.log(boxes);

function preload() {
  hairline = loadFont("./fonts/hairline.otf");
  maxi = loadFont("./fonts/maxiLight.otf");
  thin = loadFont("./fonts/thin.otf");
  regular = loadFont("./fonts/regular.otf");
  medium = loadFont("./fonts/medium.otf");
  bold = loadFont("./fonts/bold.otf");
}

function setup() {
  document.getElementById("p5").style.width = w + "px";
  document.getElementById("p5").style.height = h + "px";
  createCanvas(w, h).parent("p5");
  textFont(medium);
  textSize(fSize);
  frameRate(1);

  let paraY = 48 * 6;
  let leading = 14.4;

  tracking = 8;
  para1 = createLocations(para1, width - 48 - (center.x + 48));
  para1 = addPositions(para1, center.x + 48, paraY, leading);

  tracking = 4;
  para2 = createLocations(para2, width - 48 - (center.x + 48));
  para2 = addPositions(
    para2,
    center.x + 48,
    para1.length * leading + paraY + paraBreak,
    leading
  );

  tracking = 7;
  para3 = createLocations(para3, width - 48 - (center.x + 48));
  para3 = addPositions(
    para3,
    center.x + 48,
    para2.length * leading + para1.length * leading + paraY + paraBreak * 2,
    leading
  );

  boxes = createLocations(boxes, width);
  boxes = addPositions(boxes, 100, -100, 12);
}

function draw() {
  background(255);
  noFill();
  strokeWeight(1);
  stroke(0);
  // rect(0, 0, width, height); line(center.x, 0, center.x, height);
  noStroke();
  renderBoxes(boxes);
  fill(0);
  textSize(fSize);
  text("TYPE3: 2023", center.x + 48, 48 + fSize * 1.2);
  textFont(maxi);
  textSize(fSize * 3);
  text("HyperbolicCod3x", center.x + 48 + 6, 48 + fSize * 3);

  textSize(fSize);
  renderLines(para1);
  renderLines(para2);
  renderLines(para3);
  noLoop();
}

function renderBoxes(words) {
  for (let y = 0; y < words.length; y++) {
    for (let x = 0; x < words[y].words.length; x++) {
      let word = words[y].words[x].word;
      let pos = words[y].words[x].position;
      textSize(fSize);
      if (word.length < 3) fill(240, 20);
      else if (word.length < 6) fill(230, 20);
      else if (word.length < 10) fill(220, 20);
      else fill(240);

      fill(255, 255, 0);
      let tw = textWidth(word);
      // circle(pos.x, pos.y + x * tw, 80 / tw);
      rectMode(CENTER);
      push();
      translate(pos.x, pos.y + x * tw);
      rotate(map(pos.y + x * tw, 0, 100, 1, 0));
      rect(0, 3, 800 / tw);
      pop();
      fill(0);
      fill(255, 0);
    }
  }
}

function renderLines(words) {
  for (let y = 0; y < words.length; y++) {
    for (let x = 0; x < words[y].words.length; x++) {
      let word = words[y].words[x].word;
      let pos = words[y].words[x].position;
      fill(0);
      textSize(fSize);
      if (word.length < 3) textFont(bold);
      else if (word.length < 6) textFont(medium);
      else if (word.length < 10) textFont(regular);
      else textFont(thin);

      let tw = textWidth(word);
      text(word, pos.x, pos.y);
      fill(255, 0, 255);
      circle(pos.x + tw + word.length / 4, pos.y - fSize / 4, 2);
      fill(255, 0);
    }
  }
}

function createLocations(words, length) {
  let lines = [];
  let currentLine = 0;
  let totalWidth = 0;
  let lastIndex = 0;
  for (let i = 0; i < words.length; i++) {
    let curWidth = textWidth(words[i]);
    if (totalWidth + curWidth + tracking > length) {
      lines.push({
        words: [],
        extraSpace: length - totalWidth,
      });
      for (let z = lastIndex; z < i; z++) {
        lines[currentLine].words.push({ word: words[z] });
      }
      totalWidth = curWidth + tracking;
      lastIndex = i;
      currentLine++;
    } else {
      if (i + 1 === words.length) {
        lines.push({
          words: [],
          extraSpace: length - totalWidth,
        });
        for (let z = lastIndex; z < i + 1; z++) {
          lines[currentLine].words.push({ word: words[z] });
        }
      }
      totalWidth += curWidth + tracking;
    }
  }
  return lines;
}

function addPositions(lines, xStart, yStart, leading) {
  for (let y = 0; y < lines.length; y++) {
    lastWidth = xStart;
    for (let x = 0; x < lines[y].words.length; x++) {
      let word = lines[y].words[x];
      let space = lines[y].extraSpace / lines[y].words.length - 1;
      if (x === 0) space = textWidth(lines[y].words[x]) / 20;
      else space = textWidth(lines[y].words[x - 1]) / 20;

      let t = tracking;
      if (x === 0) t = 6;
      word.position = {
        x: lastWidth + t,
        y: yStart + fSize + y * leading,
      };
      lastWidth += textWidth(word.word) + space;
    }
  }
  return lines;
}

function mousePressed() {
  saveCanvas("frame", "jpg");
}
