const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    
    box1 = new box(400,100,100,70);
    box2 = new box(440,50,100,100)

    ground1 = new ground(width/2,height-10,width,20)
    

    // var ball_options ={
    //     restitution: 1.0
    // }

    // ball = Bodies.circle(200,100,20, ball_options);
    // World.add(world,ball);

    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    // ellipseMode(RADIUS);
    // ellipse(ball.position.x, ball.position.y, 20, 20);
}