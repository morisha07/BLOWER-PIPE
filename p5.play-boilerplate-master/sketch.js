const Engine = Matter.Engine; 
const Render = Matter.Render; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites; 
const Composite = Matter.Composite;

var ball,blower,blowerMouth;
var engine,world;
var Button;


function setup() {
  var canvas = createCanvas(500, 500); 
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20); 
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  


 Button = createButton('Click to blow');
 Button.position(width/2,height - 100);
 Button.class("blowButtom");
 Button.mousePressed(blow);
}
  

function draw(){
  background(255,255,255); 
  Engine.update(engine); 
ball.show();
blower.show();
blowerMouth.show();
  drawSprites();
}

function blow(){
 Matter.Body.applyForce(ball.body,{x: 0,y: 0}, {x: 0,y: 0.05});
}