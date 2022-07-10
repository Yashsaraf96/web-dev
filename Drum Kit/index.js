var drumButtons = document.querySelectorAll(".drum");

for (var i=0; i<drumButtons.length; i++){
  drumButtons[i].addEventListener("click", handleClick);
}

function handleClick() {
  var audio = new Audio("sounds/tom-1.mp3")
  audio.play()
}
