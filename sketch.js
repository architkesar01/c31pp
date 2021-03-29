const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine, world;


var particles = [];
var ground;
var di;
var plinkos=[];
var di=[];


function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Gr(400, 200, 50, 50);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new P(j , 50))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new P(j ,80))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new P(j ,115))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new P(j ,150))
  }
  for(var j = 0; j <=width; j= j+80){
    di.push(new D(j, height/2, 10, height));
  }
}



function draw() {
  background(255,255,255); 
  background(0);
  Engine.update(engine) 
 

  if(frameCount % 20 === 0){
    particle = new Pa(random(130, 400), 0, 7, random(0, 400));
    particles.push(particle);
  }

  

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

 
  for(var j = 0; j<di.length;j++){
    di[j].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


  drawSprites();
}