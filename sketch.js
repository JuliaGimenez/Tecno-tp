import { Linea } from './linea.js';
let linea;
let inicioX;
let inicioY;
let finX;
let finY;
let estaDiburando=false;
function setup(){
createCanvas(1000,700);
background(200);
linea=new Linea(mouseX,mouseY);
linea.

}

function draw(){
    

}

function mousePressed(){
inicioX=mouseX;
inicioY=mouseY;
estaDiburando=true;
}

function mouseReleased(){
    estaDiburando=false;
}
function mouseDragged(){
    finX=mouseX;
    finY=mouseY;
}
