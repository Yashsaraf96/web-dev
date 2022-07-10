var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


img1 = document.getElementsByClassName("img1")
img2 = document.getElementsByClassName("img2")
img1[0].setAttribute("src", "images/dice" + randomNumber1 + ".png")
img2[0].setAttribute("src", "images/dice" + randomNumber2 + ".png")

var header = document.getElementsByTagName("h1")[0]
if (randomNumber1 > randomNumber2) {
  header.innerText = "Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
  header.innerText = "Player 2 wins!"
} else {
  header.innerText = "Draw!"
}
