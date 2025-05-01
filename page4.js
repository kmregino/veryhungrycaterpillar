let bg;
let stampPositions = [];
let showText = false;
let cursorImg;

function preload() {
  bg = loadImage('assets/page4.jpg');
  cursorImg = loadImage('assets/caterpillarsmaller.png');
}

function setup() {
  createCanvas(1000, 700);
  cursor(cursorImg, 0, 0);
}

function draw() {
  image(bg, 0, 0);
  
  fill(0); 
  textSize(36);
  textAlign(CENTER);
  textFont('Chinchilla');
  text("On Monday he ate through one apple.", 500, 150); 

  
  fill(255);       
  noStroke();      

  for (let pos of stampPositions) {
    ellipse(pos.x, pos.y, 40, 40); 
  }
  
  if (showText) {
  fill(0); 
  textSize(36);
  textAlign(CENTER);
  textFont('Chinchilla');
  text("But he was still hungry.", 500, 200);
  }
}

function mousePressed() {
  stampPositions.push({ x: mouseX, y: mouseY });
  
  showText = true;
}
