let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y


function setup() {
  createCanvas(400, 400);
  background("green");
  cor = color (random (0, 255), random (0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}
  
function draw() {
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical,50);

  if(mouseX < posicaoHorizontal, posicaoVertical, 50);
  posicaoHorizontal--;
}

if(mouseY > posicaoVertical) {
    posicaoVertical++;
    }

  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }

  if(mouseY > posicaoVertical) {
    posicaoVertical++;
    }
  