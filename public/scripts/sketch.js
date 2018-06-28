/*
*
* GLOBALS.
*
*/

var walker;

function setup() {
  createCanvas(1240, 700);
  walker = new Walker();
}

function draw() {
  // First random drawings! by @sroibon
  // if (mouseIsPressed) {
  //   fill(random(255));
  //   ellipse(mouseX, mouseY, random(80), random(80));
  // }
  walker.update();
  walker.display();
}

// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Random Walker
function Walker() {

  // Start walker at center of canvas
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    var vel = createVector(random(-5, 5), random(-5, 5));
    this.pos.add(vel);
  }

  this.display = function() {
    // draw Walker as circle
    fill(255);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
