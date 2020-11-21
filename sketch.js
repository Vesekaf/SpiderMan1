const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var spiderman;
var bgImg;
var ground;
function preload(){

  bgImg = loadImage("city.jpg");



}
function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  spiderman = new Spiderman(displayWidth/2, displayHeight/2, 100, 100); 

  ground = new Ground(displayWidth/2, displayHeight, displayWidth, 20);

}

function draw() {
  background(bgImg);

  Engine.update(engine);
  spiderman.display();
  ground.display();

  drawSprites();

  
}

/*function keyPressed(){
  if(keyCode === 37){
            
      Matter.Body.setVelocity(spiderman.body, {x: -1, y:0});
      
  }
}

function keyPressed(){
  if(keyCode === 39){
            
      Matter.Body.setVelocity(spiderman.body, {x: 1, y:0});
      
  }
}
*/
