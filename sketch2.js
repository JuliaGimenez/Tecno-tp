let x = 100; // Declara una variable "x" con valor 100
  const y = 200; // Declara una constante "y" con valor 200
  var size = 20; // Declara una variable "size" con valor 20
  let color = "#FF99FF"; // Declara una variable "color" con valor "#FF00FF"
  let message = "Hola, mundo!"; // Declara una variable "message" con valor "Hola, mundo!"
  let variable= false;
  let fondo=220;
  let dimension=50;
  let moveX=0;
function setup() {
  createCanvas(600, 400);
  mousePressed = function() {
    color = "#00FFFF";
  }
}

function draw() {
  background(fondo);
  fill(color);
  ellipse(200+moveX,200,dimension,dimension);
  moveX++;

}
