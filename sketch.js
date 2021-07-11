
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftSide;
var rightSide;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill("yellow");
	var opsition = {
		isStatic : true,
	}
	ground = new Ground(400,690,800,20,opsition);
	leftSide = new Ground(500,645,10,70,opsition);
	rightSide = new Ground(650,645,10,70,opsition);

	push();
	
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:1,
		density:1.2,
	}
	fill("white")
	ball = Bodies.circle(200,350,40,options);
	World.add(world,ball);
	pop();
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,40);

  ground.display();
  leftSide.display();
  rightSide.display();

  
  
  drawSprites();
 
}



