var randomNumber1 = Math.floor((Math.random() * 6) + 1)
console.log(randomNumber1)
var randomNumber2 = Math.floor((Math.random() * 6) + 1)
console.log(randomNumber2)

var image1 = document.querySelectorAll("img")[0].setAttribute("src","images/dice" + randomNumber1 + ".png")
var image2 = document.querySelectorAll("img")[1].setAttribute("src","images/dice" + randomNumber2 + ".png")

if (randomNumber1 > randomNumber2) {
  var title =  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
  var title = document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
} else {
  var title = document.querySelector("h1").innerHTML = "Draw!"
}