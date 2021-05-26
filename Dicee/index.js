var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var dice1 = document.querySelector("img.img1").setAttribute("src",randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var dice1 = document.querySelector("img.img2").setAttribute("src",randomImage2);

var player1Wins = false;
var player2Wins = false;
if (randomNumber1 > randomNumber2) {
    player1Wins = true;
} else if (randomNumber2 > randomNumber1) {
    player2Wins = true;
} else {
    player1Wins = true;
    player2Wins = true;
}

if (player1Wins && !player2Wins) {
    document.querySelector("div h1").innerHTML = "Player1 Wins!"
} else if (player2Wins && !player1Wins) {
    document.querySelector("div h1").innerHTML = "Player2 Wins!";
} else if (player1Wins && player2Wins) {
    document.querySelector("div h1").innerHTML = "Draw!";
}