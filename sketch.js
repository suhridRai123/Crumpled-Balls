var ball,invSprite,bd1,bd2,bd3;
var packballbageBody,ground, add
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	ball=createSprite(100, 80, 10,10);
	ball.scale=5
	ball.shapeColor = "red"


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bd1 = createSprite(width/2, 650, 200,20)
	bd1.shapeColor = color("grey")
	bd2 = createSprite(width/2-90, 590, 20,100)
	bd2.shapeColor = color("grey")
	bd3 = createSprite(width/2+90, 590, 20,100)
	bd3.shapeColor = color("grey")

	engine = Engine.create();
	world = engine.world;

	ballb = Bodies.circle(200 , height/2 , 5 , {restitution:0, isStatic:false});
	World.add(world, ballb);

	invSprite = Bodies.rectangle(width/2, 400 , width, 10 , {isStatic:true} );
 	World.add(world, invSprite);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bd1 = Bodies.rectangle(width/2, 650, 200, 60 , {isStatic:true} );
	World.add(world, bd1);
	bd2 = Bodies.rectangle(width/2-90, 590, 20, 200 , {isStatic:true} );
 	World.add(world, bd2);
	bd3 = Bodies.rectangle(width/2+90, 590, 20, 200 , {isStatic:true} );
	World.add(world, bd3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.x= ballb.position.x 
  ball.y= ballb.position.y
 drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
		invSprite.position.y = invSprite.position.y + 200
		ballb.position.x = ballb.position.x + 15
  }
}