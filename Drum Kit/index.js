var drumButtons = document.querySelectorAll(".drum");

for (var i=0; i<drumButtons.length; i++){
  drumButtons[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonName = this.getInnerHTML();
  var audioPath = "sounds/";
  switch (buttonName) {
    case "w":
      audioPath += "snare.mp3"
      break;
    case "a":
      audioPath += "tom-1.mp3"
      break;
    case "s":
      audioPath += "tom-4.mp3"
      break;
    case "d":
      audioPath += "kick-bass.mp3"
      break;
    case "j":
      audioPath += "tom-3.mp3"
      break;
    case "k":
      audioPath += "tom-2.mp3"
      break;
    case "l":
      audioPath += "crash.mp3"
      break;
    default:
  }
  var audio = new Audio(audioPath);
  audio.play();
}
