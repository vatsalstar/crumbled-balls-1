
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball;
var world;

function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ball=new Paper(200,450,50);
	ground = new Ground(800,470,1600,10);
	dustbin =new Dustbin(1200,450);

	

	  Engine.run(engine);
	 
  
}


function draw() {


  background(0);
  rectMode(CENTER);
  
  ball.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}
function keyPressed (){
	if (keyCode === UP_ARROW) {

	 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	}
	}
