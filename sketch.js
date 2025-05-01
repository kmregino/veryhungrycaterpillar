let bg1, bg2;
let useFirst = true;



function setup() {
  createCanvas(1000, 700);
}

function preload() {
  bg1 = loadImage('assets/page1_2.jpg'); 
  bg2 = loadImage('assets/page1_1.jpg'); 
}

function draw() {
  if (useFirst) {
    background(bg1);
  } else {
    background(bg2);
  }
  displayText();
}

function mousePressed() {
  useFirst = !useFirst; 
}

function displayText() {
  textSize(35);
  fill("white");
  textFont('Chinchilla');
  text('In the light of the moon', 50, 525);
  text('a little egg lay on a leaf.', 50, 575);
}