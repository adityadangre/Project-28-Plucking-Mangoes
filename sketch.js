const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var tree, ground,stone,boy, boy_img;
var bg, bg_img;

function preload()
{
	boy_img=loadImage("boy.png");
	bg_img=loadImage("bg.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	
	boy=createSprite(240,600);
	boy.addImage(boy_img);
	boy.scale=0.15;
	
	tree=new Tree(500,175,610,700);
	ground = new Ground(450,680,2000,15);
	stone = new Stone(160,500,20);
	mango1 = new Mango(1060,60,30);
	mango2 = new Mango(1000,150,30);
	mango3 = new Mango(1150,150,30);
	mango4 = new Mango(880,300,30);
	mango5 = new Mango(920,220,30);
	mango6 = new Mango(800,220,30);
	mango7 = new Mango(910,100,30);
	mango8 = new Mango(1040,250,30);
	mango9 = new Mango(1140,240,30);
	mango10 = new Mango(1250,260,30);
	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(bg_img);

  textSize(30);
  fill("yellow");
  stroke("blue");
  strokeWeight("4");
  text("Press Space To Get Second Chance",50,50);

  drawSprites();
  
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  chain.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:160, y:500});
	  chain.attach(stone.body);
	}
  }
  function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }