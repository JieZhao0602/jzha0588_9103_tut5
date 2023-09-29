function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

let rectSize = height / 2
function windowResized() {
  fill(200, 60, 50)
  resizeCanvas(windowHeight, windowWidth)
}

