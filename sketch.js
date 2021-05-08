
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var leftbox, rightbox,bottombox;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,700,800,100)
	ball = new Ball (100,600,30);
	bottombox = new Box(700,600,100,20)
	rightbox = new Box(750,610,20,100)
	leftbox = new Box(650,610,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  //keyPressed();
  
  ground.display();
  ball.display();
 leftbox.display();
 rightbox.display();
 bottombox.display();
}


function keyPressed() 
{
	if (keyCode === UP_ARROW)
	{
      Matter.Body.applyForce ( ball.body, ball.body.position, {x:125,y:-115});

	}

}


