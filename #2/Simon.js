
/* 
REFERENCE:
https://www.youtube.com/watch?v=n_ec3eowFLQ
*/


// Declaring my variables
let order = []; // An array where the computers button order will be stored.
let playerOrder = []; // An array where the players button order will be stored
let flash; // variable for the flashes
let compTurn; // variable for the computers turn
let turn; // variable for the players turn
let good; // good variable which will be a boolean variable which keeps track if the player is doing good or not
let intervalId; // intervalId which also plays apart in the flashes of circles
let on = false; // on variable  


//Declaring my html elements as constant variables
const turnCounter = document.querySelector("#currentscore");
const highScore = document.querySelector("#highscore");
const indicator = document.querySelector("#indicatorcircle");
const topLeft = document.querySelector("#circularone");
const topRight = document.querySelector("#circulartwo");
const bottomLeft = document.querySelector("#circularthree");
const bottomRight = document.querySelector("#circularfour");
const startButton = document.querySelector("#start");

// Default score for when the game is firstly loaded
turnCounter.innerHTML = "0";
highScore.innerHTML = "0";

//This is my start function which I had to create later on so that the highscore value is stored throughout the rest of the game, which you can see at the bottom of the page where it gets used.
function start1(){
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 0;
  indicator.style.backgroundColor = "green";
  good = true;
}
// Start button which plays the game after 3 seconds after being pressed
startButton.addEventListener('click', (event) => {
  setTimeout(() => {
      play();
  }, 3000);
  

});
// The play button which essentially starts the game off 
function play(){
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  indicator.style.backgroundColor = "green";
  good = true;
  
  // the game runs throughs this for loop and it picks the element at random and is then stored in the order array
  for(var i = 0; i < 999; i++){
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;
  intervalId = setInterval(gameTurn, 800);
}
// This function ends the computers turn once the number of flashes equals the turn its on.
function gameTurn(){
  on = false;
  indicator.style.backgroundColor = "green";
  if(flash == turn){
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }
  // This if statement calls the flash functions 
  if(compTurn){
  
    clearColor();
    setTimeout(() => {
      if(order[flash] == 1) one();
      if(order[flash] == 2) two();
      if(order[flash] == 3) three();
      if(order[flash] == 4) four();
      flash++;
    }, 500);
  }
}
// These flash functions changes the colour to lighter shade for half a second as stated above.
function one(){
  topLeft.style.background = "lightblue";
}
function two(){
  topRight.style.background = "lightyellow";
}
function three(){
  bottomLeft.style.background = "lightgreen";
}
function four(){
  bottomRight.style.background = "indianred";
}
// This clear color function is used a lot throughout the program which changes the colors back to its original colors
function clearColor(){
  topLeft.style.background = "darkblue";
  topRight.style.background = "goldenrod";
  bottomLeft.style.background = "darkgreen";
  bottomRight.style.background = "darkred";
}
// When this function is called it flashes all colors simutaneously 
function flashColor(){
  topLeft.style.background = "lightblue";
  topRight.style.background = "lightyellow";
  bottomLeft.style.background = "lightgreen";
  bottomRight.style.background = "indianred";
}
// These next four elements are the four buttons, which checks if its the right button pressed and then stores it in the player order array and also flash after being clicked.
topLeft.addEventListener('click', (event) =>{
  if(on){
    playerOrder.push(1);
    check();
    one();
      setTimeout(() => {
        clearColor();
      }, 300);
  }
});

topRight.addEventListener('click', (event) =>{
  if(on){
    playerOrder.push(2);
    check();
    two();
      setTimeout(() => {
        clearColor();
      }, 300);
  }
});

bottomLeft.addEventListener('click', (event) =>{
  if(on){
    playerOrder.push(3);
    check();
    three();
      setTimeout(() => {
        clearColor();
      }, 300);
    
  }
});

bottomRight.addEventListener('click', (event) =>{
  if(on){
    playerOrder.push(4);
    check();
    four();
    setTimeout(() => {
    clearColor();
      }, 300);
  }
});
// This is the check function which checks if the player order array and the order array matchup
function check() {
  if(playerOrder[playerOrder.length - 1] != order[playerOrder.length - 1]) 
    good = false;
  // if they do not match the game ends and flashes.
  if(good == false){
    flashColor();
    setTimeout(() =>{
      indicator.style.backgroundColor = "red";
      clearColor();
    }, 800);
   
    // Keeps track of highscore
    if(turnCounter.innerHTML > highScore.innerHTML)
    {
      highScore.innerHTML = turnCounter.innerHTML;
    }
    start1();
  }
  // If it does match the game continues
  if(turn == playerOrder.length && good){
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    
    // If statetments which increases the game speed after the 5th, 9th and 13th round
    if(turnCounter.innerHTML <= 5){
      intervalId = setInterval(gameTurn, 1000);
    }
    else if(turnCounter.innerHTML <= 9)
      {
         intervalId = setInterval(gameTurn, 800);
      }
    else if(turnCounter.innerHTML <= 13)
      {
        intervalId = setInterval(gameTurn, 600);
      }
    else if(turnCounter.innerHTML > 13)
      {
        intervalId = setInterval(gameTurn, 400);
      }
    
   
    }
  
}
