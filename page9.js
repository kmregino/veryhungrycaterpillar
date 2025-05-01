let bg;
let cursorImg;
let stampPositions = [];
let showText = false;

function preload() {
  bg = loadImage('assets/page9_2.png');
  cursorImg = loadImage('assets/caterpillarsmaller.png');
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  image(bg, 0, 0);
  
  if (cursorImg) {
  cursor(cursorImg, 0, 0);
  }
  
  fill(0); 
  textSize(34);
  textAlign(LEFT);
  textFont('Chinchilla');
  text("The next day, he ate through one nice big leaf,", 35, 150); 

  
  fill(255);       
  noStroke();      

  for (let pos of stampPositions) {
    ellipse(pos.x, pos.y, 40, 40); 
  }
  
  if (showText) {
  fill(0); 
  textSize(34);
  textAlign(LEFT);
  textFont('Chinchilla');
  text("and after that he felt much better.", 35, 200);
  }
}

function mousePressed() {
  stampPositions.push({ x: mouseX, y: mouseY });
  
  showText = true;
}
