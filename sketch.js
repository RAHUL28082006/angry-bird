const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1
var ground

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(150,220,20,20)
    ground=new Ground(200,380,175,50)
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   ground.display();
}