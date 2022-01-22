var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var gameState , gameState= 0;
var score = 0;
var seaweed, seaweedImg;
var line, lineImg;
var gameover, gameoverImg;


function preload(){
  oceanImg = loadImage("water.jpg");
  coinImg = loadImage("coin.png");
  climberImg = loadImage("seaweed.png");
  frogImg = loadImage("frog.png");
  seaweedImg= loadImage("seaweed.png");
  lineImg= loadImage("line.jpg");
  gameoverImg=loadImage('game over.jpg');
}

function setup(){
  createCanvas(580,450);
  
  ocean = createSprite(300,300,200,200);
  ocean.addImage("ocean",oceanImg);
  ocean.velocityY=-1;
  
  frog = createSprite(250,250,50,50);
  frog.scale = 0.1;
  frog.setCollider('circle',10,10,10);
  frog.addImage("frog", frogImg);  
  frog.velocityY=3;
  

  coinGroup=new Group();
  climbersGroup=new Group();
  
  line=createSprite(0,470);
  line.addImage("line",lineImg);
  line.scale=5;

  gameover=createSprite(280,200);
  gameover.addImage("gameover",gameoverImg);
  gameover.visible=false;
}

function draw(){
  background('blue');
  drawSprites();
  textSize(20);
  text('Score=' + score, 450,30);
  if (gameState == 0) {
     if(ocean.y<150){
       ocean.y=300;
       }
     if(frog.isTouching(coinGroup)){
       coinGroup.destroyEach();
      
        score = score + 1;
        
     }
    
      
     if(keyDown('space')){
       frog.y= frog.y-30;
     } 

    if(keyDown('left')){
        frog.x = frog.x-5;
       }
     
    if(keyDown('right')){
        frog.x = frog.x+5;
     
       }
       spawnCoin();     
    
    }
  
         
     
     
     
    
      if(frog.isTouching(line))
      {gameState = "end";
  

  if (gameState == "end"){
    
        ocean.velocityY=0;
        coinGroup.destroyEach();
        climbersGroup.destroyEach();
        gameover.visible=true;
        
        
        
         }
        
    
  }

}

      
function spawnCoin() {
  
  if (frameCount % 280 === 0) {
    coin=createSprite(Math.round(random(50,400)),30,100,100);
    coin.addImage('coin',coinImg);
    
    coin.scale=0.1;
    coin.velocityY=1;
    coin.lifetime=450;  
    coinGroup.add(coin);
    
    
    
    climber=createSprite(coin.x,80,100,100);
    climber.addImage('climber',climberImg);
    climber.scale=0.4;
    climber.velocityY=1;
    climber.lifetime=450;
    climbersGroup.add(climber);
    
    
   
  }
}

