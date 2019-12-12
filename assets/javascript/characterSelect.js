var character = null;
var selectedCharacter = document.getElementById('selectedCharacter');
var startGameBtn = document.getElementById('startGame');

var allCharacters = document.querySelectorAll('.character');

allCharacters.forEach(function(character) {


    character.addEventListener("click", function() {

        //remove the "selected" class from all characters, then add on clicked character
        clearSelectedClassFromAllCharacters();

        //get character name from data-attribute
        var characterName = this.dataset.name;

        this.classList.add("selected");
        
        // set the character variable to the character name
        character = characterName;
        selectedCharacter.innerHTML = character;
        this.classList.add("selected-character");


        localStorage.setItem("character", character);

        if(character !== null) {
            startGame.disabled = false;
        }
        else {
            startGame.disabled = true; 
        }

        // Scroll to top if character selected
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
          });
    })
})

// if start game btn is clicked, take us to the game site
startGame.addEventListener("click", function() {
    window.location.href = "game.html";
})

// loops through the characters and removes the selected class, called when we click on character
function clearSelectedClassFromAllCharacters() {
    allCharacters.forEach(function(character) {
        character.classList.remove("selected");
    })
}

// takes to top when clicked on button, that only appears on media devices
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}