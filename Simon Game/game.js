var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;

function nextSequence(){
  userPattern = [];
  level += 1;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  $("div."+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColor);
}

$(document).keypress(function(){
  if (level === 0) {
    nextSequence();
  }
});

$("div.btn").click(handleUserClick);

function handleUserClick(){
  var userColor = event.path[0].id;
  userPattern.push(userColor);
  playSound(userColor);
  animatePress(userColor);
  checkAnswer(userPattern.length - 1);
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(name){
  $("div#"+ name).addClass("pressed");
  setTimeout(function(){
    $("div#"+ name).removeClass("pressed");
  },100);
}

function checkAnswer(userLastClickIndex){
  if (gamePattern[userLastClickIndex] === userPattern[userLastClickIndex]){
    if (gamePattern.length === userPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }else {
    playSound("wrong");
    $("body").addClass("wrong");
    setTimeout(function(){
      $("body").removeClass("wrong");
    },200);
    $("h1").text("Game Over! Press any key to restart");
  }
}
