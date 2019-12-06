var character = localStorage.getItem("character");

var winnerDisplay = document.getElementById("character");
winnerDisplay.innerHTML = "The winner is " + character;

var winnerDisplay = document.getElementById("winnerDisplay");

var characterClass = character.toLowerCase().replace(" ", "-");

winnerDisplay.classList.add(characterClass);

console.log(winnerDisplay);