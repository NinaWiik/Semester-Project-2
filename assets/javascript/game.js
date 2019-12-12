var character1Score = 0;
var characterScoreDisplay = document.getElementById("characterScoreDisplay");
var characterDisplay = document.getElementById("characterDisplay");

console.log("characterDisplay", characterDisplay);

// get the character the user selected from local storage
var character = localStorage.getItem("character");

console.log("character", character);

var token = document.getElementById("token");
var characterClass = character.toLowerCase().replace(" ", "-");
token.classList.add(characterClass);


// add the character class to the characterDisplay div
characterDisplay.classList.add(characterClass);
characterDisplay.innerHTML = character;

characterScoreDisplay.innerHTML = character1Score;

// get the dice element
var dice = document.getElementById("dice");

// add a click listener to the dice
dice.addEventListener("click", function() {
    //inside a function the "this" keyword refers to the element the function is running on
    // needs to get stored so we can use it in the setTimeout function
    var theDice = this;

    // change the inner HTML
    theDice.innerHTML = "...";
    // add a class
    theDice.classList.add("rolling");

    //setTimeout function waits before running the code inside the function
    setTimeout(function() {
        // get a number between 1 and 6
        var diceRoll = Math.floor(Math.random() * 6) + 1;

        // update the score and moves token according to that score
        updateScore(diceRoll);
        moveToken();

        // create a class for the dice
        var diceClass = "dice" + diceRoll;

        // clear all classes on the dice
        theDice.classList = ""

        // add the dice class
        theDice.classList.add(diceClass);

        // we set the innerHTML of the button to what the random number is
        theDice.innerHTML = diceRoll;
        // remove the class
        theDice.classList.remove("rolling");
    }, 500); // amount of seconds waiting
});

// function that updates the score
function updateScore(newRoll) {
    // add the new dice rolll to the character score
    character1Score = character1Score + newRoll;
    updateScoreDisplay(character1Score);
}

function updateScoreDisplay(newScore) {
    // display the new score
    characterScoreDisplay.innerHTML = newScore;
}

// adds a function that will run when the character hits one of the dragon traps
function hitATrap() {
    // minus a number from the character score
    character1Score = character1Score - 2;
    // display the new score
    updateScoreDisplay(character1Score);
    trapModal.style.display = "block";
    // call the moveToken function again to loop through the tiles and place the token on the new character score
    moveToken();
}

// function that moves the token
function moveToken() {
    // get all the tiles
    var tiles = document.querySelectorAll(".tile");

    // total number of tiles
    var totalTiles = tiles.length;

    // check if token has gone past total
    // if it has, go back, if not, the token will just continue forever
    if (character1Score > totalTiles - 1) {
        var scorePastTotal = character1Score - (totalTiles - 1);
        var recalculateScore = totalTiles - scorePastTotal;
        character1Score = recalculateScore;
        updateScoreDisplay(character1Score);
    }

    // loop through the tiles
    for(var i = 0; i < totalTiles; i++) {

        //elements inside the tile
        var elementsInsideTile = tiles[i].childNodes;

        // loop through the elements to check if #token is inside it
        elementsInsideTile.forEach(function(element) {
            // if token1 is inside, remove it
            if (element.id === "token") {
                element.remove();
            }
        });

        // check if the token is on the traps, if it is, run the hitATrap function, if not, snap out. 
        if (character1Score === 4 || character1Score === 7 || character1Score === 17 || character1Score === 21 || character1Score === 24) {
            hitATrap();
            break;
        }


        //chcek if the score (-1) matches the tile
        // if it is, append the token element
        if (i === character1Score) {
            // make the token element
            var tokenOne = document.createElement("div");

            tokenOne.classList.add("token", characterClass);
            tokenOne.id = "token";

            tiles[i].appendChild(tokenOne);

        
            // check if token is on the last tile, if it is
            if (character1Score === totalTiles - 1) {
                // go to winners page

                window.location.href = "winner.html";
            }
        }
    };

}
