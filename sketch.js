
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;



function setup() {
	createCanvas(900, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  paper=new Paper(250,150,25)
	ground=new Ground(450,385,900,30)
  e1=new Ground(0,200,50,400)
  bin1= new Bin(650,360,130,15)
	bin2= new Bin(580,325,15,65)
	bin3= new Bin(720,325,15,65)
  bini1= new Bini(650,320,5,5)
  connector= new Connection(paper.paper,{x:250,y:150})
}

function mouseDragged(){
  Matter.Body.setPosition(paper.paper,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  connector.breakTheConnection()
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.paper,paper.paper.position,{x:20,y:-30})
  }
}

function draw() {
  rectMode(CENTER);
  background("pink");
  drawSprites();
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  bini1.display();
  connector.display();
  e1.display();
  textSize(25)
  textFont("Audiowide")
  text("Vaibhav Raj",380,100)}


