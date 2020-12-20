var form, game, player;
var gameState = 0;
var playerCount;
var database, canvas;

function setup(){
 canvas = createCanvas(400,400);
 database = firebase.database();
 
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
  
}

