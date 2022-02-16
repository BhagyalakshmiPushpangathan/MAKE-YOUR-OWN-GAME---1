var pathImg,canvas;
var track, car1, car2,car3;
var path, player1, player2,player3;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/track.png");
  player1 = loadImage("images/car1.png");
  player2 = loadImage("images/car2.png");
  player3 = loadImage("images/car3.png");
  raceSound = loadSound("sounds/race-car.mp3")
  
}

function setup() {
  createCanvas(1200,500);
  //moving background
  path=createSprite(950,250);
  path.addImage(pathImg);
  //path.velocityX = -3;
  path.scale= 3;

  car1=createSprite(240,360);
  car1.addImage(player1);
  //car1.scale=;

  car2=createSprite(240,135);
  car2.addImage(player2);
  car2.scale=0.4;

  car3=createSprite(240,135);
  car3.addImage(player3);
  car3.scale=0.4;

}

function draw() {
  background(0);  

  drawSprites();
  textSize(35);
  fill(255);
  text("Distance: "+ distance,900,45);
  
  if(gameState===PLAY){
    
    distance = distance + Math.round(getFrameRate()/50);
    path.velocityX = -(6 + 2*distance/100);

    if(keyCode === RIGHT_ARROW){
      car1.velocityX = 1; 
      raceSound.play();
    }

   //code to reset the background
    if(path.x < 0 ){
      path.x = width/10;
      
    }  
  
  }
}