var bg, bgImg;
var caterpillar, caterpillarImg;
var asteroids, asteroidsImg;
var enemy, enemyImg;
var backgroundImg, backGround;
var ast1, ast2, ast3;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0;

function preload(){

  bgImg = loadImage("assets/space.gif");
  caterpillarImg = loadImage("caterpillar.gif");
  asteroidsImg = loadImage("assets/asteriod1.png");
  backgroundImg = loadImage("assets/space.gif");

  enemyImg = loadImage("assets/enemy.png");
}
function setup(){
 createCanvas(windowWidth, windowHeight);

 backGround = createSprite(windowWidth, windowHeight);
  backGround.addImage(backgroundImg);
  //backGround.scale = 1;
  backGround.velocityX = -(9 + 3*score/10);


 caterpillar = createSprite(900, 500, 50, 50);
 caterpillar.addImage("running", caterpillarImg );

 asteroidsGroup = new Group();

}
function draw(){
  background(0);

  if (gameState === PLAY) {
    backGround.velocityX = -3;

    if (backGround.x < 100) {
      backGround.x = width / 2;
    }
  }
  SpawnAsteroids();
  drawSprites();

}

function SpawnAsteroids(){
    asteroids = createSprite(350, 550);
    asteroids.addImage("asteroids", asteroidsImg);
    asteroids.lifetime = 200;
    asteroids.velocityX = -(6 + 3*score/10);
    asteroids.x = Math.round(random(390,700));
    asteroids.scale = 0.2;
    asteroids.debug = true;
    
    asteroidsGroup.add(asteroids);
    asteroids.setCollider("rectangle",0,10,200,200);
    
    enemy = createSprite(300, 500);
    enemy.addImage("enemy", enemyImg);
    enemy.x = Math.round(random(300,600));
    enemy.velocityX = -(6 + 3*score/10);
    enemy.lifetime = 200;
    
    enemy.scale = 0.2;
    enemy.debug = true;
    enemy.setCollider("rectangle",0,10,200,200);
    //enemy.depth = asteroids.depth;
    asteroidsGroup.add(enemy);
}