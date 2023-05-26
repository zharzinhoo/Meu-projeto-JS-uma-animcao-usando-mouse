    //by: zhar

let cor; 
let posiCaoHorizontal; // x
let posicaoVertical; // y


function setup() {
  createCanvas(1920, 1080);
  background("white");
  cor = color(random(0, 255),random(0, 255), random(0, 255));
  posiCaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor);
  circle(posiCaoHorizontal, posicaoVertical, 40)
 
  if (mouseX < posiCaoHorizontal) {
    posiCaoHorizontal = posiCaoHorizontal - 1;
    }
    
  
  if (mouseX > posiCaoHorizontal) {
    posiCaoHorizontal = posiCaoHorizontal + 1;
    }
  
    if (mouseY < posicaoVertical ) {
    posicaoVertical--;
  }
  
 if (mouseY > posicaoVertical ) {
    posicaoVertical++;
  }
  
 if (mouseIsPressed) {
  cor = color(random(0, 255),random(0, 255), random(0, 255), random(0, 100));
   }
}