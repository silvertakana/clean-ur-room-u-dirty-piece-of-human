
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper = new Paper(100,height/2,50,50,'paper.png');
	
	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(230);
  push()
  fill(0);
    stroke('brown')
    strokeWeight(2)
  text("click to throw", width/2, height/2)
  pop()
  if(mouseIsPressed){
	  throwing(mouseX,mouseY,10,paper);
  }
 paper.display();
 console.log(paper.body)
  groundObject.display();
  dustbinObj.display();
  
}
function throwing(x,y,force,obj){
	var xvel1 = x-obj.body.position.x;
	var yvel1 = y-obj.body.position.y;
	var xvel2 = (xvel1/abs(xvel1))* force;
	var yvel2 = (yvel1/abs(yvel1))* force;
	Matter.Body.setVelocity(obj.body, createVector(xvel2,yvel2))
}
