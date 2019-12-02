var character = null;
var selectedCharacter = document.getElementById('selectedCharacter');
var startGameBtn = document.getElementById('startGame');

var allCharacters = document.querySelectorAll('.character');

allCharacters.forEach(function(character) {
    
    character.addEventListener("click", function() {

        //get character name from data-attribute
        var characterName = this.dataset.name;


        // set the character variable to the character name
        character = characterName;
        selectedCharacter.innerHTML = character;
        this.classList.add("selected-character");


        localStorage.setItem("character", character);

        if(character !== null) {
            startGame.hidden = false;
        }
        else {
            startGame.hidden = true; 
        }

    })
})

startGame.addEventListener("click", function() {
    window.location.href = "game.html";
})