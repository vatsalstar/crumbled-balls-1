
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,rect1,rect2,rect3;
var weight,speed;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	speed = random(55,90);
	weight = random(300,1500);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	ball = createSprite(100,640,50,50);
	ball.velocityx = speed;

	
	rect1 = createSprite(width/2-100,600,15,120);
	rect1.shapeColor = "red";

	rect2 = createSprite(width/2,660,200,15);
	rect2.shapeColor = "red";

	rect3 = createSprite(width/2+100,600,15,120);
	rect3.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(0);

  groundSprite.display();
  rect1.display();
  rect2.display();
  rect3.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === Down_ARROW) {
		Matter.Body.setStatic(ball,false);
	   
	 }
	}



