let bg1, bg2;
let useFirst = true;

function preload() {
  bg1 = loadImage('assets/page1_2.jpg'); 
  bg2 = loadImage('assets/page1_1.jpg'); 
}

function setup() {
  createCanvas(1000, 700);
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
  textSize(32);
  fill('white');
  text('In the light of the moon', 50, 425);
  text('a little egg lay on a leaf.', 50, 475);
}