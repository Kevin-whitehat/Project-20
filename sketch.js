var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bath;
var astronaut;
var topEdge, bottomEdge, leftEdge, RightEdge;


function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move1.png", "move2.png");
  bath = loadAnimation("bath1.png", "bath2.png");
}

function setup() {
  createCanvas(800, 400);
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;


  topEdge = createSprite(400, 5, 800, 10);
  bottomEdge = createSprite(400, 395, 800, 10);
  leftEdge = createSprite(5, 200, 10, 400);
  rightEdge = createSprite(795, 200, 10, 400);

  topEdge.visible = false;
  bottomEdge.visible = false;
  leftEdge.visible = false;
  rightEdge.visible = false;

  //astronaut.debug = true;
  astronaut.setCollider("circle", 0, 0, 1000);
}

function draw() {
  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing", brush);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating", eat);
    astronaut.y = 350;
    astronaut.x = 250
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming", gym);
    astronaut.y = 350;
    astronaut.x = 400;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing", bath);
    astronaut.y = 200;
    astronaut.x = 400;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("M")) {
    astronaut.addAnimation("bathin", move);
    astronaut.changeAnimation("bathin", move);
    astronaut.velocityX = 4;
    astronaut.velocityY = -4;
  }

  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(bottomEdge);
  astronaut.bounceOff(rightEdge);
  astronaut.bounceOff(leftEdge);

  background(bg);
  instructions();
  drawSprites();
}

function instructions() {
  textSize(20);
  text("Instructions:", 10, 60);
  textSize(10);

  text("Up arrow = Brushing", 10, 80);
  text("Down arrow = Gymming", 10, 90);
  text("Left arrow = Eating", 10, 100);
  text("Right arrow = Bathing", 10, 110);
  text("m key = Moving", 10, 120);
}