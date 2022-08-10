const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1,box2,box3,box4,box5;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world
  
  ground = new Ground(600,height,1200,20);

  box1 = new Box(700,320);
  box2 = new Box(920,320);
  pig = new Pig(810,350);
  log = new Log(810,260,300,PI/2);

  box3 = new Box(700,240);
  box4 = new Box(920,240);
  pig1 = new Pig(810,220);

  log2 = new Log(810,180,300,PI/4);
  //box5 = new Box(800,120);

}

function draw() {
  background(0);  
  //Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground.display();
  pig.display();
  pig1.display();
  log.display();
  log2.display();
}