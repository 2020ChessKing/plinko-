const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
var width, height;

function setup() {
  engine =  Engine.create();
  world = engine.world;

  createCanvas(480,800);
  width = 480;
  height = 800;

  gr = new Ground(240, 795, 480, 10); 
}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function draw() 
{
  Engine.update(engine);

  background(0);

  //PARTICLE
  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 100, 10));
  }

  //DIVISION
  for(var k = 0; k <= width; k = k + 80)
  {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }


  //PLINKO
  for(var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j, 75));
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j <= width - 10; j = j + 50)
  {
    plinkos.push(new Plinko(j, 175));
    plinkos.push(new Plinko(j, 375));
  }

  gr.display();

  //PARTICLE
  for(var j=0; j<particles.length; j++)
  {
  particles[j].display();
  }

  //DIVISION
  for(var k=0; k<divisions.length; k++)
  {
    divisions[k].display();
  }

  //PLINKO
  for( var j=0; j<plinkos.length; j++)
  {
    plinkos[j].display();
  }
}