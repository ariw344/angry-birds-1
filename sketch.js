const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,450,50,50);
    box2 = new Box(1400,450,50,50);
    ground = new Ground(800,480,1600,20);
    pig1 = new Pig(1300, 450, 50, 50);
    bird = new Bird(200, 200, 40, 40);
    log1 = new Log(1300, 405, 275, 20, PI);
    pig2 = new Pig(1300, 375, 50, 50);
    box3 = new Box(1200, 375, 50, 50);
    box4 = new Box(1400, 375, 50, 50);
    log2 = new Log(1300, 320, 275, 20, PI);
    box5 = new Box(1300, 290, 50, 50);
    log3 = new Log(1350, 280, 120, 20, PI/4)
    log4 = new Log(1250, 280, 120, 20, 3*(PI/4));
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    log3.display();
    box5.display();
    log4.display();
}