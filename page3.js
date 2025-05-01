let bg;
let overlayImg;

function preload() {
  bg = loadImage('assets/page3.jpg');
  overlayImg = loadImage('assets/movingvhc.gif');
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  image(bg, 0, 0); 
  image(overlayImg, 300, 550, 200, 150); 
  
  fill(0); 
  textSize(32);
  textAlign(CENTER);
  text("He started to look for some food", 500, 475);
}