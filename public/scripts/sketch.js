function setup() {
  createCanvas(1240, 700);
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255));
    ellipse(mouseX, mouseY, random(80), random(80));
  }
}
