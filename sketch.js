const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos = [];
var particle;
var divs = [];
var falls = [];

var gameState = "start";  

var score = 0;
var count = 0; 

function setup() {

  
  var canvas = createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,590,400,20)

  for(var i = 100; i <= 400; i=i+100){

  
    for(var j = 100; j <= 380; j=j+100){
      plinkos.push(new Plinko(j,i,15));
    }
  }

  for(var i = 150; i <= 350; i=i+100){

  
    for(var j = 50; j <= 380; j=j+100){
      plinkos.push(new Plinko(j,i,15));
    }
  }

  for(var x = 0; x <= 400; x=x+100) {

    divs.push(new Ground(x,550,10,200))

  }

}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  ground.display()

  for(var j = 0; j < plinkos.length; j++){

    plinkos[j].display();
  }

  for(var g = 0; g < divs.length; g++){

    divs[g].display();
  }

 

  
textSize(30);
fill("grey")
text("Score: " + score, 150,45) 

textSize(25);
fill("grey")
text("100" , 25,500)

textSize(25);
fill("grey")
text("50" , 135,500)

textSize(25);
fill("grey")
text("50" , 238,500)

textSize(25);
fill("grey")
text("100" , 330,500)

textSize(13);
fill("grey")
text("Press any key to begin, you get 5 tries and can move your mouse." , 10,13)



if(count == 5){
  
  gameState = "end"; 

  textSize(25);
  fill("grey")
  text("GAME OVER" , 137,75)



}
if(particle != null){

  particle.display()

  if(particle.body.position.y>500)
  {
    if(particle.body.position.x < 100 && particle.body.position.x > 0)
    {
      score=score+100;
      particle=null;
      if(count>=5) gameState ="end";

    }

    if(particle.body.position.x < 300 && particle.body.position.x > 100)
    {
      score=score+50;
      particle=null;
      if(count>=5) gameState ="end";

    }

    if(particle.body.position.x < 400 && particle.body.position.x > 300)
    {
      score=score+100;
      particle=null;
      if(count>=5) gameState ="end";

    }
  }

}


  drawSprites();
}              


function keyPressed(){
   
  if(gameState !== "end"){
    count++;
    particle=new Particle(mouseX, 1, 10);
  }

}