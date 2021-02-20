/* Creating random numbers from 1 to 6 in order to change the image */
var randomNumber1 = Math.floor((Math.random() * 6) + 1)
var randomNumber2 = Math.floor((Math.random() * 6) + 1)

/* Selecting the corresponding HTML tag to change the number of the image */
var image1 = document.querySelectorAll("img")[0].setAttribute("src","images/dice" + randomNumber1 + ".png")
var image2 = document.querySelectorAll("img")[1].setAttribute("src","images/dice" + randomNumber2 + ".png")

/* Statement created in order to declare the winner or draw of the game & changing the info in the title */
if (randomNumber1 > randomNumber2) {
  var title =  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
  var title = document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
} else {
  var title = document.querySelector("h1").innerHTML = "Draw!"
}