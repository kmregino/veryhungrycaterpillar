let bg;

function preload() {
  bg = loadImage('assets/page10.jpg');
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  image(bg, 0, 0); 
  
  fill(0); 
  textSize(34);
  textAlign(LEFT);
  textFont('Chinchilla');
  text("Now he wasn't hungry anymore-", 100, 75);
  text("and he wasn't a little caterpillar anymore.", 100, 125);
  textAlign(RIGHT);
  text("He was a big, fat caterpillar.", 900, 175);
}