var database;
var gameState = 0, playerCount;
var Player,game,form;
var allPlayers;
var car1,car2,car3,car4,cars;
var car1Img,car2Img,car3Img,car4Img;
var trackImg;

function preload(){
    car1Img = loadImage("Images/car1.png");
    car2Img = loadImage("Images/car2.png");
    car3Img = loadImage("Images/car3.png");
    car4Img = loadImage("Images/car4.png");
    trackImg = loadImage("Images/track.jpg");
}

function setup(){
  
  createCanvas(displayWidth-20,displayHeight-30);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();


 
}

function draw(){
  background("white");
  
  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  if(gameState === 2){
    game.end();
  }
}

