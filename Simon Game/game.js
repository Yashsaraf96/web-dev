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
