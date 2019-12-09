var character = null;
var selectedCharacter = document.getElementById('selectedCharacter');
var startGameBtn = document.getElementById('startGame');

var allCharacters = document.querySelectorAll('.character');

allCharacters.forEach(function(character) {


    character.addEventListener("click", function() {

        //remove the "selected" class from all characters
        // then add it the one that was clicked on
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
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
          });
    })
})

startGame.addEventListener("click", function() {
    window.location.href = "game.html";
})

// this loops through the characters and removes the selected class
// it's called when we click on each character
function clearSelectedClassFromAllCharacters() {
    allCharacters.forEach(function(character) {
        character.classList.remove("selected");
    })
}