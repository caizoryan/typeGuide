let WIDTH_INCHES = 9;
let HEIGHT_INCHES = 6.5;
let w = WIDTH_INCHES * 96;
let h = HEIGHT_INCHES * 96;
let fSize = 10.2; // 8pts
let center = { x: w / 2, y: h / 2 };
let hairline, thin, regular, medium, bold, maxi;
let italicThin, italicRegular, italicMedium, italicBold;
let poppinsRegular, poppinsBold;
let tracking = 0;

let paraBreak = 6;

let para1 = d1.split(" ");
let para2 = d2.split(" ");
bio1 = bio1.split(" ");
bio2 = bio2.split(" ");

let il = "USA, Toronto Premiere, Age 12+";
let dwf = "USA, Canadian Premiere, Ages 8+";

let para3 = d3.split(" ");
let para4 = why.split(" ");

let il1, il2, dwf1, dwf2;

let boxes = (d1 + d2 + d3 + why).split(" ");

function preload() {
  il1 = loadImage("./pictures/il1.png");
  il2 = loadImage("./pictures/il2.png");
  dwf1 = loadImage("./pictures/dwf1.png");
  dwf2 = loadImage("./pictures/dwf2.png");
  thin = loadFont("./fonts/thin.otf");
  regular = loadFont("./fonts/regular.otf");
  medium = loadFont("./fonts/medium.otf");
  bold = loadFont("./fonts/bold.otf");
  // italicThin = loadFont("./fonts/italicThin.otf");
  italicRegular = loadFont("./fonts/italicRegular.otf");
  poppinsRegular = loadFont("./fonts/poppinsRegular.ttf");
  poppinsBold = loadFont("./fonts/poppinsBold.ttf");
  // italicMedium = loadFont("./fonts/italicMedium.otf");
  // italicBold = loadFont("./fonts/italicBold.otf");
}

function setup() {
  document.getElementById("p5").style.width = w + "px";
  document.getElementById("p5").style.height = h + "px";
  createCanvas(w, h).parent("p5");
  textFont(medium);
  textSize(fSize);
  frameRate(1);

  let paraY = 48 * 2.5;
  let leading = 14.4;

  boxes = createLocations(boxes, width);
  boxes = addPositions(boxes, 100, -100, 100, 40);

  tracking = 5;
  fSize = 10;
  para3 = createLocations(para3, center.x - 48 * 2.1);
  para3 = addPositions(para3, 48, paraY, leading, 0);
  para4 = createLocations(para4, center.x - 48 * 2);
  para4 = addPositions(
    para4,
    48,
    paraY + para3.length * leading + paraBreak,
    leading,
    15
  );

  paraY = 48 * 9;
  tracking = 4;
  para1 = createLocations(para1, center.x - 48 * 2.1);
  para1 = addPositions(para1, 48, paraY, leading, 0);

  tracking = 4;
  para2 = createLocations(para2, center.x - 48 * 2.1);
  para2 = addPositions(
    para2,
    48,
    para1.length * leading + paraY + paraBreak,
    leading,
    0
  );

  tracking = 3;
  fSize = 8;
  bio1 = createLocations(bio1, width - 48 - (center.x + 48 * 2.5));
  bio1 = addPositions(bio1, center.x + 48 * 2.5, 48 * 9, leading - 3, 0);
  bio2 = createLocations(bio2, width - 48 - (center.x + 48 * 2.5));
  bio2 = addPositions(bio2, center.x + 48 * 2.5, 48 * 2.5, leading - 3, 0);
  fSize = 10.2;
}

function draw() {
  background(255);
  noFill();
  strokeWeight(1);
  stroke(0);
  // rect(0, 0, width, height);
  // line(center.x, 0, center.x, height);
  noStroke();
  renderBoxes(boxes);
  fill(0);
  image(il1, center.x + 24, 48 * 7.5, 48 * 3, 48 * 3);
  image(il2, center.x + 24, 48 * 7.5 + 24 + 48 * 3, 48 * 3, 48 * 3);
  image(dwf1, center.x + 24, -20, 48 * 3, 48 * 3);
  image(dwf2, center.x + 24, -20 + 24 + 48 * 3, 48 * 3, 48 * 3);
  textSize(19);
  textFont(poppinsBold);
  text("INTERACTION LAB", 48 * 2, 48 * 7.5 + fSize * 1.2);
  text("DANCE WITH FLARMINGOS", 48 * 2, 48 + fSize * 1.2);
  textSize(13);
  textFont(poppinsRegular);
  text("Zach Lieberman", 48 * 2, 48 * 7.5 + fSize * 3);
  text("Kristin Lucas", 48 * 2, 48 + fSize * 3);
  textSize(10);
  fill(100);
  text(il, 48 * 2, 48 * 7.5 + fSize * 3 + 17);
  text(dwf, 48 * 2, 48 + fSize * 3 + 17);

  textSize(fSize);
  renderLines(para1);
  renderLines(para2);
  renderLines(para3);
  renderLines(para4);
  fSize = 8;
  renderItalicLines(bio1);
  renderItalicLines(bio2);
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
      rect(0, 2, 800 / tw);
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
function renderItalicLines(words) {
  for (let y = 0; y < words.length; y++) {
    for (let x = 0; x < words[y].words.length; x++) {
      let word = words[y].words[x].word;
      let pos = words[y].words[x].position;
      fill(0);
      textSize(fSize);
      textFont(italicRegular);

      let tw = textWidth(word);
      text(word, pos.x, pos.y);
      fill(255, 0, 255);
      circle(pos.x + tw + word.length / 4, pos.y - fSize / 4, 2);
      fill(255, 0);
    }
  }
}

function createLocations(words, length) {
  textSize(fSize);

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

function addPositions(lines, xStart, yStart, leading, track) {
  textSize(fSize);
  for (let y = 0; y < lines.length; y++) {
    lastWidth = xStart;
    for (let x = 0; x < lines[y].words.length; x++) {
      let word = lines[y].words[x];
      let space = lines[y].extraSpace / lines[y].words.length - 1;
      if (track != 0) {
        if (x === 0) space = textWidth(lines[y].words[x]) / track;
        else space = textWidth(lines[y].words[x - 1]) / track;
      } else {
        if (y + 1 === lines.length) space = tracking;
        else space = lines[y].extraSpace / lines[y].words.length - 1 + tracking;
      }
      let t = tracking;
      if (x === 0) t = fSize / 2;
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
