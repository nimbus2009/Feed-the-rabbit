//Rabbit project code

var garden,rabbit;
var gardenImg,rabbitImg;
var broccoli,broccoliImg;
var carrot,carrotImg;
var carGroup,broGroup;

var score=0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  broccoliImg= loadImage("broccoli.png");
  carrotImg= loadImage("carrot.png");
}

function setup(){
  
  createCanvas(400,400);
  carGroup=new Group();
  broGroup=new Group();
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.position.x=mouseX;

  if(frameCount%140==0) {
    spawnBroccoli();
  }
  if(frameCount%150==0) {
    spawnCarrot();
  }

  if(carGroup.collide(rabbit)) {
    carGroup.destroyEach();
    score+=3;
  }
  if(broGroup.collide(rabbit)) {
    broGroup.destroyEach();
    score+=2;
  }

  drawSprites();

  textSize(15);
  fill("white");
  stroke("white");
  strokeWeight(0.5);
  text("Score - " + score,300,20);
}


function spawnBroccoli() {
  broccoli = createSprite(Math.round(random(0,400)),-20,10,10);
  broccoli.velocityY=2;
  broccoli.addAnimation("br",broccoliImg);
  broccoli.scale=0.35;
  broGroup.add(broccoli);

  if(broccoli.position.y===390) {
    broccoli.destroy();
  }
}

function spawnCarrot() {
  carrot = createSprite(Math.round(random(0,400)),-20,10,10);
  carrot.velocityY=2;
  carrot.addAnimation("cr",carrotImg);
  carrot.scale=0.35;
  carGroup.add(carrot);

  if(carrot.position.y===390) {
    carrot.destroy();
  }
}