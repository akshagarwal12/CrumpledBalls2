var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var paper,ground1,bottom,left,right
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,250,70)


	

	//Create a Ground
	ground1 = new Ground (400, 650, 800, 100 );
	basket= new Bin(520,500,600,495,680,500)

	Engine.run(engine);
  
}




function draw() {

  
  rectMode(CENTER);
  background(255);
	ground1.display();
	paper.display();
	basket.display();
  drawSprites();
 
}
function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-115})
	}

}



