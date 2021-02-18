var randomNumber1 = Math.floor(Math.random() * 7)
console.log(randomNumber1)
var randomNumber2 = Math.floor(Math.random() * 7)
console.log(randomNumber2)

var image1 = document.querySelectorAll("img")[0].setAttribute("src","images/dice" + randomNumber1 + ".png")
