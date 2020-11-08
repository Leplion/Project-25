
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper1
var Dustbin1
var Dustbin2
var Dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper1 = new Paper(400,100,50);
	Dustbin1 = new Dustbin(400,250,200,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

	function keyPressed (){
		if(keyCode ===UP_ARROW){
			Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:85, y:-85});

		}
	}



 
  Dustbin1.display();
  Paper1.display();
  drawSprites();
 
}



