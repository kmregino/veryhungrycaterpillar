let bg;
let stampPositions = [];
let clickCount = 0;

function preload() {
  bg = loadImage('assets/page7.jpg');
}

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  image(bg, 0, 0);
  
  fill(0); 
  textSize(36);
  textAlign(CENTER);
  textFont('Chinchilla');
  text("On Thursday he ate through four strawberries,", 500, 150); 

  
  fill(255);       
  noStroke();      

  for (let pos of stampPositions) {
    ellipse(pos.x, pos.y, 40, 40); 
  }
  
if (clickCount >= 4) {
  fill(0); 
  textSize(36);
  textAlign(CENTER);
  textFont('Chinchilla');
  text("but he was still hungry.", 500, 200);
  }
}

function mousePressed() {
  stampPositions.push({ x: mouseX, y: mouseY });
  
   clickCount++;
}
