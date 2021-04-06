const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane (600,height,1200,20)
    hammer = new Hammer (10,100);
    rubber1 = new Rubber (600,500,10);
    rubber2 = new Rubber (570,500,10);
    rubber3 = new Rubber (630,500,10);
    rubber4 = new Rubber (540,500,10);
    rubber5 = new Rubber (660,500,10);
    iron1 = new Iron (200,500,70,50);
    iron2 = new Iron (280,500,70,50);
    iron3 = new Iron (240,400,70,50);
    stone1 = new Stone (900,500,80,60);
    stone2 = new Stone (920,400,50,60);
    stone3 = new Stone (840,500,70,90);
    stone4 = new Stone (1020,400,50,90);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    iron1.display();
    iron2.display();
    iron3.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
}