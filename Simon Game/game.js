var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  $("div."+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColor);
}

$("div.btn").click(handleUserClick);

function handleUserClick(){
  var userColor = event.path[0].id;
  userPattern.push(userColor);
  playSound(userColor);
  animatePress(userColor);
  console.log(userPattern);
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
