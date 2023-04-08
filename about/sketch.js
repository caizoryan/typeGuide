let WIDTH_INCHES = 9;
let HEIGHT_INCHES = 6.5;
let w = WIDTH_INCHES * 96;
let h = HEIGHT_INCHES * 96;
let fSize = 10.25; // 8pts
let center = { x: w / 2, y: h / 2 };
let hairline, thin, regular, medium, bold;
let tracking = 2;

function preload() {
  // hairline = loadFont("./fonts/hairline.otf");
  thin = loadFont("./fonts/thin.otf");
  regular = loadFont("./fonts/regular.otf");
  // medium = loadFont("./fonts/medium.otf");
  bold = loadFont("./fonts/bold.otf");
}

let para1 = d1.split(" ");
function setup() {
  document.getElementById("p5").style.width = w + "px";
  document.getElementById("p5").style.height = h + "px";
  createCanvas(w, h).parent("p5");
  textFont(thin);
  textSize(fSize);
  frameRate(1);

  console.log(para1);

  para1 = createLocations(para1, width - 48 - (center.x + 48));
  para1 = addPositions(para1, center.x + 48, 48, 15);
}

function draw() {
  background(255);
  noFill();
  strokeWeight(1);
  stroke(0);
  rect(0, 0, width, height);
  line(center.x, 0, center.x, height);
  noStroke();
  fill(0);
  textSize(fSize);
  renderLines(para1);
  noLoop();
}

function renderLines(words) {
  for (let y = 0; y < words.length; y++) {
    for (let x = 0; x < words[y].words.length; x++) {
      let word = words[y].words[x].word;
      let pos = words[y].words[x].position;
      console.log(word);
      text(word, pos.x, pos.y);
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
        for (let z = lastIndex; z < i; z++) {
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
      word.position = {
        x: lastWidth + tracking,
        y: yStart + fSize + y * leading,
      };
      lastWidth += textWidth(word.word) + tracking + space / 8;
    }
  }
  return lines;
}

function mousePressed() {
  // saveCanvas("frame", "jpg");
}
