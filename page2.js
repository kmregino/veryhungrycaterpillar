let bg;
let overlayImg;
let cursorImg;

let overlayX = 270;
let overlayY = 20;
let overlayW = 600;
let overlayH = 450;

let eggClicked = false;

function preload() {
  bg = loadImage('assets/page2.jpg'); 
  overlayImg = loadImage('assets/egg.png');
  cursorImg = loadImage('assets/caterpillar1.png');
}

function setup() {
  createCanvas(1000, 700);
  cursor(); 
}

function draw() {
  background(bg); 

  if (!eggClicked) {
    image(overlayImg, overlayX, overlayY, overlayW, overlayH);
    cursor(); 
    fill(0); 
    textSize(30);
    textAlign(LEFT, CENTER);
    textFont('Chinchilla');
    text("One Sunday morning the sun came out and", 70, 80);
  } 
  
  else {
    noCursor(); 
    image(cursorImg, mouseX, mouseY, 150, 100); 

    fill(0); 
    textSize(30);
    textAlign(LEFT, CENTER);
    textFont('Chinchilla');
    text("POP!", 70, 80);
    text("Out of the egg came a tiny", 70, 130);
    text("and very hungry caterpillar.", 70, 180);
  }
}


function mousePressed() {
  if (!eggClicked &&
      mouseX > overlayX && mouseX < overlayX + overlayW &&
      mouseY > overlayY && mouseY < overlayY + overlayH) {
    eggClicked = true;
  }
}
