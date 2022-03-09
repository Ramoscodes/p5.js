function setup() {
  createCanvas(400, 400);
  background(150);
  frameRate (7);
}

function draw() {
  stroke (225);
  if (mouseIsPressed === true)
  {
    line(mouseX, mouseY, pmouseX, pmouseY);
    circle (40,40,20)
    rect (80,80,90,90)
  }
}
