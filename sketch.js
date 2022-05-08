let time = 0;
let wave = []; // array of point
let slider;

function setup() {
  createCanvas(600, 400);
  slider = createSlider(1, 20, 1);
}

function draw() {
  background(0);
  translate(150, 200);

  // polar coordinates
  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    let prevX = x;
    let prevY = y;

    let n = 2 * i + 1;
    let radius = 60 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevX, prevY, radius * 2);

    fill(255);
    stroke(255);
    line(prevX, prevY, x, y);
    //ellipse(x, y, 8);
  }

  // storing y point
  wave.unshift(y);

  translate(200, 0);
  // connnecting the starting points with line
  line(x - 200, y, 0, wave[0]);

  beginShape();
  noFill();
  // iterating to draw point
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time -= 0.03;
}
