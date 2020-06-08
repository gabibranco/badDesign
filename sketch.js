function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 200, 200);
  fill(0, 0, 0);
  stroke(0)
  beginShape();
  curveVertex(32, 91);
  curveVertex(32, 91);
  curveVertex(68, 19);
  curveVertex(21, 17);
  curveVertex(32, 91);
  curveVertex(32, 91);
  endShape();  
  noFill();
  fill(244, 0, 100);
  strokeWeight(6);
  stroke(60,179,113);
  bezier(width, width/2, width/3, width, width/4, width/5, width/4, width/4);
}