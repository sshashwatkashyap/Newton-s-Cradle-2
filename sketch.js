const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob, roof, rope;

function preload(){}

function setup() {

 createCanvas(windowWidth/2, windowHeight/2);

 engine = Engine.create();
 world = engine.world;

 roof1 = new Roof(300, 50, 40, 100);

 roof2 = new Roof(250, 50, 40, 100);

 roof3 = new Roof(200, 50, 40, 100);

 roof4 = new Roof(350, 50, 40, 100);

 roof5 = new Roof(400, 50, 40, 100);

 bob1 = new Bob(300, 450);

 bob2 = new Bob(250, 450);

 bob3 = new Bob(200, 450);

 bob4 = new Bob(350, 450);

 bob5 = new Bob(400, 450);

 rope1 = new Rope(bob1.body, roof1.body);

 rope2 = new Rope(bob2.body, roof2.body);

 rope3 = new Rope(bob3.body, roof3.body);

 rope4 = new Rope(bob4.body, roof4.body);

 rope5 = new Rope(bob5.body, roof5.body); 

 Engine.run(engine);
  
}


function draw() {

 rectMode(CENTER);

 background(100);

 /*roof1.display();

 roof2.display();

 roof3.display();

 roof4.display();

 roof5.display();*/
 
 bob1.display();

 bob2.display();

 bob3.display();

 bob4.display();

 bob5.display();

 rope1.display();

 rope2.display();

 rope3.display();

 rope4.display();

 rope5.display();

}

function mouseDragged(){
              
     Matter.Body.setPosition(bob3.body,{x:mouseX, y:mouseY})
              
}