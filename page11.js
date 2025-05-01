let string = `
He built a small house, called a cocoon, around himself.

He stayed inside for more than two weeks. 

Then he nibbled a hole in the cocoon, pushed his way out and... `;
let currentCharacter = 0;
let pageMargin = 25;

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background("white");
  
  let currentString = string.substring(0, currentCharacter);
  
  push();
  textSize(34);
  textAlign(LEFT, BASELINE);
  textFont('Chinchilla');
  text(currentString, pageMargin + 30, pageMargin + 30, width -   pageMargin*2, height - pageMargin);
  pop();
  
  currentCharacter += 0.2;
}