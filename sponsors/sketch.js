let WIDTH_INCHES = 9;
let HEIGHT_INCHES = 6.5;
let w = WIDTH_INCHES * 96;
let h = HEIGHT_INCHES * 96;
let fSize = 10.25; // 8pts
let hairline, thin, regular, medium, bold;
let temp = names.sort((a, b) =>
  a.name.substring(0).localeCompare(b.name.substring(0))
);
let linesToRender = [];

let nameArray = [...new Set(temp)];
nameArray.push({ name: "end", tier: "7blank" });
function preload() {
  // hairline = loadFont("./fonts/hairline.otf");
  thin = loadFont("./fonts/thin.otf");
  regular = loadFont("./fonts/regular.otf");
  // medium = loadFont("./fonts/medium.otf");
  bold = loadFont("./fonts/bold.otf");
}
function setup() {
  let p = document.getElementById("p5");
  p.style.width = w + "px";
  p.style.height = h + "px";
  createCanvas(w, h).parent("p5");
  textFont(regular);
  frameRate(1);
}

function draw() {
  background(255);

  noFill();
  strokeWeight(1);
  stroke(0);
  rect(0, 0, width, height);
  noStroke();
  fill(0);
  textSize(fSize);
  createLocations(nameArray);
  addPositions(linesToRender);
  render(linesToRender);
  noLoop();
}

function mousePressed() {
  saveCanvas("frame", "jpg");
}

function render(lines) {
  let margin = 10;
  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].people.length; x++) {
      person = lines[y].people[x];
      let txt;
      // styling
      console.log(person.tier);
      fill(0);
      textSize(fSize);
      textFont(regular);
      if (person.tier === "1") {
        txt = person.name;
        fill(0);
        rect(
          person.position.x - margin / 2,
          person.position.y - fSize - margin / 2,
          textWidth(person.name) + margin * 1.8,
          fSize + margin * 1.2
        );
        textFont(bold);
        fill(255);
      } else if (person.tier === "2a") {
        txt = person.name;
        fill(0);
        rect(
          person.position.x - margin / 2,
          person.position.y - fSize - margin / 2,
          textWidth(person.name) + margin * 1.2,
          fSize + margin * 1.2
        );
        fill(255);
      } else if (person.tier === "2b") {
        txt = person.name;
        fill(0);
        rect(
          person.position.x - margin / 2,
          person.position.y - fSize - margin / 2,
          textWidth(person.name) + margin * 1.2,
          fSize + margin * 1.2
        );
        fill(255);
      } else if (person.tier === "3") {
        txt = person.name;
        fill(255, 0, 255, 200);
        // circle(
        //   person.position.x + textWidth(person.name),
        //   person.position.y - margin / 2,
        //   margin
        // );
        fill(0);
        textFont(bold);
      } else if (person.tier === "4") {
        txt = person.name;
        textFont(bold);
        fill(0, 200);
      } else if (person.tier === "5") {
        txt = person.name;
        textFont(regular);
      } else if (person.tier === "6") {
        txt = person.name;
        textFont(thin);
      } else if (person.tier === "7blank") {
        txt = "";
        fill(0);
        rect(
          person.position.x - margin / 2,
          person.position.y - fSize - margin / 2,
          textWidth(person.name) + margin * 1.2,
          fSize + margin * 1.2
        );
      } else {
        txt = person.name;
      }
      text(txt, person.position.x, person.position.y);
    }
  }
}

function addPositions(lines) {
  for (let y = 0; y < lines.length; y++) {
    lastWidth = 48;
    for (let x = 0; x < lines[y].people.length; x++) {
      let person = lines[y].people[x];
      let space = lines[y].extraSpace / lines[y].people.length - 1;
      person.position = { x: lastWidth + 10, y: 48 + fSize + y * 17.3 };
      lastWidth += textWidth(person.name) + 10 + space;
    }
  }
}

function renderNames(nameList) {
  // draw name
  let lastWidth = random(20);
  let line = 0;
  for (let i = 0; i < nameList.length; i++) {
    // check if next width if will cross margin: next line,
    if (textWidth(nameList[i].name) + 48 + lastWidth > width - 50) {
      lastWidth = random(40);
      line++;
    }

    // rect(48 + lastWidth, 48 + line * 14, textWidth(nameList[i].name), fSize);
    fill(0);
    noStroke();
    text(nameList[i].name, 48 + lastWidth, 48 + fSize + line * 14);
    // store its width
    lastWidth += textWidth(nameList[i].name) + random(10, fSize * 2.5);
  }
}

function createLocations(names) {
  let lines = [];
  let currentLine = 0;
  let totalWidth = 48;
  let lastIndex = 0;
  let end = width - 48;
  for (let i = 0; i < names.length; i++) {
    let curWidth = textWidth(names[i].name);
    if (totalWidth + curWidth + 10 > end) {
      lines.push({
        people: [],
        extraSpace: end - totalWidth,
      });
      for (let z = lastIndex; z < i; z++) {
        lines[currentLine].people.push(names[z]);
      }
      totalWidth = 48 + curWidth + 10;
      lastIndex = i;
      currentLine++;
    } else {
      if (i + 1 === names.length) {
        lines.push({
          people: [],
          extraSpace: end - totalWidth,
        });
        for (let z = lastIndex; z < i; z++) {
          lines[currentLine].people.push(names[z]);
        }
      }
      totalWidth += curWidth + 10;
    }
  }
  linesToRender = lines;
}
