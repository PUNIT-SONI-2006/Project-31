
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// Creating variables

var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos = []; 
/*
function preload()
{
	
}
*/


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

  
  for (var k = 0; k<=width; k= k+80) {
      divisons.push(new Division(k,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  
  
  for (var b = 0; b<divisons.length; b++) {
    divisons[b].display();
  }

  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var v = 0; v<particles.length; v++) {
    particles[v].display();
  }

  for (var w = 0; w<plinkos.length; w++) {
    plinkos[w].display();
  }


  ground.display();
 

 
}



