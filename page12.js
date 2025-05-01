let bg;

function preload() {
  bg = loadImage('assets/page12.jpg');
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  image(bg, 0, 0); 
  
  fill(0); 
  textSize(32);
  textAlign(CENTER);
  text("he was a beautiful butterfly!", 500, 140);
}