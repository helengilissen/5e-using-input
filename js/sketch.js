// Opdracht 5E: Using input

var bgColor1 = "red"
var bgColor2 = "blue"
var bgColor3 = (240)
var bgColor4 = "yellow"

function setup () {
  createCanvas (windowWidth/2, windowHeight/2);
}

function draw () {
  background (bgColor3);

  line(0, height /3/1*2, width, height /3/1*2);
  line(0, height /3, width, height /3);

  line(width /4, 0, width /4, height);
  line(width /2/2*3, 0, width /2/2*3, height);
  line(width /2, 0, width/2, height);
  line(width, 0, width, height);

  fill (bgColor1)
  rect (width / 4, height / 3, width / 4, height /3)
  rect (width / 2, 0, width / 4, height /3)
  rect (width /2/2*3, height /3/1*2, width, height /3)
}

function mousePressed () {
  print ("dit is de mousepressed");
  bgColor1 = bgColor2
}

function keyPressed () {
  print ("dit is de keypressed");
  bgColor3 = bgColor4
}