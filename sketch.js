const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4,ball5;
var log;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Paper(100,560,30);
	ball2 = new Paper(150,560,30);
	ball3 = new Paper(200,560,30);
	ball4 = new Paper(250,560,30);
	ball5 = new Paper(300,560,30);

    log = new Log(200,200,300,30);

    rope1 = new Rope(ball1.body,log.body,-50*2,0);
	rope2 = new Rope(ball2.body,log.body,-25*2,0);
	rope3 = new Rope(ball3.body,log.body,-1*2,0);
	rope4 = new Rope(ball4.body,log.body,25*2,0);
    rope5 = new Rope(ball5.body,log.body,50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  log.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
 
  keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:85})
	}
}




