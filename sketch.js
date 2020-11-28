
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(20,500, 70);
	ground = new Ground(400, 680, 800, 15);
	bin = new Bin(555,650);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("pink");

  ground.display();
  bin.display();
  paper.display();
  
  bin.display();

  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body, paper.body.position, { x:90, y:-95});
	}
	if(keyCode === DOWN_ARROW ){
		Matter.Body.applyForce(paper.body, paper.body.position, { x:0, y:2});
	}
}



