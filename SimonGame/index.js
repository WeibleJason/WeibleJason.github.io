
gamePattern = [];
userClickedPattern = [];

buttonColors = ["red", "blue", "green", "yellow"]
var level = 0;
var started = false;


$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });





$(".btn").click(function () {

    userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    var index = buttonColors.indexOf(userChosenColor);
    checkAnswer(index);
})


function nextSequence() {
    userClickedPattern = [];
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    $("#" + String(randomChosenColor)).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $("#level-title").text("Level " + level);
    level++;
    return randomNumber;
} 

function playSound(name) {
    var sound = new Audio("sounds/" + String(name) + ".mp3");
    sound.play();
}

function animatePress(currentColor) {
    $("#" + String(currentColor)).addClass("pressed");
    setTimeout( function () { $("#" + String(userChosenColor)).removeClass("pressed"); }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
  
      } else {
  
        console.log("wrong");
  
        playSound("wrong");
  
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        
        startOver();
      }
}


function startOver() {

    
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
  }



